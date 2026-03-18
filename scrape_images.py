import requests
from bs4 import BeautifulSoup
import os
import urllib.parse
from pathlib import Path

def scrape_images_from_url(url):
    """Scrape todas las imágenes de una URL y las descarga"""
    try:
        # Hacer request a la página
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        # Parsear HTML
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Encontrar todas las imágenes
        images = []
        img_tags = soup.find_all('img')
        
        for img in img_tags:
            src = img.get('src') or img.get('data-src') or img.get('data-lazy-src') or img.get('data-original') or img.get('data-srcset')
            if src:
                # Filtrar placeholders y data URIs pequeños
                if src.startswith('data:image'):
                    if len(src) > 100:  # Solo data URIs grandes (imágenes reales)
                        images.append(src)
                    continue
                
                # Convertir URL relativa a absoluta
                if src.startswith('//'):
                    src = 'https:' + src
                elif src.startswith('/'):
                    parsed_url = urllib.parse.urlparse(url)
                    src = f"{parsed_url.scheme}://{parsed_url.netloc}{src}"
                elif not src.startswith('http'):
                    parsed_url = urllib.parse.urlparse(url)
                    base_url = f"{parsed_url.scheme}://{parsed_url.netloc}"
                    src = urllib.parse.urljoin(base_url, src)
                
                # Filtrar imágenes comunes de placeholder
                if 'placeholder' not in src.lower() and 'spacer' not in src.lower():
                    images.append(src)
        
        # Buscar imágenes en el HTML como texto (pueden estar en JavaScript o JSON)
        import re
        html_text = response.text
        
        # Buscar URLs de imágenes comunes
        image_patterns = [
            r'https?://[^\s"\'<>]+\.(?:jpg|jpeg|png|gif|webp|svg)',
            r'/images/[^\s"\'<>]+\.(?:jpg|jpeg|png|gif|webp|svg)',
            r'/img/[^\s"\'<>]+\.(?:jpg|jpeg|png|gif|webp|svg)',
            r'/assets/[^\s"\'<>]+\.(?:jpg|jpeg|png|gif|webp|svg)',
        ]
        
        for pattern in image_patterns:
            matches = re.findall(pattern, html_text, re.IGNORECASE)
            for match in matches:
                if match.startswith('/'):
                    parsed_url = urllib.parse.urlparse(url)
                    match = f"{parsed_url.scheme}://{parsed_url.netloc}{match}"
                if match not in images and 'placeholder' not in match.lower():
                    images.append(match)
        
        # También buscar imágenes en elementos de fondo CSS
        style_tags = soup.find_all(style=True)
        for tag in style_tags:
            style = tag.get('style', '')
            if 'background-image' in style or 'url(' in style:
                import re
                urls = re.findall(r'url\(["\']?([^"\']+)["\']?\)', style)
                for url_found in urls:
                    if url_found.startswith('//'):
                        url_found = 'https:' + url_found
                    elif url_found.startswith('/'):
                        parsed_url = urllib.parse.urlparse(url)
                        url_found = f"{parsed_url.scheme}://{parsed_url.netloc}{url_found}"
                    if url_found not in images:
                        images.append(url_found)
        
        # Filtrar duplicados y preferir versiones de mayor resolución
        unique_images = []
        seen_base = set()
        
        # Ordenar para procesar versiones de mayor resolución primero
        images_sorted = sorted(images, key=lambda x: ('_rw_1200' in x or '_rwc_' in x, x), reverse=True)
        
        for img_url in images_sorted:
            # Extraer ID base de la imagen (sin tamaño)
            base_id = img_url.split('/')[-1].split('_rw')[0].split('_rwc')[0]
            if base_id not in seen_base:
                seen_base.add(base_id)
                unique_images.append(img_url)
        
        print(f"Encontradas {len(unique_images)} imágenes únicas:")
        for i, img_url in enumerate(unique_images, 1):
            print(f"{i}. {img_url}")
        
        return unique_images
        
    except Exception as e:
        print(f"Error al scrapear: {e}")
        return []

def download_images(image_urls, output_dir='images'):
    """Descarga las imágenes a la carpeta especificada"""
    # Crear directorio si no existe
    Path(output_dir).mkdir(exist_ok=True)
    
    downloaded = []
    
    for i, img_url in enumerate(image_urls, 1):
        try:
            # Obtener nombre del archivo
            parsed = urllib.parse.urlparse(img_url)
            filename = os.path.basename(parsed.path)
            
            # Manejar data URIs
            if img_url.startswith('data:image'):
                # Extraer datos de la data URI
                header, data = img_url.split(',', 1)
                ext_match = header.split(';')[0].split('/')
                if len(ext_match) > 1:
                    ext = '.' + ext_match[1]
                else:
                    ext = '.png'
                
                filename = f'ideas_inspiration_{i}{ext}'
                filepath = os.path.join(output_dir, filename)
                
                import base64
                image_data = base64.b64decode(data)
                
                print(f"Descargando {filename} (data URI)...")
                with open(filepath, 'wb') as f:
                    f.write(image_data)
            else:
                # Si no tiene extensión, intentar detectarla del content-type
                if not filename or '.' not in filename:
                    try:
                        response = requests.head(img_url, timeout=5, allow_redirects=True)
                        content_type = response.headers.get('content-type', '')
                        if 'image/png' in content_type:
                            ext = '.png'
                        elif 'image/jpeg' in content_type or 'image/jpg' in content_type:
                            ext = '.jpg'
                        elif 'image/gif' in content_type:
                            ext = '.gif'
                        elif 'image/webp' in content_type:
                            ext = '.webp'
                        else:
                            ext = '.png'  # default
                        filename = f'ideas_inspiration_{i}{ext}'
                    except:
                        filename = f'ideas_inspiration_{i}.png'
                else:
                    # Renombrar con prefijo
                    name, ext = os.path.splitext(filename)
                    filename = f'ideas_inspiration_{i}{ext}'
                
                filepath = os.path.join(output_dir, filename)
                
                # Descargar imagen con headers completos
                print(f"Descargando {filename}...")
                headers = {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Referer': url,
                    'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
                    'Accept-Language': 'en-US,en;q=0.9'
                }
                response = requests.get(img_url, timeout=10, headers=headers)
                response.raise_for_status()
                
                with open(filepath, 'wb') as f:
                    f.write(response.content)
            
            downloaded.append(f'{output_dir}/{filename}')
            print(f"✓ Descargado: {filename}")
            
        except Exception as e:
            print(f"X Error descargando {img_url}: {e}")
    
    return downloaded

if __name__ == '__main__':
    url = 'https://ihourquescos.com/process-1'
    print(f"Scrapeando imágenes de: {url}\n")
    
    # Scrapear imágenes
    image_urls = scrape_images_from_url(url)
    
    if image_urls:
        print(f"\nDescargando {len(image_urls)} imágenes...\n")
        downloaded = download_images(image_urls)
        
        print(f"\nOK Descargadas {len(downloaded)} imagenes:")
        for img in downloaded:
            print(f"  - {img}")
        
        print("\nRutas para agregar a data.js:")
        print("detailImages: [")
        for img in downloaded:
            print(f"    '{img}',")
        print("]")
    else:
        print("No se encontraron imágenes en la página.")

