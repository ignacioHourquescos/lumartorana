// Cargar el proyecto según el ID en la URL
function loadProject() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (!projectId) {
        window.location.href = 'index.html';
        return;
    }
    
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
        window.location.href = 'index.html';
        return;
    }
    
    // Actualizar el contenido de la página
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectSubtitle').textContent = project.subtitle;
    document.getElementById('projectImage').src = project.image;
    document.getElementById('projectImage').alt = project.title;
    document.title = `${project.title} - Lucila Martorana`;
    
    // Renderizar el contenido estructurado
    renderProjectContent(project);
}

// Renderizar el contenido del proyecto
function renderProjectContent(project) {
    const contentDiv = document.getElementById('projectContent');

    // Detalle custom para "Trabajos a medida"
    if (project.id === 'trabajos-especiales') {
        const escapeHtml = (text) => {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        };

        const proyectoText = project.proyectoText || '';
        const contextoText = project.contextoText || '';
        const queHice = project.queHice || [];
        const tiposDesarrollos = project.tiposDesarrollos || [];

        const bullets = (items) => items.map(item => `<li>${escapeHtml(item)}</li>`).join('');

        const html = `
            <div class="content-section">
                <h2 class="section-title">Proyecto</h2>
                <div class="section-text">${escapeHtml(proyectoText)}</div>
            </div>

            <div class="content-section">
                <h2 class="section-title">Contexto</h2>
                <div class="section-text">${escapeHtml(contextoText)}</div>
            </div>

            <div class="content-section">
                <h2 class="section-title">Qué hice</h2>
                <ul class="bullet-list">
                    ${bullets(queHice)}
                </ul>
            </div>
            
            <div class="content-section">
                <h2 class="section-title">Tipos de Desarrollos</h2>
                <ul class="bullet-list">
                    ${bullets(tiposDesarrollos)}
                </ul>
            </div>
            
            ${project.detailImage ? `
                <div class="project-detail-image-inline">
                    <img src="${project.detailImage}" alt="${project.title} - detalle" loading="lazy">
                </div>
            ` : ''}
        `;

        contentDiv.innerHTML = html;
        return;
    }
    
    // Si el proyecto tiene estructura detallada (Pancha Revancha)
    if (project.objective) {
        let html = '';
        
        if (project.objective) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Objetivo</h2>
                    <p class="section-text">${project.objective}</p>
                </div>
            `;
        }
        
        if (project.segment) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Segmento</h2>
                    <p class="section-text">${project.segment}</p>
                </div>
            `;
        }
        
        if (project.role) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Mi Rol</h2>
                    <p class="section-text">${project.role}</p>
                </div>
            `;
        }
        
        if (project.about) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Sobre el Proyecto</h2>
                    <div class="section-text">${formatText(project.about)}</div>
                </div>
            `;
        }
        
        // Secciones adicionales para Insurance UI
        if (project.kickoff) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Inicio</h2>
                    <div class="section-text">${formatText(project.kickoff)}</div>
                </div>
            `;
            // Primera imagen después de Kick Off
            if (project.detailImages && project.detailImages.length > 0) {
                html += `
                    <div class="project-detail-image-inline">
                        <img src="${project.detailImages[1]}" alt="${project.title} - Kick Off" loading="lazy">
                    </div>
                `;
            }
        }
        
        if (project.menuLayout) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Un diseño de menú escalable para arquitectura Micro Front End</h2>
                    <div class="section-text">${formatText(project.menuLayout)}</div>
                </div>
            `;
            // Segunda imagen después de Menu Layout
            if (project.detailImages && project.detailImages.length > 2) {
                html += `
                    <div class="project-detail-image-inline">
                        <img src="${project.detailImages[2]}" alt="${project.title} - Menu Layout" loading="lazy">
                    </div>
                `;
            }
        }
        
        if (project.discoveringUser) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Descubriendo al usuario</h2>
                    <div class="section-text">${formatText(project.discoveringUser)}</div>
                </div>
            `;
        }
        
        if (project.coreScreens) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Pantallas Principales Diseñadas</h2>
                    <div class="section-text">${formatText(project.coreScreens)}</div>
                </div>
            `;
            // Imágenes de Core Screens (4-11) en grid
            if (project.detailImages && project.detailImages.length > 3) {
                html += `<div class="project-images-grid">`;
                for (let i = 3; i < Math.min(12, project.detailImages.length); i++) {
                    html += `
                        <div class="project-detail-image-inline">
                            <img src="${project.detailImages[i]}" alt="${project.title} - Core Screen ${i-2}" loading="lazy">
                        </div>
                    `;
                }
                html += `</div>`;
            }
        }
        
        if (project.creatingPolicy) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Creando una Póliza</h2>
                    <div class="section-text">${formatText(project.creatingPolicy)}</div>
                </div>
            `;
            // Imagen de Creating a Policy
            if (project.detailImages && project.detailImages.length > 12) {
                html += `
                    <div class="project-detail-image-inline">
                        <img src="${project.detailImages[12]}" alt="${project.title} - Creating a Policy" loading="lazy">
                    </div>
                `;
            }
        }
        
        if (project.keyScreen) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">La Pantalla Clave</h2>
                    <div class="section-text">${formatText(project.keyScreen)}</div>
                </div>
            `;
            // Imagen de The key Screen
            if (project.detailImages && project.detailImages.length > 13) {
                html += `
                    <div class="project-detail-image-inline">
                        <img src="${project.detailImages[13]}" alt="${project.title} - Key Screen" loading="lazy">
                    </div>
                `;
            }
        }
        
        // Secciones para Logistics Webapp (fases del proyecto)
        if (project.phase1) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">${project.phase1.split('\n\n')[0]}</h2>
                    <div class="section-text">${formatText(project.phase1.split('\n\n').slice(1).join('\n\n'))}</div>
                </div>
            `;
            // Primera imagen después de Phase 1
            if (project.detailImages && project.detailImages.length > 0) {
                html += `
                    <div class="project-detail-image-inline">
                        <img src="${project.detailImages[0]}" alt="${project.title} - Phase 1" loading="lazy">
                    </div>
                `;
            }
        }
        
        if (project.phase2) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">${project.phase2.split('\n\n')[0]}</h2>
                    <div class="section-text">${formatText(project.phase2.split('\n\n').slice(1).join('\n\n'))}</div>
                </div>
            `;
            // Imágenes de Phase 2 (2-5) en grid
            if (project.detailImages && project.detailImages.length > 1) {
                html += `<div class="project-images-grid">`;
                for (let i = 1; i < Math.min(6, project.detailImages.length); i++) {
                    html += `
                        <div class="project-detail-image-inline">
                            <img src="${project.detailImages[i]}" alt="${project.title} - Phase 2 ${i}" loading="lazy">
                        </div>
                    `;
                }
                html += `</div>`;
            }
        }
        
        if (project.phase3) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">${project.phase3.split('\n\n')[0]}</h2>
                    <div class="section-text">${formatText(project.phase3.split('\n\n').slice(1).join('\n\n'))}</div>
                </div>
            `;
            // Imágenes de Phase 3 (6-9) en grid
            if (project.detailImages && project.detailImages.length > 5) {
                html += `<div class="project-images-grid">`;
                for (let i = 5; i < project.detailImages.length; i++) {
                    html += `
                        <div class="project-detail-image-inline">
                            <img src="${project.detailImages[i]}" alt="${project.title} - Phase 3 ${i-4}" loading="lazy">
                        </div>
                    `;
                }
                html += `</div>`;
            }
        }
        
        // Secciones para Hydroponics
        if (project.physicalProduct) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">El producto físico</h2>
                    <div class="section-text">${formatText(project.physicalProduct)}</div>
                </div>
            `;
            // Imágenes del producto físico (2-4) en grid
            if (project.detailImages && project.detailImages.length > 1) {
                html += `<div class="project-images-grid">`;
                for (let i = 1; i < Math.min(5, project.detailImages.length); i++) {
                    html += `
                        <div class="project-detail-image-inline">
                            <img src="${project.detailImages[i]}" alt="${project.title} - Physical Product ${i}" loading="lazy">
                        </div>
                    `;
                }
                html += `</div>`;
            }
        }
        
        if (project.digitalProduct) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">El producto digital</h2>
                    <div class="section-text">${formatText(project.digitalProduct)}</div>
                </div>
            `;
            // Imágenes del producto digital (5-8) en grid
            if (project.detailImages && project.detailImages.length > 4) {
                html += `<div class="project-images-grid">`;
                for (let i = 4; i < Math.min(9, project.detailImages.length); i++) {
                    html += `
                        <div class="project-detail-image-inline">
                            <img src="${project.detailImages[i]}" alt="${project.title} - Digital Product ${i-3}" loading="lazy">
                        </div>
                    `;
                }
                html += `</div>`;
            }
        }
        
        if (project.beyondMVP) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Más allá del MVP</h2>
                    <div class="section-text">${formatText(project.beyondMVP)}</div>
                </div>
            `;
            // Imagen de Beyond MVP (9)
            if (project.detailImages && project.detailImages.length > 8) {
                html += `
                    <div class="project-detail-image-inline">
                        <img src="${project.detailImages[8]}" alt="${project.title} - Beyond MVP" loading="lazy">
                    </div>
                `;
            }
        }
        
        // Agregar imagen(s) de detalle después de "About the Project" si existe(n) (para proyectos sin estructura especial)
        if (project.detailImage && !project.kickoff && !project.phase1 && !project.physicalProduct) {
            html += `
                <div class="project-detail-image-inline">
                    <img src="${project.detailImage}" alt="${project.title} - Detail" loading="lazy">
                </div>
            `;
        }
        
        // Secciones para Que Hacemos Hoy
        if (project.archetypes) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Arquetipos</h2>
                    <div class="section-text">${formatText(project.archetypes)}</div>
                </div>
            `;
        }
        
        if (project.benchmark) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Análisis Comparativo</h2>
                    <div class="section-text">${formatText(project.benchmark)}</div>
                </div>
            `;
            // Imágenes de Benchmark (2-3) en grid
            if (project.detailImages && project.detailImages.length > 1) {
                html += `<div class="project-images-grid">`;
                for (let i = 1; i < Math.min(4, project.detailImages.length); i++) {
                    html += `
                        <div class="project-detail-image-inline">
                            <img src="${project.detailImages[i]}" alt="${project.title} - Benchmark ${i}" loading="lazy">
                        </div>
                    `;
                }
                html += `</div>`;
            }
        }
        
        if (project.exploringAlternative) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Explorando un modelo alternativo de visualización de datos</h2>
                    <div class="section-text">${formatText(project.exploringAlternative)}</div>
                </div>
            `;
        }
        
        if (project.wireframing) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Wireframing y Prototipado</h2>
                    <div class="section-text">${formatText(project.wireframing)}</div>
                </div>
            `;
            // Imágenes de Wireframing (4-5) en grid
            if (project.detailImages && project.detailImages.length > 3) {
                html += `<div class="project-images-grid">`;
                for (let i = 3; i < Math.min(6, project.detailImages.length); i++) {
                    html += `
                        <div class="project-detail-image-inline">
                            <img src="${project.detailImages[i]}" alt="${project.title} - Wireframing ${i-2}" loading="lazy">
                        </div>
                    `;
                }
                html += `</div>`;
            }
        }
        
        if (project.testing) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Pruebas</h2>
                    <div class="section-text">${formatText(project.testing)}</div>
                </div>
            `;
            // Imágenes de Testing (6-11) en grid
            if (project.detailImages && project.detailImages.length > 5) {
                html += `<div class="project-images-grid">`;
                for (let i = 5; i < project.detailImages.length; i++) {
                    html += `
                        <div class="project-detail-image-inline">
                            <img src="${project.detailImages[i]}" alt="${project.title} - Testing ${i-4}" loading="lazy">
                        </div>
                    `;
                }
                html += `</div>`;
            }
        }
        
        // Soporte para múltiples imágenes de detalle (solo si no hay estructura especial) en grid
        if (project.detailImages && project.detailImages.length > 0 && !project.kickoff && !project.phase1 && !project.physicalProduct && !project.archetypes) {
            html += `<div class="project-images-grid">`;
            project.detailImages.forEach((img, index) => {
                html += `
                    <div class="project-detail-image-inline">
                        <img src="${img}" alt="${project.title} - Detail ${index + 1}" loading="lazy">
                    </div>
                `;
            });
            html += `</div>`;
        }
        
        if (project.challenges && project.challenges.length > 0) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Desafíos</h2>
                    <ul class="challenges-list">
                        ${project.challenges.map(challenge => {
                            // Separar el título (antes de los dos puntos) de la descripción
                            const parts = challenge.split(':');
                            if (parts.length > 1) {
                                const title = parts[0].trim();
                                const description = parts.slice(1).join(':').trim();
                                return `<li class="challenge-item"><strong>${title}:</strong> ${description}</li>`;
                            }
                            return `<li class="challenge-item">${challenge}</li>`;
                        }).join('')}
                    </ul>
                </div>
            `;
        }
        
        if (project.keyLearning) {
            html += `
                <div class="content-section">
                    <h2 class="section-title">Aprendizaje Clave</h2>
                    <div class="section-text">${formatText(project.keyLearning)}</div>
                </div>
            `;
        }
        
        // Botón de visita si existe visitUrl
        if (project.visitUrl) {
            html += `
                <div class="content-section" style="margin-top: var(--spacing-xl);">
                    <a href="${project.visitUrl}" target="_blank" rel="noopener noreferrer" class="visit-button">Visitar ⇨</a>
                </div>
            `;
        }

        // Links de referencia
        if (project.referenceLinks && project.referenceLinks.length > 0) {
            const normalizeLink = (link) => {
                if (typeof link === 'string') return { label: link, url: link };
                return {
                    label: link.label || link.url,
                    url: link.url,
                };
            };

            html += `
                <div class="content-section" style="margin-top: var(--spacing-lg);">
                    <h2 class="section-title">Links de referencia</h2>
                    <div class="reference-links">
                        ${project.referenceLinks.map((link) => {
                            const item = normalizeLink(link);
                            const label = item.label || item.url;
                            return `
                                <a class="reference-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${label}</a>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }
        
        contentDiv.innerHTML = html;
    } else {
        // Formato simple para otros proyectos
        contentDiv.innerHTML = `<p>${project.description || 'Descripción no disponible.'}</p>`;
    }
}

// Formatear texto con saltos de línea y listas
function formatText(text) {
    if (!text) return '';
    
    // Convertir saltos de línea en <br> o <p>
    let formatted = text.split('\n\n').map(paragraph => {
        // Si el párrafo empieza con bullet points
        if (paragraph.trim().startsWith('•')) {
            const items = paragraph.split('\n').filter(line => line.trim().startsWith('•'));
            const listItems = items.map(item => 
                `<li>${item.replace(/^•\s*/, '').trim()}</li>`
            ).join('');
            return `<ul class="bullet-list">${listItems}</ul>`;
        }
        // Si el párrafo empieza con emojis (👍 o 👎)
        if (paragraph.trim().match(/^[👍👎]/)) {
            const items = paragraph.split('\n').filter(line => line.trim().match(/^[👍👎]/));
            const listItems = items.map(item => {
                const trimmed = item.trim();
                return `<li class="benchmark-item">${trimmed}</li>`;
            }).join('');
            return `<ul class="bullet-list benchmark-list">${listItems}</ul>`;
        }
        // Párrafo normal
        return `<p>${paragraph.replace(/\n/g, '<br>')}</p>`;
    }).join('');
    
    return formatted;
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadProject();
});

