// Renderizar las tarjetas de proyectos
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const card = document.createElement('a');
        card.href = `project.html?id=${project.id}`;
        card.className = 'project-card';
        
        // Agregar clase si es un proyecto de WEB DESIGN
        if (project.subtitle === 'WEB DESIGN') {
            card.classList.add('project-card-web-design');
        }
        
        card.setAttribute('data-project-id', project.id);
        
        const description = project.about || project.description || '';
        const truncatedDescription = description.length > 120 
            ? description.substring(0, 120) + '...' 
            : description;
        
        // Escapar HTML para evitar problemas
        const escapeHtml = (text) => {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        };
        
        card.innerHTML = `
            <div class="project-card-image">
                <img src="${project.image}" alt="${escapeHtml(project.title)}" loading="lazy">
            </div>
            <div class="project-card-content">
                <h3 class="project-card-title">${escapeHtml(project.title)}</h3>
                <p class="project-card-subtitle">${escapeHtml(project.subtitle || '')}</p>
                ${description ? `<p class="project-card-description">${escapeHtml(truncatedDescription)}</p>` : ''}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Rotación de palabras en el hero
function initRotatingWord() {
    const rotatingWord = document.getElementById('rotatingWord');
    if (!rotatingWord) return;
    
    const phrases = ['redes sociales', 'Reels UGC', 'Meta ads', 'Email marketing', 'tienda nube'];
    let currentIndex = 0;
    
    function rotateWord() {
        rotatingWord.style.opacity = '0';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % phrases.length;
            rotatingWord.textContent = phrases[currentIndex];
            rotatingWord.style.opacity = '1';
        }, 300);
    }
    
    // Mostrar "redes sociales" al cargar; rotar cada 2 segundos
    rotatingWord.textContent = phrases[0];
    setInterval(rotateWord, 2000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initRotatingWord();
});

