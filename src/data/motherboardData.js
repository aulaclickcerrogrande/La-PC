export const motherboardData = [
    {
        id: "socket",
        name: "Procesador (CPU)",
        description: "Cerebro central del sistema que ejecuta millones de instrucciones por segundo. Es la pieza más importante.",
        long_description: "El procesador o CPU (Unidad Central de Procesamiento) es el cerebro incansable de la computadora. Funciona como un director de orquesta que interpreta cada clic, cada tecla presionada y cada línea de código de los programas. Su arquitectura interna está compuesta por miles de millones de transistores microscópicos que se encienden y apagan para realizar cálculos matemáticos complejos a una velocidad vertiginosa. Cuantos más 'núcleos' tenga, más músicos tendrá la orquesta, permitiéndole dirigir múltiples sinfonías (o aplicaciones) al mismo tiempo sin desafinar.",
        image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2613900-amd-ryzen-9000-desktop-og.jpg",
        interface: "Socket del Procesador",
        performance: "Procesamiento Central",
        specs: {
            "Ejecución": "Procesa instrucciones de programas y del sistema operativo.",
            "Coordinación": "Administra el flujo de datos entre la RAM y los dispositivos I/O.",
            "Cálculo": "Realiza operaciones lógicas y matemáticas complejas.",
            "Gestión de Energía": "Regula el consumo eléctrico dinámicamente según la carga."
        },
        types: [
            {
                category: "Según su número de núcleos",
                items: [
                    { name: "Dual-Core (2 núcleos)", description: "Básico para tareas simples y navegación." },
                    { name: "Quad-Core (4 núcleos)", description: "Estándar para gaming y multitarea moderada." },
                    { name: "Hexa-Core (6 núcleos)", description: "Equilibrio entre gaming y productividad." },
                    { name: "Octa-Core (8+ núcleos)", description: "Para edición de video, streaming y multitarea pesada." }
                ]
            },
            {
                category: "Según su arquitectura",
                items: [
                    { name: "x86-64 (Intel/AMD)", description: "Estándar para PCs de escritorio y laptops." },
                    { name: "ARM", description: "Eficiente en energía, usado en móviles y tablets." }
                ]
            },
            {
                category: "Según su uso",
                items: [
                    { name: "Desktop (escritorio)", description: "Alto rendimiento, refrigeración robusta." },
                    { name: "Laptop (portátil)", description: "Balance entre rendimiento y eficiencia energética." },
                    { name: "Server (servidor)", description: "Múltiples núcleos, máxima estabilidad 24/7." },
                    { name: "Mobile (móvil)", description: "Ultra eficiente, bajo consumo de batería." }
                ]
            }
        ],
        x: 51,
        y: 35
    },
    {
        id: "ram",
        name: "Memoria RAM",
        description: "Memoria de acceso aleatorio que almacena datos temporales para un acceso ultra rápido.",
        long_description: "La memoria RAM es el espacio de trabajo temporal de la computadora, similar a un escritorio físico. Cuando abres un programa, los datos se 'sacan' del archivador (el disco duro) y se colocan sobre este escritorio para trabajar con ellos rápidamente. Es una memoria volátil, lo que significa que se limpia por completo al apagar el equipo. Tener más RAM es como tener un escritorio más grande: puedes tener más documentos abiertos a la vez sin que se amontonen y ralenticen tu trabajo.",
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=800",
        interface: "Módulos de Memoria",
        performance: "Acceso Rápido",
        specs: {
            "Almacenamiento Temporal": "Guarda datos activos para acceso inmediato del CPU.",
            "Multitarea": "Permite ejecutar múltiples aplicaciones simultáneamente.",
            "Acceso Rápido": "Provee datos al procesador a velocidades extremas.",
            "Facilitador": "Evita cuellos de botella en la transferencia de información."
        },
        types: [
            {
                category: "Según su generación",
                items: [
                    { name: "DDR3", description: "Tecnología antigua, aún en equipos viejos." },
                    { name: "DDR4", description: "Estándar actual, buen equilibrio precio/rendimiento." },
                    { name: "DDR5", description: "Última generación, máxima velocidad y eficiencia." }
                ]
            },
            {
                category: "Según su uso",
                items: [
                    { name: "RAM estándar", description: "Para uso general y oficina." },
                    { name: "RAM gaming", description: "Con disipadores de calor y RGB." },
                    { name: "RAM ECC (servidor)", description: "Corrección de errores para máxima estabilidad." }
                ]
            },
            {
                category: "Según su capacidad",
                items: [
                    { name: "4-8 GB", description: "Básico para navegación y ofimática." },
                    { name: "16 GB", description: "Recomendado para gaming y multitarea." },
                    { name: "32 GB+", description: "Para edición profesional y virtualización." }
                ]
            }
        ],
        x: 66,
        y: 35
    },
    {
        id: "pcie",
        name: "Tarjeta Gráfica (GPU)",
        description: "Unidad de procesamiento visual encargada de renderizar cada píxel en pantalla.",
        long_description: "La tarjeta gráfica (GPU) es una computadora especializada dentro de tu computadora, dedicada exclusivamente a dibujar. Mientras el procesador principal piensa en lógica, la GPU calcula el color, la luz y la posición de millones de píxeles sesenta veces por segundo. En videojuegos modernos, realiza cálculos trigonométricos masivos para simular mundos 3D realistas, sombras, reflejos y físicas complejas, liberando al procesador central de esta pesada carga visual.",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
        interface: "Ranura de Expansión",
        performance: "Renderizado Gráfico",
        specs: {
            "Renderizado": "Transforma datos numéricos en imágenes visibles.",
            "Cálculo Paralelo": "Procesa miles de hilos simultáneos para gráficos 3D.",
            "Salida de Video": "Envía la señal final al monitor o pantalla.",
            "Aceleración": "Alivia la carga del CPU en tareas visuales pesadas."
        },
        types: [
            {
                category: "Según su fabricante",
                items: [
                    { name: "NVIDIA GeForce", description: "Líder en gaming y ray tracing." },
                    { name: "AMD Radeon", description: "Excelente relación precio/rendimiento." },
                    { name: "Intel Arc", description: "Nueva competencia en el mercado." }
                ]
            },
            {
                category: "Según su uso",
                items: [
                    { name: "Gaming", description: "Optimizada para juegos a alta resolución y FPS." },
                    { name: "Workstation", description: "Para diseño 3D, CAD y renderizado profesional." },
                    { name: "Mining", description: "Especializada en cálculos de criptomonedas." },
                    { name: "Integrada", description: "Incluida en el procesador, básica." }
                ]
            },
            {
                category: "Según su gama",
                items: [
                    { name: "Entrada (Entry)", description: "Para juegos ligeros y multimedia." },
                    { name: "Media (Mainstream)", description: "1080p gaming a buen precio." },
                    { name: "Alta (High-End)", description: "4K gaming y realidad virtual." },
                    { name: "Entusiasta (Enthusiast)", description: "Máximo rendimiento sin límites." }
                ]
            }
        ],
        x: 40,
        y: 64
    },
    {
        id: "vrm",
        name: "Sistema VRM",
        description: "Componente encargado de transformar la energía de la fuente en el voltaje preciso para el procesador.",
        long_description: "El VRM (Módulo Regulador de Voltaje) es la planta de transformación eléctrica de la placa base. La electricidad que llega de la fuente de poder es como un torrente de agua a alta presión (12 voltios), demasiado fuerte para el delicado procesador que necesita apenas un pequeño chorro muy preciso (alrededor de 1.2 voltios). El VRM reduce la presión y limpia el flujo, asegurando que el 'agua' llegue de manera constante y sin turbulencias, evitando que el procesador se queme o se apague por falta de energía.",
        image: "https://hardzone.es/app/uploads-hardzone.es/2018/11/Gigabyte-Fases-VRM.jpg",
        interface: "Regulación de Voltaje",
        performance: "Conversión Eléctrica",
        specs: {
            "Transformación": "Convierte el voltaje alto de la fuente en bajo voltaje para el CPU.",
            "Estabilidad": "Mantiene el voltaje constante ante cambios bruscos de carga.",
            "Filtrado": "Elimina el ruido eléctrico para evitar errores de cálculo.",
            "Disipación": "Absorbe el calor generado durante la conversión eléctrica."
        },
        types: [
            {
                category: "Según su número de fases",
                items: [
                    { name: "4-6 fases", description: "Básico para CPUs de bajo consumo." },
                    { name: "8-12 fases", description: "Estándar para gaming y overclocking moderado." },
                    { name: "16+ fases", description: "Para procesadores de alta gama y overclocking extremo." }
                ]
            },
            {
                category: "Según su calidad",
                items: [
                    { name: "VRM digital", description: "Control preciso por software, eficiencia máxima." },
                    { name: "VRM analógico", description: "Más simple, menos costoso." }
                ]
            }
        ],
        x: 38,
        y: 30
    },
    {
        id: "chipset",
        name: "Chipset",
        description: "Controlador que gestiona la comunicación entre el procesador y los periféricos.",
        long_description: "El chipset actúa como el gerente de tráfico del sistema. Si el procesador es el jefe de la empresa, el chipset es su secretario ejecutivo. Se encarga de organizar todas las llamadas y datos que vienen de los dispositivos 'lentos' como el USB, el ratón, el teclado y el almacenamiento, y los presenta ordenadamente al procesador cuando este tiene tiempo para atenderlos. Define qué capacidades tiene tu placa base: cuántos puertos USB puedes tener, cuántos discos duros, y qué tan rápido pueden hablar entre ellos.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        interface: "Controlador del Sistema",
        performance: "Gestión de Datos",
        specs: {
            "Interconexión": "Gestiona el tráfico de datos entre CPU, almacenamiento y USB.",
            "Expansión": "Provee líneas PCIe adicionales para tarjetas y discos.",
            "Control USB": "Maneja la comunicación de múltiples puertos USB simultáneos.",
            "Gestión Red": "Coordina el flujo de datos de tarjetas WiFi y Ethernet."
        },
        types: [
            {
                category: "Según su gama (Intel)",
                items: [
                    { name: "H-Series (H610, H670)", description: "Básico, sin overclocking." },
                    { name: "B-Series (B660, B760)", description: "Equilibrado, algunas funciones avanzadas." },
                    { name: "Z-Series (Z690, Z790)", description: "Entusiasta, overclocking completo." }
                ]
            },
            {
                category: "Según su gama (AMD)",
                items: [
                    { name: "A-Series (A620)", description: "Entrada, funciones básicas." },
                    { name: "B-Series (B650)", description: "Mainstream, buen equilibrio." },
                    { name: "X-Series (X670)", description: "High-end, máximas capacidades." }
                ]
            }
        ],
        x: 64,
        y: 68
    },
    {
        id: "m2",
        name: "Almacenamiento",
        description: "Dispositivos encargados de guardar tus datos, programas y sistema operativo.",
        long_description: "El almacenamiento es la memoria permanente de la computadora, donde se guardan tus fotos, juegos y documentos incluso cuando la apagas. Existen principalmente dos tecnologías: los discos duros mecánicos (HDD), que ofrecen gran capacidad a bajo costo pero son lentos; y los Unidades de Estado Sólido (SSD), que no tienen partes móviles y son increíblemente rápidas, haciendo que el equipo 'vuele'. La mayoría de PCs modernas usan SSDs para el sistema y programas.",
        image: "https://www.gamingpcbuilder.com/wp-content/uploads/m2_splash.webp",
        interface: "SATA / PCIe",
        performance: "Lectura/Escritura de Datos",
        specs: {
            "Almacenamiento Permanente": "Guarda información a largo plazo.",
            "Velocidad de Carga": "Determina qué tan rápido abren los programas.",
            "Fiabilidad": "Seguridad de los datos ante fallos físicos.",
            "Capacidad": "Espacio disponible para guardar archivos."
        },
        types: [
            {
                category: "Según su tecnología",
                items: [
                    { name: "HDD (Disco Mecánico)", description: "Gran capacidad, económico, pero lento y ruidoso." },
                    { name: "SSD (Estado Sólido)", description: "Rápido, silencioso y resistente a golpes." }
                ]
            },
            {
                category: "Según su formato (SSD)",
                items: [
                    { name: "SSD SATA (2.5\")", description: "Formato tradicional, velocidades estándar (550 MB/s)." },
                    { name: "SSD M.2 (NVMe)", description: "Se conecta a la placa, velocidad extrema (hasta 7000+ MB/s)." }
                ]
            },
            {
                category: "Según su capacidad típica",
                items: [
                    { name: "250-500 GB", description: "Mínimo para sistema operativo y programas básicos." },
                    { name: "1 TB", description: "Estándar actual para gaming y uso general." },
                    { name: "4 TB+ (HDD)", description: "Común para guardar muchos videos y archivos pesados." }
                ]
            }
        ],
        x: 48,
        y: 53
    },
    {
        id: "audio",
        name: "Audio Integrado",
        description: "Sistema encargado de procesar y emitir el sonido de la computadora.",
        long_description: "El sistema de audio integrado convierte el lenguaje digital de ceros y unos en ondas sonoras físicas que podemos oír. Utiliza un chip especializado llamado DAC (Conversor Digital a Analógico) y condensadores de alta calidad para limpiar la señal de ruidos eléctricos parásitos. Esto permite que escuches música con claridad, identifiques la posición de tus enemigos en un juego o tengas videollamadas con voz nítida, todo sin necesidad de comprar una tarjeta de sonido dedicada extra.",
        image: "https://www.waveshare.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/p/c/pcm5122-audio-board-a-1.jpg",
        interface: "Procesamiento de Audio",
        performance: "Conversión Digital",
        specs: {
            "Procesamiento Sonoro": "Decodifica señales digitales en audio analógico.",
            "Amplificación": "Aumenta la potencia de la señal para auriculares exigentes.",
            "Surround Virtual": "Calcula audio posicional para inmersión 3D.",
            "Captura de Voz": "Limpia la señal del micrófono de ruido estático."
        },
        types: [
            {
                category: "Según su calidad",
                items: [
                    { name: "Audio básico", description: "Codec simple para uso general." },
                    { name: "Audio HD", description: "Mejor calidad, para música y multimedia." },
                    { name: "Audio Hi-Fi", description: "Componentes premium para audiófilos." }
                ]
            },
            {
                category: "Según su configuración",
                items: [
                    { name: "Estéreo 2.0", description: "Dos canales básicos." },
                    { name: "Surround 5.1", description: "Seis canales para cine en casa." },
                    { name: "Surround 7.1", description: "Ocho canales para inmersión total." }
                ]
            }
        ],
        x: 26,
        y: 85
    },
    {
        id: "io",
        name: "Panel Trasero (I/O)",
        description: "Lugar donde conectas todos los cables externos a la computadora.",
        long_description: "El panel I/O (Input/Output) es la aduana de tu computadora. Es el punto físico donde el mundo exterior se conecta con el mundo digital interno. Cada puerto tiene forma distinta para una función específica: el HDMI/DisplayPort para video, el RJ45 para internet por cable, los conectores de audio para sonido, y los universales puertos USB para casi todo lo demás. Es la parte de la placa base que asoma por la parte trasera de tu gabinete para que puedas enchufar tus accesorios.",
        image: "https://i.ebayimg.com/images/g/R~wAAOSwiD9i88m-/s-l400.jpg",
        interface: "Conectividad Externa",
        performance: "Entrada/Salida",
        specs: {
            "Conectividad Externa": "Punto de enlace para todos los dispositivos externos.",
            "Redes": "Gestiona la conexión a internet cableada e inalámbrica.",
            "Multimedia": "Salida y entrada de señales de video y audio.",
            "Diagnóstico": "Permite resetear y actualizar el sistema sin abrir la PC."
        },
        types: [
            {
                category: "Tipos de puertos USB",
                items: [
                    { name: "USB 2.0", description: "480 Mbps, para mouse y teclado." },
                    { name: "USB 3.0/3.1", description: "5-10 Gbps, para discos externos." },
                    { name: "USB 3.2", description: "20 Gbps, transferencias rápidas." },
                    { name: "USB4 / Thunderbolt", description: "40 Gbps, máxima velocidad." }
                ]
            },
            {
                category: "Tipos de puertos de video",
                items: [
                    { name: "HDMI", description: "Estándar para TVs y monitores." },
                    { name: "DisplayPort", description: "Para gaming de alta frecuencia." },
                    { name: "USB-C con DP Alt Mode", description: "Video por USB-C." }
                ]
            },
            {
                category: "Tipos de puertos de red",
                items: [
                    { name: "Ethernet RJ45", description: "Internet por cable, estable." },
                    { name: "WiFi integrado", description: "Antenas para conexión inalámbrica." }
                ]
            }
        ],
        x: 24,
        y: 20
    },
    {
        id: "atx",
        name: "Conector de Energía",
        description: "Puerto donde se conecta la fuente de poder principal a la placa base.",
        long_description: "El conector ATX de 24 pines es la arteria principal de vida del sistema. A través de este enchufe masivo fluye toda la electricidad necesaria para despertar a la placa base y a sus componentes. Está diseñado con múltiples cables porque se necesitan diferentes voltajes simultáneamente (3.3V, 5V, 12V) para alimentar distintas partes del circuito, y dividir la corriente en varios cables evita que se sobrecalienten y derritan bajo la gran carga de trabajo.",
        image: "https://d1q3zw97enxzq2.cloudfront.net/images/ATX_MOBO.width-540.format-webp.webp",
        interface: "Alimentación Principal",
        performance: "Distribución Eléctrica",
        specs: {
            "Suministro Vital": "Recibe la energía principal de la fuente de poder.",
            "Distribución": "Reparte voltajes a todos los subsistemas de la placa.",
            "Anclaje Seguro": "Garantiza una conexión física firme y duradera.",
            "Seguridad": "Primer punto de filtrado eléctrico en la placa."
        },
        types: [
            {
                category: "Según su número de pines",
                items: [
                    { name: "20 pines", description: "Estándar antiguo, placas viejas." },
                    { name: "24 pines", description: "Estándar actual, más potencia disponible." },
                    { name: "4+4 pines CPU", description: "Alimentación adicional para el procesador." },
                    { name: "6+2 pines PCIe", description: "Alimentación para tarjetas gráficas." }
                ]
            }
        ],
        x: 70,
        y: 28
    },
    {
        id: "mainboard",
        name: "Placa Base (Motherboard)",
        description: "Pieza principal donde se conectan todos los demás componentes.",
        long_description: "La placa base es el sistema nervioso del ordenador. Es una lámina compleja de material aislante con kilómetros de pistas de cobre microscópicas que conectan cada componente entre sí. Sin ella, el procesador no podría hablar con la memoria, ni la tarjeta gráfica podría mostrar nada. Además de conectar, provee la infraestructura eléctrica, los chips de control y los puertos de expansión que determinan qué tanto podrás mejorar tu PC en el futuro.",
        image: "/assets/motherboard.png",
        interface: "Plataforma Central",
        performance: "Interconexión Total",
        specs: {
            "Plataforma Base": "Conecta física y electrónicamente todo el hardware.",
            "Distribución de Energía": "Canaliza la electricidad de la fuente a los componentes.",
            "Comunicación": "Permite que la CPU hable con la RAM, GPU y discos.",
            "Sincronización": "Coordina los relojes de tiempo de todos los chips."
        },
        types: [
            {
                category: "Según su factor de forma",
                items: [
                    { name: "ATX", description: "Tamaño completo, máxima expansión (305x244mm)." },
                    { name: "Micro-ATX", description: "Compacta, menos ranuras (244x244mm)." },
                    { name: "Mini-ITX", description: "Ultra compacta para builds pequeños (170x170mm)." },
                    { name: "E-ATX", description: "Extendida para workstations (305x330mm)." }
                ]
            },
            {
                category: "Según su socket de CPU",
                items: [
                    { name: "Intel LGA 1700", description: "Para procesadores Intel 12va-14va gen." },
                    { name: "AMD AM5", description: "Para procesadores AMD Ryzen 7000+." },
                    { name: "Intel LGA 1200", description: "Para Intel 10ma-11va gen (anterior)." },
                    { name: "AMD AM4", description: "Para Ryzen 1000-5000 (anterior)." }
                ]
            },
            {
                category: "Según su gama",
                items: [
                    { name: "Entrada (Budget)", description: "Funciones básicas, sin overclocking." },
                    { name: "Media (Mainstream)", description: "Buen equilibrio características/precio." },
                    { name: "Alta (Enthusiast)", description: "Overclocking, RGB, múltiples M.2." },
                    { name: "Workstation", description: "Para servidores y trabajo profesional." }
                ]
            }
        ],
        x: 58,
        y: 47
    },
    {
        id: "bios",
        name: "BIOS / UEFI",
        description: "Chip que contiene el software básico de arranque del sistema.",
        long_description: "La BIOS (Basic Input/Output System) es el primer programa que se ejecuta al encender la PC. Su función es realizar el POST (Power-On Self-Test), que verifica que todo el hardware esencial (RAM, procesador, teclado, etc.) funcione correctamente antes de entregarle el control al sistema operativo. Hoy en día ha sido reemplazada por la UEFI, que ofrece una interfaz más moderna y segura, con soporte para mouse y arranque ultra rápido.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        interface: "Memoria de Solo Lectura",
        performance: "Arranque del Sistema",
        specs: {
            "Software Base": "Contiene las instrucciones iniciales de arranque.",
            "Interfaz UEFI": "Permite configurar el hardware con mouse y teclado.",
            "Seguridad": "Gestiona el arranque seguro para evitar malware.",
            "Diagnóstico": "Detecta fallos en los componentes principales al encender."
        },
        types: [
            {
                category: "Según su tecnología",
                items: [
                    { name: "Legacy BIOS", description: "Interfaz clásica basada en texto, limitaciones en discos modernos." },
                    { name: "UEFI (Actual)", description: "Interfaz gráfica avanzada, mayor seguridad y rapidez." }
                ]
            },
            {
                category: "Según su redundancia",
                items: [
                    { name: "Single BIOS", description: "Un solo chip de memoria." },
                    { name: "Dual BIOS", description: "Dos chips para respaldo en caso de corrupción del firmware." }
                ]
            }
        ],
        x: 72,
        y: 92
    },
    {
        id: "battery",
        name: "Pila (Batería CMOS)",
        description: "Batería que mantiene la configuración de la BIOS y la hora del sistema.",
        long_description: "La pila de la placa base (generalmente una CR2032) alimenta un pequeño circuito de memoria llamado CMOS. Gracias a ella, el reloj del sistema sigue funcionando incluso si desconectas la PC de la corriente, y se mantienen guardadas las configuraciones que hiciste en la BIOS (como el orden de arranque). Si la PC empieza a perder la hora o se resetea sola al encenderla, es probable que la pila necesite ser reemplazada.",
        image: "https://d1q3zw97enxzq2.cloudfront.net/images/CMOS_Battery.width-1500.format-webp.webp",
        interface: "Alimentación de Respaldo",
        performance: "Retención de Datos",
        specs: {
            "Suministro Eléctrico": "Provee energía constante a la memoria CMOS.",
            "Reloj en Tiempo Real": "Mantiene la hora y fecha exactas del sistema.",
            "Almacenamiento": "Conserva la configuración personalizada de la BIOS.",
            "Durabilidad": "Diseñada para durar entre 3 a 5 años sin cambio."
        },
        types: [
            {
                category: "Según su formato",
                items: [
                    { name: "CR2032", description: "La más estándar y común en casi todas las placas base." },
                    { name: "Formatos Especiales", description: "Uso específico en servidores o laptops pequeñas." }
                ]
            }
        ],
        x: 35,
        y: 70
    },
    {
        id: "capacitors",
        name: "Condensadores (Capacitors)",
        description: "Componentes que almacenan energía para estabilizar el voltaje que llega a los circuitos.",
        long_description: "Los condensadores son como pequeños tanques de reserva de electricidad. Su función es filtrar y almacenar energía momentáneamente para entregarla de forma constante y sin picos de voltaje a los componentes más sensibles, como el procesador o la memoria RAM. Mantienen el flujo eléctrico limpio de interferencias, lo que previene errores de sistema y daños por inestabilidad eléctrica.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        interface: "Componente Pasivo",
        performance: "Estabilización de Energía",
        specs: {
            "Filtrado": "Elimina el ruido y las fluctuaciones eléctricas.",
            "Reserva": "Almacena carga para picos repentinos de demanda.",
            "Protección": "Evita que sobrevoltajes dañen chips delicados.",
            "Calidad": "Los condensadores sólidos duran mucho más que los antiguos."
        },
        types: [
            {
                category: "Según su tecnología",
                items: [
                    { name: "Electrolíticos", description: "Usan líquido interno, comunes en placas antiguas." },
                    { name: "Sólidos (Actuales)", description: "Muchos más duraderos, no explotan ni gotean." },
                    { name: "De Audio (Premium)", description: "Optimizados para una señal de sonido más pura." }
                ]
            }
        ],
        x: 45,
        y: 25
    },
    {
        id: "fans",
        name: "Cabezales de Ventilador",
        description: "Conectores de energía para CPU_FAN y ventiladores del gabinete.",
        long_description: "Estos conectores suministran energía y control de velocidad a los ventiladores. El CPU_FAN es crítico, ya que si no se detecta nada conectado allí, la computadora podría no encender para proteger el procesador. Los cabezales Sys_Fan permiten que la placa base controle la velocidad de los ventiladores del gabinete (PWM) según la temperatura interna, manteniendo el sistema fresco y silencioso.",
        image: "https://hardzone.es/app/uploads-hardzone.es/2022/01/conectores-ventiladores-placa-base.jpg?x=500&y=295&quality=80",
        interface: "Conector PWM / DC",
        performance: "Control de Ventilación",
        specs: {
            "Suministro Eléctrico": "Provee 12V para el motor del ventilador.",
            "Tecnología PWM": "Permite ajustar la velocidad de giro (RPM) con precisión.",
            "CPU_FAN": "Conector prioritario para el enfriamiento del procesador.",
            "Sensores": "Envían información de RPM a la BIOS para monitoreo."
        },
        types: [
            {
                category: "Según sus pines",
                items: [
                    { name: "3 Pines", description: "Control por voltaje, sin velocidad automática precisa." },
                    { name: "4 Pines (PWM)", description: "Control digital total de velocidad por el sistema." }
                ]
            }
        ],
        x: 35,
        y: 15
    },

    {
        id: "sata",
        name: "Puertos SATA",
        description: "Conectores para discos duros (HDD) y SSDs de 2.5 pulgadas.",
        long_description: "Aunque el formato M.2 es el más rápido, los puertos SATA siguen siendo esenciales para conectar discos de gran capacidad. Aquí es donde enchufas tus discos duros mecánicos o SSDs tradicionales mediante un cable de datos. Es la interfaz estándar que ha dominado el almacenamiento durante más de una década, permitiendo tener múltiples terabytes de espacio para tus archivos pesados.",
        image: "https://hardzone.es/app/uploads-hardzone.es/2020/04/Puertos-SATA-1.jpg",
        interface: "Interfaz SATA 3 (6Gb/s)",
        performance: "Transferencia de Almacenamiento",
        specs: {
            "Conectividad": "Permite conectar hasta 4 o 6 unidades de disco.",
            "Velocidad": "Hasta 600 MB/s de transferencia teórica.",
            "Hot-Plug": "En algunos sistemas, permite conectar discos sin apagar la PC.",
            "Compatibilidad": "Funciona con cualquier disco de 2.5\" o 3.5\" moderno."
        },
        types: [
            {
                category: "Evolución de la interfaz",
                items: [
                    { name: "SATA I", description: "1.5 Gb/s (Ya obsoleto)." },
                    { name: "SATA II", description: "3.0 Gb/s (Antiguo)." },
                    { name: "SATA III", description: "6.0 Gb/s (El estándar actual de los puertos)." }
                ]
            }
        ],
        x: 76,
        y: 78
    },
    {
        id: "rgb",
        name: "Cabezales RGB / ARGB",
        description: "Pines para conectar y controlar las tiras de luces y ventiladores con iluminación.",
        long_description: "Si tu PC brilla con colores, es gracias a estos conectores. El cabezal RGB (12V) permite que todos los LEDs cambien de color al mismo tiempo, mientras que el ARGB (5V - Direccionable) permite efectos mucho más complejos donde cada LED se controla por separado, creando arcosíris y animaciones fluidas. Se controlan mediante el software de la placa base para sincronizar toda la estética de tu setup.",
        image: "https://www.bequiet.com/admin/ImageServer.php?ID=f79d9a40587@be-quiet.net&format=jpg&colorspace=rgb&force=true",
        interface: "Control de Iluminación",
        performance: "Estética y Personalización",
        specs: {
            "Voltaje": "RGB usa 12V, ARGB usa 5V (¡No los confundas o se quemarán!).",
            "Sincronización": "Permite unir la luz de la placa, ventiladores y gabinete.",
            "Pines": "RGB tiene 4 pines, ARGB tiene 3 pines con uno bloqueado.",
            "Control": "Gestión total por software (MSI Mystic Light, ASUS Aura, etc.)."
        },
        types: [
            {
                category: "Tipo de iluminación",
                items: [
                    { name: "RGB (12V)", description: "Todos los LEDs muestran el mismo color a la vez." },
                    { name: "ARGB (5V Direccionable)", description: "Control individual por LED para efectos dinámicos." }
                ]
            }
        ],
        x: 58,
        y: 92
    },
    {
        id: "pcie_extra",
        name: "Ranuras de Expansión (PCIe)",
        description: "Zócalos adicionales para conectar tarjetas de sonido, red o almacenamiento extra.",
        long_description: "Además de la ranura principal para la tarjeta de video, las placas base suelen incluir ranuras PCIe más pequeñas (x1 o x4). Estas sirven para expandir las capacidades de tu PC, permitiéndote agregar una tarjeta de sonido profesional, una tarjeta de captura de video para streaming, o incluso más puertos USB si los que trae la placa no fueran suficientes.",
        image: "https://www.profesionalreview.com/wp-content/uploads/2020/05/ranuras-expansion-pci-scaled.jpg",
        interface: "Bus PCI Express",
        performance: "Expansión del Sistema",
        specs: {
            "Versatilidad": "Permite agregar funciones que la placa no tiene de fábrica.",
            "Velocidad x1/x4": "Suficiente para tarjetas que no requieren el ancho de banda de una GPU.",
            "Conexión Directa": "Se comunica directamente con el chipset o el procesador.",
            "Anclaje": "Mantiene las tarjetas de expansión firmes y seguras."
        },
        types: [
            {
                category: "Variantes de la ranura",
                items: [
                    { name: "PCIe x1", description: "La más pequeña, para tarjetas de red o sonido." },
                    { name: "PCIe x4", description: "Tamaño medio, para SSDs NVMe o capturadoras." },
                    { name: "PCIe x16", description: "La más larga, usada principalmente para tarjetas de video." }
                ]
            }
        ],
        x: 40,
        y: 80
    },
    {
        id: "traces",
        name: "Buses de Datos (Pistas de Cobre)",
        description: "Las líneas visibles en la placa que transportan la información entre componentes.",
        long_description: "Si ves la placa de cerca, notarás miles de líneas finas. Estas son las 'autopistas' de cobre por donde viajan los electrones llevando información (bits) de un lugar a otro. Son como los cables de una ciudad, pero microscópicos. La calidad y el diseño de estas pistas determinan qué tan rápido y estable puede ser el flujo de datos entre el cerebro (CPU) y el resto de las partes.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        interface: "Interconexión Física",
        performance: "Velocidad de Transferencia",
        specs: {
            "Conductividad": "Fabricadas en cobre para una mínima resistencia eléctrica.",
            "Diseño Multicapa": "La placa tiene hasta 6 u 8 capas internas de estas pistas.",
            "Aislamiento": "Protegidas para evitar que los datos se corrompan por interferencias.",
            "Sincronización": "Diseñadas con longitudes precisas para que los datos lleguen a tiempo."
        },
        types: [
            {
                category: "Tipos de buses",
                items: [
                    { name: "Bus de Datos", description: "Transporta la información real (los archivos)." },
                    { name: "Bus de Direcciones", description: "Indica a dónde debe ir esa información." },
                    { name: "Bus de Control", description: "Coordina qué componente debe hablar y cuándo." }
                ]
            }
        ],
        x: 55,
        y: 75
    }
];
