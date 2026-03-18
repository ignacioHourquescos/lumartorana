// Datos de los proyectos - Portfolio de Lucila Martorana
// Nota: `image` se usa como imagen principal de la tarjeta y del header del detalle.
// `detailImage` se inserta dentro de la "historia" del detalle (viene de `images/redes/`).
// `mobileMockup` se muestra (solo en mobile) integrado dentro de la tarjeta.
const projects = [
    {
        id: 'pancha',
        title: 'Pancha',
        subtitle: 'Desarrollo y gestión integral de marca digital (+285K comunidad)',
        image: 'images/banners/pancha.jpeg',
        detailImage: 'images/redes/pancha.jpeg',
        mobileMockup: 'images/redes/pancha.jpeg',
        objective: 'Acompañar el crecimiento de una marca de indumentaria infantil en todas sus capas: producto, comunicación, e‑commerce y comunidad.',
        segment: 'Marca de indumentaria infantil con foco en diseño, contenido y venta online.',
        role: 'Brand & Social Media Manager (11 años)',
        referenceLinks: [
            { label: 'Instagram', url: 'https://www.instagram.com/pancha_ba/' }
        ],
        about: 'Participación central en el desarrollo y crecimiento de la marca durante 11 años, abarcando desde el diseño de producto y moldería hasta el seguimiento de colecciones. Planificación y ejecución de la estrategia de contenido en Instagram, creación de piezas gráficas y edición de video (Reels, campañas), y producción y coordinación de campañas de fotos.\n\nGestión del e‑commerce en Tienda Nube (productos, pagos, envíos y experiencia de compra), planificación de lanzamientos y campañas digitales, gestión de comunidad y atención al cliente, implementación de email marketing y desarrollo de acciones con influencers.\n\nResultados destacados: crecimiento de la comunidad hasta +285.000 seguidores en Instagram, gestión de un e‑commerce con más de 120 pedidos mensuales, desarrollo de 22 colecciones y construcción de una marca con identidad sólida y comunidad activa.'
    },
    {
        id: 'amabilia',
        title: 'Amabilia',
        subtitle: 'Gestión integral de redes, e‑commerce y pauta digital',
        image: 'images/banners/amabilia.jpeg',
        detailImage: 'images/redes/amabilia.jpeg',
        mobileMockup: 'images/redes/amabilia.jpeg',
        objective: 'Ordenar y potenciar la presencia digital de una marca infantil con foco en venta online.',
        segment: 'Marca de productos infantiles con presencia digital activa.',
        role: 'Social Media & E‑commerce Manager',
        referenceLinks: [
            { label: 'Instagram', url: 'https://www.instagram.com/amabilia_arg/' },
            { label: 'Sitio', url: 'https://www.amabilia.com.ar/' }
        ],
        about: 'Gestión integral de Instagram (contenido, calendario y comunicación), creación de piezas gráficas y edición de video para redes. Producción y coordinación de campañas de fotos, definición de estética y desarrollo de contenido. Planificación y ejecución de campañas en Meta Ads, gestión de email marketing (Perfit) y optimización del e‑commerce (experiencia de compra, medios de pago y envíos).\n\nAdemás, atención al cliente, gestión de comunidad y planificación de activaciones de marca y colaboraciones con influencers (sorteos, envíos de producto y contenido).'
    },
    {
        id: 'brooms',
        title: "Broom's",
        subtitle: 'Desarrollo de estrategia digital para marca retail',
        image: 'images/banners/brooms.jpeg',
        detailImage: 'images/redes/brooms.jpeg',
        mobileMockup: 'images/redes/brooms.jpeg',
        objective: 'Construir y ordenar la presencia digital de una marca con fuerte base retail para iniciar el desarrollo de su canal online.',
        segment: 'Marca retail con 4 locales a la calle.',
        role: 'Community Manager & Meta Ads',
        referenceLinks: [
            { label: 'Instagram', url: 'https://www.instagram.com/brooms.infantiles/' },
            { label: 'Sitio', url: 'https://www.broomsinfantiles.com/' }
        ],
        about: 'Definición y organización de la presencia en Instagram, planificación y gestión de contenido, creación de piezas gráficas y edición de video para redes. Desarrollo y ejecución de campañas en Meta Ads, análisis de métricas y optimización de la performance.\n\nEl trabajo permitió establecer una base sólida para la comunicación digital, alineando la presencia online con el posicionamiento offline e iniciando el crecimiento del canal digital.'
    },
    {
        id: 'sole-osuna',
        title: 'Sole Osuna',
        subtitle: 'Branding, e‑commerce y comunicación digital desde cero (2023)',
        image: 'images/banners/soloe_osuna.jpeg',
        detailImage: 'images/redes/sole_osuna.jpeg',
        mobileMockup: 'images/redes/sole_osuna.jpeg',
        objective: 'Construir desde cero la presencia digital de una marca de ropa artesanal tejida a mano, para comunicar su propuesta de valor y comenzar a vender online.',
        segment: 'Marca de ropa artesanal, piezas únicas y de producción limitada.',
        role: 'Desarrollo integral de e‑commerce, branding y comunicación digital.',
        referenceLinks: [
            { label: 'Instagram', url: 'https://www.instagram.com/soleosuna.knitwear/' },
            { label: 'Tienda', url: 'https://soleosuna.mitiendanube.com/' }
        ],
        about: 'Creación de la tienda online en Tienda Nube (estructura, categorías, carga de productos, medios de pago y configuración de envíos). Desarrollo de la identidad inicial de marca y definición del tono visual, con un foco fuerte en lo artesanal. Construcción del relato de marca y setup de redes sociales, junto con las primeras piezas de contenido y el estilo de comunicación.\n\nEl resultado fue una presencia digital coherente entre marca, e‑commerce y redes, permitiendo iniciar ventas online y comenzar a construir comunidad alrededor del producto.'
    },
    {
        id: 'fun-home',
        title: 'Fun Home (obra de teatro)',
        subtitle: 'Desarrollo de merchandising',
        image: 'images/banners/fun_home.jpeg',
        detailImage: null,
        mobileMockup: null,
        objective: 'Crear una línea de merchandising alineada con la identidad de la obra y su audiencia.',
        segment: 'Producción teatral con público definido.',
        role: 'Desarrollo integral de merchandising',
        about: 'Análisis del público objetivo para definir productos adecuados, desarrollo de la propuesta de merchandising (selección de productos) y adaptación del diseño y branding a cada pieza. Búsqueda y gestión de proveedores, evaluación de costos y optimización de precios, supervisión de muestras y producción final.\n\nEl resultado fue una línea de merchandising coherente con la obra y lista para la venta al público.'
    },
    {
        id: 'wind-experience',
        title: 'Wind Experience / Puerto Tablas',
        subtitle: 'Coordinación de eventos y viajes',
        image: 'images/banners/wind_experience.jpeg',
        detailImage: null,
        mobileMockup: null,
        objective: 'Organizar experiencias y viajes alrededor de una comunidad vinculada a deportes acuáticos.',
        segment: 'Escuela de windsurf y kitesurf con fuerte comunidad local.',
        role: 'Coordinación de eventos y viajes',
        about: 'Organización de eventos sociales y viajes internacionales vinculados a windsurf y kitesurf. Gestión logística integral (traslados, alojamientos y actividades), coordinación con proveedores y equipos en destino, y acompañamiento a grupos durante las experiencias.\n\nLos eventos y viajes tuvieron alta participación y reforzaron el vínculo de la comunidad a través de experiencias compartidas.'
    },
    {
        id: 'trabajos-especiales',
        title: 'TRABAJOS A MEDIDA',
        subtitle: 'Diseño y coordinación de producción',
        image: 'images/banners/trabajos_a_medida.jpeg',
        detailImage: 'images/redes/tabajos_a_medida.jpeg',
        cardDetailImage: null,
        mobileMockup: null,
        proyectoText: 'Desarrollo de productos y merchandising a medida para distintos tipos de clientes y necesidades.',
        contextoText: 'Proyectos personalizados que requerían una solución integral, combinando diseño, funcionalidad y viabilidad productiva.',
        queHice: [
            'Diseño y desarrollo de productos',
            'Adaptación gráfica aplicada a piezas físicas',
            'Coordinación de producción y proveedores',
            'Gestión integral de cada proyecto'
        ],
        collageText: '',
        tiposDesarrollos: [
            'Gráfica y papelería',
            'Indumentaria y textiles',
            'Merchandising de marca',
            'Productos Personalizados'
        ]
    }
];

