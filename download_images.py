import requests
import os
from pathlib import Path

def download_image(url, output_path, referer=None):
    """Descarga una imagen con headers apropiados"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
    }
    
    if referer:
        headers['Referer'] = referer
    
    try:
        session = requests.Session()
        response = session.get(url, headers=headers, timeout=30, allow_redirects=True)
        response.raise_for_status()
        
        # Determinar extensión
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
            ext = '.png'
        
        # Agregar extensión si no la tiene
        if not output_path.endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp')):
            output_path += ext
        
        with open(output_path, 'wb') as f:
            f.write(response.content)
        
        print(f"OK: {os.path.basename(output_path)}")
        return True
    except Exception as e:
        print(f"ERROR: {os.path.basename(output_path)} - {e}")
        return False

if __name__ == '__main__':
    # Crear directorio si no existe
    output_dir = Path('images')
    output_dir.mkdir(exist_ok=True)
    
    referer = 'https://ihourquescos.com/process-1'
    
    images = [
        ('https://cdn.myportfolio.com/5fd79598-5a16-4c08-a121-d78402b4e944/edebddaa-d56c-490c-b40b-be76e34c7b7b_rw_1200.png', 'ideas_inspiration_1.png'),
        ('https://cdn.myportfolio.com/5fd79598-5a16-4c08-a121-d78402b4e944/c772f9e2-18ed-466b-8400-4d77ff7e9eae_rw_1200.png', 'ideas_inspiration_2.png'),
        ('https://cdn.myportfolio.com/5fd79598-5a16-4c08-a121-d78402b4e944/ad29d860-d2e6-4401-a227-35aa3cba93c5_rw_1200.png', 'ideas_inspiration_3.png'),
        ('https://cdn.myportfolio.com/5fd79598-5a16-4c08-a121-d78402b4e944/842cdc9d-af11-4a57-a8d3-2f3a46e8aeed_rw_1200.png', 'ideas_inspiration_4.png'),
        ('https://cdn.myportfolio.com/5fd79598-5a16-4c08-a121-d78402b4e944/71a64a36-b2c8-46f6-bd9a-bec71288b438_rwc_0x0x455x455x455.png', 'ideas_inspiration_5.png'),
        ('https://cdn.myportfolio.com/5fd79598-5a16-4c08-a121-d78402b4e944/6477fe03-4578-4f5f-9dba-83f2895f1463_rw_1200.png', 'ideas_inspiration_6.png'),
        ('https://cdn.myportfolio.com/5fd79598-5a16-4c08-a121-d78402b4e944/3bbf5c2a-dd22-45dc-bd3f-5d6eda80ab62_rw_1200.png', 'ideas_inspiration_7.png'),
    ]
    
    print("Descargando imagenes...\n")
    downloaded = []
    
    for url, filename in images:
        output_path = output_dir / filename
        if download_image(url, str(output_path), referer):
            downloaded.append(f'images/{filename}')
    
    print(f"\nDescargadas {len(downloaded)} de {len(images)} imagenes")
    
    if downloaded:
        print("\nRutas para data.js:")
        print("detailImages: [")
        for img in downloaded:
            print(f"    '{img}',")
        print("]")


