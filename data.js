// Datos de los proyectos
const projects = [
    {
        id: 'pancha-revancha',
        title: 'Pancha Revancha',
        subtitle: 'Full Stack Dev + Design (2024)',
        image: 'images/pancha_revancha.png',
        detailImage: 'images/pancha_revanncha_detail.png',
        objective: 'Construir una plataforma intuitiva que facilite a las personas comprar y vender ropa usada en línea, con un enfoque en accesibilidad, velocidad y confianza del usuario.',
        segment: 'Mercado de ropa de segunda mano – principalmente vendedores y compradores individuales (no mayoristas), con especial énfasis en ropa infantil vendida por unidad.',
        role: 'Lideré el proyecto como Diseñador de Producto y Desarrollador Full-Stack, supervisando la visión del producto, el diseño de interfaz, la implementación técnica y las pruebas iterativas.',
        about: 'Este proyecto se inspiró en la observación de que muchas personas, especialmente padres, compran y venden ropa usada de manera informal a través de grupos de WhatsApp. Estas redes son muy activas, pero fragmentadas y no estructuradas. No existía una plataforma dedicada donde los usuarios pudieran subir, navegar y comprar artículos de ropa individuales sin verse obligados a comprar lotes a granel o usar canales de comunicación ineficientes.\n\nMe propuse crear una solución simple basada en web que replicara la facilidad y espontaneidad de WhatsApp, pero con mejor estructura y escalabilidad.\n\nDesde una perspectiva técnica, el proyecto involucró:\n• Desarrollar un pipeline de procesamiento de imágenes en Python para comprimir fotos y eliminar fondos automáticamente, mejorando tanto la experiencia del usuario como el rendimiento de carga de página.\n• Usar Hotjar para analizar sesiones de usuario, identificar puntos de fricción y refinar iterativamente la UI y el flujo de usuario.\n• Implementar un sistema de inicio de sesión sin fricciones usando WhatsApp como método de autenticación de dos factores (2FA), permitiendo a los usuarios iniciar sesión solo con su número de teléfono, sin necesidad de correo electrónico o contraseña.',
        challenges: [
            'Autenticación sin correo electrónico: Muchos usuarios en este segmento no se sienten cómodos con los flujos de registro típicos. Construí un sistema de inicio de sesión personalizado que permitía a los usuarios autenticarse usando solo su número de teléfono y una confirmación basada en WhatsApp, evitando completamente la necesidad de correos electrónicos o contraseñas.',
            'Optimización de imágenes: Los vendedores frecuentemente suben imágenes de baja calidad. Desarrollé un script por lotes usando Python para redimensionar, comprimir y eliminar fondos, asegurando calidad visual consistente y carga de página más rápida sin requerir intervención del usuario.',
            'Adaptación del comportamiento del usuario: Dado que los usuarios estaban acostumbrados a la naturaleza informal y conversacional de WhatsApp, la interfaz tenía que sentirse casual y familiar. Evité filtros complejos o jerarquías de categorías en favor de un diseño ligero basado en feed con búsqueda inteligente y etiquetado.'
        ]
    },
    {
        id: 'oil-gas',
        title: 'Oil & Gas MVP',
        subtitle: 'Full Stack Dev + Design (2024)',
        image: 'images/image.png',
        detailImages: ['images/well_manager_detail.png'],
        objective: 'Construir un Producto Mínimo Viable (MVP) para un Well Manager basado en web adaptado a la industria de Oil & Gas. El objetivo era crear una herramienta que permita el monitoreo en tiempo real y la gestión operativa de pozos petroleros, mejorando la toma de decisiones y la eficiencia en el campo.',
        segment: 'Sector energético – Oil & Gas. Específicamente dirigido a equipos operativos que gestionan actividades de campo y el rendimiento de pozos para perforación, mantenimiento y producción.',
        role: 'Full Stack Developer & Product Designer. Fui responsable del diseño y desarrollo completo del MVP. Lideré el diseño UX/UI e implementé tanto el front end como el back end. También colaboré con expertos de campo para dar forma a la lógica del producto y asegurar que cumpliera con las necesidades de la industria.',
        about: 'Este MVP fue una aplicación web diseñada para proporcionar una visión clara de todos los pozos activos, su estado y datos operativos. Los usuarios podían:\n• Ver el rendimiento de pozos en tiempo real\n• Filtrar y analizar datos\n• Generar reportes personalizados\n• Rastrear registros de mantenimiento e incidentes\n\nLa plataforma fue diseñada para ser modular, permitiendo un escalado fácil y adaptación para diferentes operadores de campos petroleros.',
        challenges: [
            'Traducir complejidad: Convertir flujos de trabajo complejos de campos petroleros en componentes de UI intuitivos.',
            'Responsabilidades duales: Equilibrar tareas de diseño y desarrollo en una línea de tiempo acelerada de MVP.',
            'Conocimiento del dominio: Aprender rápidamente la terminología de la industria y las prácticas operativas para alinear la lógica del producto con el uso en el mundo real.',
            'Modelado de datos: Estructurar una base de datos flexible y escalable que pudiera representar diversos estados de pozos y flujos de trabajo.'
        ]
    },
    {
        id: 'insurance-ui',
        title: 'Modernizing Insurance UI',
        subtitle: 'Product Design (2023)',
        image: 'images/insurance_ui_1.png',
        detailImages: [
            'images/insurance_ui_2.png',
            'images/insurance_ui_3.png',
            'images/insurance_ui_4.png',
            'images/insurance_ui_5.png',
            'images/insurance_ui_6.png',
            'images/insurance_ui_7.png',
            'images/insurance_ui_8.png',
            'images/insurance_ui_9.png',
            'images/insurance_ui_10.png',
            'images/insurance_ui_11.png',
            'images/insurance_ui_12.png',
            'images/insurance_ui_13.png',
            'images/insurance_ui_14.png'
        ],
        objective: 'El objetivo del proyecto era reconstruir la Interfaz de Usuario para un software de seguros.',
        segment: 'Seguros (Back Office SaaS)',
        role: 'Diseñador de producto, Project Manager, Desarrollo Front end',
        about: 'Mi objetivo era crear una interfaz moderna y fácil de usar que se adhiriera a los estándares de la industria. El objetivo principal era mejorar la experiencia del usuario.\n\nInicialmente, manejé tanto las tareas de diseño como de desarrollo front-end. Sin embargo, después de un par de meses, el proyecto enfrentó desafíos para cumplir con los plazos, lo que llevó a expandir el equipo con desarrolladores adicionales. En consecuencia, hice la transición exclusivamente al diseño UX/UI.\n\nA medida que el equipo continuó creciendo, eventualmente también asumí el rol de project manager, supervisando la coordinación y el progreso del desarrollo front end así como del diseño.\n\nDiseñé y gestioné el desarrollo de aproximadamente 200 pantallas en total.',
        kickoff: 'Para un sistema tan complejo, elegir el kit de diseño UI fue una decisión clave. Las opciones incluidas fueron Material UI, Chakra UI y Ant Design. Después de realizar una investigación, Ant Design fue elegido como la opción más adecuada.',
        menuLayout: 'La aplicación se desarrolló usando Micro Front Ends, lo que implicó un desafío ya que los módulos no se comunican entre sí, operando de forma independiente. Se probaron muchos diseños diferentes para colocar el menú principal (1) y el menú específico del módulo Micro Front End (2).\n\nEl problema que surgió fue que el cambio de estado del menú principal (1) era complicado de comunicar a los MFEs, lo que llevó a una iteración en el diseño de la posición del menú MFE (2).\n\nDespués de varias iteraciones de pantallas, la elección fue que el diseño del menú de cada módulo ocupara toda la pantalla.\n\nEsta implementación resultó en un sistema flexible capaz de mostrar efectivamente menús grandes.\n\nEl enfoque fue crucial porque, desde el primer día, fue desafiante anticipar el tamaño de cada menú.',
        discoveringUser: 'Hubo una ausencia de interacción directa con los usuarios finales y la capacidad de realizar pruebas. Esto llevó a un enfoque centrado en investigar diferentes sistemas y diseñar métodos efectivos para presentar pantallas complejas sobrecargadas de información. Dos premisas sobre el usuario:\n\nEl usuario usa extensivamente el sistema.\nComo el software funciona como una herramienta de trabajo diaria, cualquier esfuerzo de diseño dirigido a mejorar su eficiencia es crucial.\n\nEl usuario realiza procesos complejos.\nSe gestionan procesos y datos complejos, lo que puede potencialmente llevar a confusión e ineficiencia si la información no se gestiona adecuadamente.',
        coreScreens: 'Los 4 fundamentos:\n• Pantallas Mínimas: La UI siempre apunta a la simplicidad en el diseño, esforzándose por una apariencia limpia y organizada.\n• Etiquetas Flotantes para Inputs: Implementar etiquetas flotantes para inputs es imprescindible para ahorrar espacio y asegurar un uso más eficiente de la pantalla.\n• Columnas Minimizadas en Tablas: El número de columnas debe reducirse en las tablas para evitar el desplazamiento horizontal.\n• Basado en Pasos para Pantallas Complejas: Si una pantalla es demasiado compleja, la UI debe dividirse en pasos más pequeños y manejables.',
        creatingPolicy: 'Crear una póliza es un proceso integral que implica recopilar información de diversas fuentes para asegurar que la póliza aborde todos los aspectos y factores relevantes. Esta recopilación de información puede ser bastante intrincada y que consume tiempo, a menudo tomando semanas o incluso más, especialmente en dominios complejos o altamente regulados.',
        keyScreen: 'Entre todas las pantallas, la más intrincada fue la Vista General de una póliza completada, que fue desafiante debido a la abundancia de información.\n\nAl priorizar el feedback y probar varias iteraciones, se identificó el diseño óptimo, llevando a una interfaz en la que los elementos garantizaban máxima usabilidad y claridad para el usuario final.',
        challenges: [
            'Iteración de Prototipo Ágil: Adaptarse de documentos detallados a un proceso de diseño rápido e iterativo planteó desafíos. Cambiar a discusiones rápidas basadas en diagramas permitió la creación rápida de pantallas y múltiples iteraciones, agilizando el desarrollo.',
            'Coordinación con desarrolladores: Gestionar el equipo, la delegación de tareas y la supervisión del backlog fueron desafiantes. Equilibrar las prioridades de diseño y desarrollo demandó comunicación clara y gestión eficiente de tareas para alinear el proyecto y asegurar el progreso.'
        ],
        keyLearning: 'Adaptarse a los diferentes roles que el proyecto requiere en diferentes fases puede ser desafiante pero es esencial para mantener la agilidad y eficiencia.'
    },
    {
        id: 'logistics',
        title: 'Logistics Webapp',
        subtitle: 'Product Design (2022)',
        image: 'images/logistics_1.png',
        detailImages: [
            'images/logistics_2.png',
            'images/logistics_3.png',
            'images/logistics_4.png',
            'images/logistics_5.png',
            'images/logistics_6.png',
            'images/logistics_7.png',
            'images/logistics_8.png',
            'images/logistics_9.png'
        ],
        objective: 'Para mejorar los procesos de un distribuidor mayorista, se diseñó un sistema de gestión de pedidos para proporcionar información fácil y dinámica sobre el estado de un pedido.',
        segment: 'Repuestos automotrices',
        role: 'Diseñador de Producto, Desarrollador Front/Back End',
        about: 'El proyecto se dividió en tres fases. Inicialmente, la necesidad de una solución surgió al detectar una falta de información centralizada. Esto marcó la primera fase. Posteriormente, la aplicación se reconstruyó para acomodar nuevos requisitos y necesidades, constituyendo la segunda fase. Finalmente, en la tercera fase, el sistema se expandió para construir vistas específicas de la información para diferentes actores, representando una expansión en funcionalidades.',
        phase1: '1) El Comienzo (2019-2021)\n\nAl preparar el pedido de un cliente, las ineficiencias existentes desde la colocación del pedido hasta la entrega resultaron en errores recurrentes. Algunos de los errores detectados fueron:\n\n• Trabajar a Ciegas: Falta de visibilidad sobre el estado de los pedidos, llevando a incertidumbre y posibles errores en el proceso.\n• Artículos Pendientes Faltantes: Falta de un sistema para rastrear artículos que estaban fuera de stock, resultando en registros incompletos de pedidos.\n• Falta de Responsabilidad: Dificultad para identificar la fuente de errores o problemas dentro del sistema.\n• Entradas Manuales Ambiguas: Las notas escritas a mano a menudo no eran claras, llevando a la interpretación errónea de la información.\n• Falta de Respaldo: Dependencia exclusiva de registros en papel, haciendo difícil recuperar pedidos perdidos o extraviados.\n• Doble Entrada: Los pedidos se ingresaban manualmente dos veces, llevando a la duplicación de esfuerzos y mayor probabilidad de errores.\n\nLa solución fue conceptualizada y luego delegada a un desarrollador para su implementación, resultando en el despliegue de la versión inicial dentro de un mes.',
        phase2: '2) Reconstrucción de la app (2021-2022)\n\nPor un tiempo, la app funcionó sin problemas sin actualizaciones. Sin embargo, a medida que pasó el tiempo, surgieron nuevos requisitos y el desarrollador no pudo acomodar los cambios. Mientras tanto, el mayorista utilizaba un sistema ERP para gestionar facturas, saldos de clientes, stock y precios. Integrar las dos soluciones se volvió crucial para acceder a información en tiempo real.\n\nDurante este período, comencé a estudiar desarrollo web y ya había creado varias páginas web. Después de enfrentar algunos desafíos, finalmente logré desarrollar la versión inicial de la integración.',
        phase3: '3) Expansión (2022- en curso)\n\nEn la tercera fase del proyecto, la app experimentó una expansión significativa para servir mejor tanto a agentes de ventas como a clientes:\n\nPWA para Agentes de Ventas:\nSe desarrolló una Progressive Web Application (PWA) específicamente para agentes de ventas, con el objetivo de agilizar su flujo de trabajo y mejorar la usabilidad. Esta PWA les proporcionó acceso más fácil a características y funcionalidades esenciales, permitiéndoles gestionar pedidos y tareas de manera más eficiente.\n\nAplicación Web para Clientes:\nOtra aplicación web fue diseñada específicamente para clientes, ofreciéndoles una plataforma fácil de usar para enviar pedidos y verificar sus saldos. Esta interfaz dedicada empoderó a los clientes para interactuar con el sistema sin problemas, mejorando su experiencia general y satisfacción.\n\nBot de WhatsApp para Uso Interno:\nAdicionalmente, se desarrolló un bot de WhatsApp para uso interno inicialmente, proporcionando una forma rápida y conveniente para que los miembros del equipo accedan a información como disponibilidad de stock, precios y saldos de cuentas. Este bot aceleró significativamente el proceso de consulta de datos importantes, mejorando la eficiencia operativa general.\n\nEstas expansiones diversificaron la funcionalidad de la app, atendiendo las necesidades específicas tanto de agentes de ventas como de clientes, mientras también agilizaba los procesos internos para el mayorista.'
    },
    {
        id: 'hydroponics',
        title: 'POC in Hydroponics',
        subtitle: 'Product Design (2021)',
        image: 'images/hydroponics_1.png',
        detailImages: [
            'images/hydroponics_2.png',
            'images/hydroponics_3.png',
            'images/hydroponics_4.png',
            'images/hydroponics_5.png',
            'images/hydroponics_6.png',
            'images/hydroponics_7.png',
            'images/hydroponics_8.png',
            'images/hydroponics_9.png',
            'images/hydroponics_10.png'
        ],
        objective: 'Crear una aplicación web para que los usuarios cosechen digitalmente su propia comida',
        segment: 'Hidroponía',
        role: 'Diseño de Producto, Desarrollo Front end',
        about: 'Uno de los efectos de la pandemia fue que las personas se involucraran más en actividades domésticas como hornear, cocinar, etc. Una idea que ganó tracción fue también cultivar tu propia comida. Para este propósito, las técnicas hidropónicas ofrecen varias ventajas, como uso reducido de espacio, crecimiento rápido y mantenimiento relativamente bajo.\n\nEl concepto era que los usuarios poseerían una torre hidropónica y consumirían su cosecha. En lugar de plantar sus propias semillas, iniciarían digitalmente su próxima "siembra". Lo harían digitalmente. El propósito de esto era que recibieran plántulas con algunas semanas de crecimiento ya iniciado. Esto acelera el proceso de crecimiento.',
        physicalProduct: 'La torre hidropónica fue diseñada con el objetivo de jardinería compacta e interior. Permite a los usuarios cultivar productos frescos en espacios limitados usando técnicas hidropónicas, ofreciendo ventajas como crecimiento rápido y bajo mantenimiento. Con su ecosistema autocontenido, los usuarios pueden cultivar fácilmente vegetales sin tierra, convirtiéndola en una solución ideal para entusiastas de la jardinería urbana.',
        digitalProduct: 'La base de la idea surgió del uso de espuma de fenol, que típicamente se emplea para plantar semillas en este método. Inicialmente, el concepto apuntaba a que los usuarios visualizaran y plantaran usando este enfoque. Después de un par de iteraciones, la imagen de la espuma de fenol fue reemplazada por un diseño que intentaba imitar su apariencia.\n\nPor otro lado, para la Prueba de Concepto, una vez que el usuario realizara el pedido o plantara las semillas, se enviaría un correo electrónico conteniendo la selección del usuario. Esto representaba el flujo principal de la aplicación web y el resultado de tal proceso.',
        beyondMVP: 'La siguiente etapa de desarrollo se concentraría en la torre misma. Esto involucraba implementar características que permitieran a los usuarios monitorear variables como temperatura, humedad y niveles de pH, y rastrear el progreso de sus cultivos a lo largo del tiempo. Esto implicaría integrar herramientas IoT para medir directamente estos datos desde la torre y luego presentarlos a los usuarios a través de gráficos y notificaciones sencillas.',
        keyLearning: 'Comenzar desde acciones del mundo real puede llevar a un diseño de interfaz intuitivo. Al basar las interacciones digitales en conceptos familiares, los usuarios se involucran sin esfuerzo, mejorando su experiencia y satisfacción.'
    },
    {
        id: 'que-hacemos-hoy',
        title: 'Que Hacemos Hoy',
        subtitle: 'Product Design (2019)',
        image: 'images/que_hacemos_hoy_1.png',
        detailImages: [
            'images/que_hacemos_hoy_2.png',
            'images/que_hacemos_hoy_3.png',
            'images/que_hacemos_hoy_4.png',
            'images/que_hacemos_hoy_5.png',
            'images/que_hacemos_hoy_6.png',
            'images/que_hacemos_hoy_7.png',
            'images/que_hacemos_hoy_8.png',
            'images/que_hacemos_hoy_9.png',
            'images/que_hacemos_hoy_10.png',
            'images/que_hacemos_hoy_11.png'
        ],
        objective: 'Crear una forma eficiente de mostrar eventos culturales que ocurren cerca del usuario',
        segment: 'Agenda Cultural',
        role: 'Diseño UX / UI, Diseño de Producto',
        about: 'En nuestras vidas ocupadas, encontrar los eventos correctos es abrumador debido a plataformas desordenadas y demasiada información. La solución propuesta apunta a simplificar el descubrimiento y asistencia a eventos, simplificando el proceso de encontrar eventos que se alineen con los intereses individuales.\n\nCon una interfaz fácil de usar, ofrece opciones de navegación y filtrado basadas en preferencias. Adicionalmente, presenta información de eventos en un formato alternativo, asegurando una experiencia fluida para descubrir actividades culturales locales.',
        archetypes: 'Michael es un pasante sociable en una firma contable que disfruta salir con amigos. En su tiempo libre, busca nuevas experiencias y conexiones. Está interesado en explorar eventos culturales como exposiciones y conciertos en su ciudad. Michael confía en aplicaciones de smartphone por conveniencia para descubrir y personalizar sus salidas, encontrando disfrute y conexión comunitaria a través de estas experiencias.\n\nMalena, 22, niñera y entusiasta de la música, ama sumergirse en varios géneros musicales. Disfruta asistir a conciertos y festivales de música en su tiempo libre, usando aplicaciones de smartphone para descubrir nuevas experiencias musicales mientras equilibra sus responsabilidades laborales.',
        benchmark: 'Para el benchmark, estudié Meetup y Eventbrite. Aunque no están directamente enfocados en eventos culturales, comparten el mismo objetivo de informar a los usuarios sobre varios eventos. Meetup se enfoca principalmente en facilitar reuniones grupales y actividades basadas en intereses del usuario, mientras que Eventbrite sirve como plataforma para descubrir y organizar una amplia gama de eventos, incluyendo talleres, conferencias y reuniones sociales. A pesar de sus diferencias, ambas plataformas encarnan la esencia de conectar usuarios con eventos que se alinean con sus intereses y preferencias.\n\n👍Sistema de Filtrado Claro: Implementado un sistema de filtrado fácil de usar con tres variables clave: ubicación, tiempo y tipo de evento, asegurando facilidad de navegación y acceso rápido a eventos relevantes.\n\n👍Acceso Fácil a Eventos de Interés: Los usuarios pueden encontrar fácilmente eventos de interés a través de la interfaz intuitiva, permitiéndoles descubrir experiencias culturales que se alinean con sus preferencias y horario.\n\n👎Incapacidad de Visualizar Información en Mapa: Una limitación encontrada fue la incapacidad de visualizar información de eventos en un mapa. Aunque el sistema de filtrado proporcionaba acceso eficiente a detalles de eventos, la ausencia de una interfaz de mapa impedía a los usuarios explorar visualmente las ubicaciones de eventos espacialmente.\n\n👎Interfaz de Filtrado Confusa: Se encontraron desafíos con un sistema de filtrado visualmente confuso y poco amigable, haciendo difícil la navegación para los usuarios.\n\n👍Eventos Accesibles: A pesar de los problemas de interfaz, los usuarios aún podían acceder fácilmente a eventos de interés, aunque con cierto esfuerzo para navegar a través de la confusión.\n\n👎Visualización de Mapa Faltante: Similar a casos anteriores, la ausencia de una interfaz de mapa limitaba a los usuarios de explorar visualmente las ubicaciones de eventos, a pesar de que aún podían acceder a los detalles de eventos.',
        exploringAlternative: 'Realicé varias exploraciones para visualizar datos de eventos, enfocándome en dos variables principales: "dónde" y "cuándo". Primero, experimenté con la ubicación de los eventos, apuntando a enfatizar la métrica de distancia desde mi ubicación. Esto involucró diseñar interfaces que mostraban eventos relativos a la posición actual del usuario, proporcionando acceso fácil a experiencias culturales cercanas.\n\nSegundo, exploré diferentes alternativas para visualizar el momento de los eventos. Esto incluyó consolidar información sobre cuándo ocurrirían los eventos. Al experimentar con varios diseños y formatos, apunté a presentar a los usuarios una visión clara de eventos próximos, permitiéndoles planificar sus salidas culturales eficientemente.',
        wireframing: 'El proceso pasó por numerosas iteraciones, apuntando a descubrir un nuevo enfoque para presentar información de manera simple. Como se muestra en los bocetos arriba, se exploraron varias alternativas. A continuación se muestran algunas de las pantallas que fueron prototipadas.\n\nEn ambas etapas de baja y media fidelidad, el enfoque estuvo en diseñar tres pantallas centradas alrededor de un sistema de filtrado de información, listado de eventos e interfaz fácil de usar. Durante la etapa de media fidelidad, se exploraron varios modelos de filtros. El objetivo a lo largo fue lograr agilidad y simplicidad en la interacción del usuario.',
        testing: 'A los usuarios se les presentó la siguiente tarea:\n\n"Estás soltero. Hoy es lunes, y arreglaste una cita para el jueves por la noche. Ambos viven en la misma área. Es la tercera cita, y necesitas comprar entradas para un evento musical. Hay una aplicación que te ayuda a encontrar eventos que ocurren cerca de ti."\n\nEl flujo de las pantallas para realizar la tarea fue el siguiente\n\nLas pruebas resultaron en una interfaz poco intuitiva. Ninguno de los usuarios pudo completar el flujo exitosamente. No asociaron los puntos con los eventos, lo que resultó ser un problema mayor ya que es la función clave de la aplicación.\n\nTomando en cuenta los resultados de las pruebas, se introdujeron varias modificaciones.\n\n• Un cambio significativo que tuvo un impacto notable fue la incorporación de animaciones para los eventos. Se implementaron animaciones circulares para simular órbitas alrededor del usuario, transmitiendo el concepto de que los eventos están cerca.\n\n• Otra modificación se hizo al selector de fechas, que fue comprimido y rediseñado para claridad.\n\n• Adicionalmente, el color de la burbuja de evento se ajustó para cambiar cuando se selecciona, mejorando la visibilidad y la interacción del usuario.',
        keyLearning: 'La innovación en UI puede volverse complicada si no se alinea con la comprensión del usuario. El diseño de UI debe resonar con las expectativas y modelos mentales de los usuarios.'
    },
    {
        id: 'auto-parts-wholesaler',
        title: 'Aplicación web para mayorista de repuestos automotrices',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_auto_parts.png',
        about: 'Plataforma dinámica que muestra productos y precios para mayorista de repuestos automotrices, con backend en node.js, se extrajeron datos de base de datos SQL para generar una vista web de información relevante.',
        segment: 'Repuestos automotrices',
        role: 'Diseñador, Desarrollo Front end, Desarrollo Back End',
        visitUrl: 'https://www.distribuidorarenova.com.ar/'
    },
    {
        id: 'deli-store-wholesaler',
        title: 'Mayorista de Delicatessen',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_deli_store.png',
        about: 'Plataforma dinámica que muestra productos y precios para el mayorista El Fuerte. Se construyó una hoja de Google para que el front end consulte precios y stock actualizados.',
        segment: 'Delicatessen',
        role: 'Diseñador, Desarrollo Front end',
        visitUrl: 'https://www.mayoristaelfuerte.com'
    },
    {
        id: 'lawyer-institutional',
        title: 'Sitio web institucional de abogados',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_lawyer.png',
        about: 'HSR Abogados, un bufete de abogados que ofrece diversos servicios legales, buscó un sitio web institucional que destacara su equipo, áreas de práctica y casos notables. El sitio fue construido en JAMstack con Next.js y Contentful CMS.',
        segment: 'Institucional, abogados',
        role: 'Project Manager, Diseño UX UI, Desarrollo Front End',
        visitUrl: 'https://hsrabogados.vercel.app/'
    },
    {
        id: 'sports-betting-landing',
        title: 'Landing page para aplicación de apuestas deportivas',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_sports_betting.png',
        about: 'Se construyó una landing page para explicar brevemente el producto de RMBL con una conexión a hoja de cálculo de Google para que pudieran modificar fácilmente información clave sobre los diferentes puntajes de eventos deportivos, lo cual era clave para el producto.',
        segment: 'Landing',
        role: 'Diseño UX UI, Desarrollo Front End',
        visitUrl: 'https://landingrmbl.vercel.app/'
    },
    {
        id: 'pastry-commerce',
        title: 'Página web para comercio de pastelería',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_pastry.png',
        about: 'Insumos Moreno, un mayorista de alimentos y pastelería, requirió un sitio web para mostrar sus productos y precios a clientes. Inicialmente una landing page, evolucionó a un sitio dinámico que muestra listas de precios personalizadas. Utilizando Next.js, el sitio obtiene datos de varias Hojas de Google.',
        segment: 'Landing',
        role: 'Diseño UX UI, Desarrollo Front End',
        visitUrl: 'https://insumosmoreno.vercel.app/'
    },
    {
        id: 'pharma-wholesaler',
        title: 'Mayorista farmacéutico',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_pharma.png',
        about: 'Rediseño del sitio web de un mayorista farmacéutico con un catálogo de productos. El proyecto involucró rediseñar un sitio web institucional existente. Alternativas de diseño para mejorar la funcionalidad y estética del sitio.',
        segment: 'Farmacia, Dispositivos Médicos',
        role: 'Project Manager, Desarrollo Front End',
        visitUrl: 'https://qualimed.vercel.app/'
    },
    {
        id: 'comercial-library',
        title: 'Librería Comercial',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_library.png',
        about: 'Diseñada para una librería comercial, esta página web en HTML, CSS y JS se integra con Google Sheets para actualizaciones fáciles de productos.',
        segment: 'Comercial',
        role: 'Desarrollo Front End',
        visitUrl: 'https://www.libreria770.com/'
    },
    {
        id: 'gastronomic-chamber',
        title: 'Cámara Gastronómica Institucional',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_gastronomic.png',
        about: 'Página web estática para la cámara gastronómica de Quilmes. Las animaciones SVG fueron cuidadosamente elaboradas para dar una impresión moderna y minimalista.',
        segment: 'Institucional',
        role: 'Desarrollo Front End',
        visitUrl: 'https://camaraquilmes.netlify.app/'
    },
    {
        id: 'gourmet-ecommerce',
        title: 'Ecommerce para mercado gourmet',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_gourmet.png',
        about: 'Página web para un mercado gourmet en línea, con un diseño inspirado en los descuentos especiales de la tienda, con un toque mágico que recuerda al sombrero de un mago.',
        segment: 'E-commerce',
        role: 'Diseño UX UI, Desarrollo Front End'
    },
    {
        id: 'ideas-inspiration',
        title: 'Ideas e Inspiración',
        subtitle: 'Colección de Conceptos',
        image: 'images/logistics_1.png',
        objective: 'Documentar y compartir una colección de diagramas, conceptos e ideas que dan forma a mi pensamiento y enfoque hacia el diseño y la resolución de problemas.',
        segment: 'Colección Personal',
        role: 'Creador de Contenido',
        about: 'Una Colección de Diagramas, Conceptos e Ideas Que Dan Forma a Mi Pensamiento. Este es un espacio curado donde documento representaciones visuales de procesos, marcos de trabajo y pensamientos creativos que influyen en mi enfoque hacia el diseño y la resolución de problemas.',
        visitUrl: 'https://ihourquescos.com/process-1',
        detailImages: [
            'images/ideas_inspiration_1.png',
            'images/ideas_inspiration_2.png',
            'images/ideas_inspiration_3.png',
            'images/ideas_inspiration_4.png',
            'images/ideas_inspiration_5.png',
            'images/ideas_inspiration_6.png',
            'images/ideas_inspiration_7.png'
        ]
    }
];

