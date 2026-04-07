export const externalData = [
    {
        id: "monitor",
        name: "Monitor",
        description: "Dispositivo de salida principal. Muestra la interfaz gráfica generada por la tarjeta de video.",
        long_description: "El monitor es la ventana visual de la computadora, esencial para cualquier interacción. Su función es traducir las señales electrónicas que envía la tarjeta gráfica en píxeles de colores que forman imágenes, videos y textos comprensibles. En el ámbito gaming, los monitores modernos no solo buscan nitidez (resolución 4K), sino también fluidez de movimiento mediante altas tasas de refresco (Hz), lo que permite ver acciones rápidas sin borrosidad, dando una ventaja competitiva crucial en juegos de acción.",
        image: "https://www.pngarts.com/files/2/Monitor-PNG-Background-Image.png",
        interface: "Salida de Video",
        performance: "Visualización Gráfica",
        specs: {
            "Visualización": "Convierte señales digitales en imágenes visibles para el usuario.",
            "Alta Tasa de Refresco": "Ofrece movimiento fluido crucial para juegos competitivos.",
            "Respuesta Instantánea": "Minimiza el retardo entre la acción y la visualización.",
            "Fidelidad de Color": "Reproduce colores precisos para diseño y multimedia."
        },
        types: [
            {
                category: "Según su tecnología de panel",
                items: [
                    { name: "TN (Twisted Nematic)", description: "Tiempo de respuesta muy rápido, ideal para gaming competitivo." },
                    { name: "IPS (In-Plane Switching)", description: "Excelentes ángulos de visión y reproducción de color precisa." },
                    { name: "VA (Vertical Alignment)", description: "Mejor contraste y negros profundos, ideal para multimedia." },
                    { name: "OLED", description: "Píxeles autoiluminados, contraste infinito y colores vibrantes." }
                ]
            },
            {
                category: "Según su resolución",
                items: [
                    { name: "Full HD (1920x1080)", description: "Resolución estándar para gaming y uso general." },
                    { name: "2K/QHD (2560x1440)", description: "Mayor nitidez sin sacrificar rendimiento." },
                    { name: "4K/UHD (3840x2160)", description: "Máxima calidad de imagen para profesionales y entusiastas." },
                    { name: "Ultrawide (21:9)", description: "Pantalla panorámica para inmersión total." }
                ]
            },
            {
                category: "Según su tasa de refresco",
                items: [
                    { name: "60Hz", description: "Estándar para oficina y uso básico." },
                    { name: "144Hz", description: "Ideal para gaming competitivo fluido." },
                    { name: "240Hz+", description: "Para profesionales de eSports que buscan ventaja máxima." }
                ]
            }
        ],
        x: 50,
        y: 40
    },
    {
        id: "keyboard",
        name: "Teclado",
        description: "Dispositivo de entrada principal para texto y comandos. Utiliza interruptores mecánicos para precisión.",
        long_description: "El teclado es el principal periférico de comunicación humana con la máquina. A diferencia de los teclados de membrana comunes, los mecánicos utilizan interruptores físicos individuales debajo de cada tecla. Esto proporciona una respuesta táctil y auditiva ('click') que confirma cada pulsación, reduciendo errores al escribir o jugar. Además, permiten pulsar muchas teclas a la vez (Anti-Ghosting), algo fundamental para realizar combinaciones complejas en videojuegos o atajos de productividad.",
        image: "https://img.pikbest.com/wp/202345/being-photo-of-the-ark-keyboard-shown-on-a-black-background_9601871.jpg!w700wp",
        interface: "Entrada de Texto",
        performance: "Respuesta Táctil",
        specs: {
            "Ingreso de Datos": "Permite la escritura de texto y ejecución de comandos.",
            "Feedback Táctil": "Confirma físicamente cada pulsación para mayor precisión.",
            "Anti-Ghosting": "Registra múltiples teclas presionadas simultáneamente.",
            "Personalización": "Permite asignar macros y funciones a teclas específicas."
        },
        types: [
            {
                category: "Según el tipo de switch",
                items: [
                    { name: "Switches Lineales", description: "Pulsación suave sin resistencia táctil, silenciosos." },
                    { name: "Switches Táctiles", description: "Punto de activación perceptible, feedback físico." },
                    { name: "Switches Clicky", description: "Sonido audible y sensación táctil pronunciada." }
                ]
            },
            {
                category: "Según su tamaño",
                items: [
                    { name: "Full Size (100%)", description: "Incluye teclado numérico completo." },
                    { name: "TKL / Tenkeyless (80%)", description: "Sin teclado numérico, más compacto." },
                    { name: "60%", description: "Solo teclas alfanuméricas, ultra portátil." },
                    { name: "40%", description: "Minimalista extremo, requiere capas de funciones." }
                ]
            },
            {
                category: "Según su conectividad",
                items: [
                    { name: "Cableado USB", description: "Conexión estable sin latencia." },
                    { name: "Inalámbrico Bluetooth", description: "Libertad de movimiento, compatible con múltiples dispositivos." },
                    { name: "Inalámbrico 2.4GHz", description: "Baja latencia para gaming sin cables." }
                ]
            }
        ],
        x: 60,
        y: 75
    },
    {
        id: "mouse",
        name: "Mouse",
        description: "Dispositivo de apuntamiento de alta precisión. Esencial para la interacción gráfica y juegos.",
        long_description: "El mouse traduce los movimientos físicos de tu mano en movimiento del cursor en la pantalla bidimensional. Los modelos de precisión utilizan sensores ópticos o láser de alta resolución (DPI) que pueden detectar desplazamientos microscópicos. Esto es vital no solo para diseñadores que necesitan exactitud píxel a píxel, sino también para jugadores que requieren apuntar con rapidez y consistencia. Muchos incluyen botones extra programables para ejecutar acciones rápidas con el pulgar.",
        image: "https://us.123rf.com/450wm/photonewman/photonewman1512/photonewman151200009/50102850-rat%C3%B3n-de-la-computadora-negro-sobre-un-fondo-negro.jpg?ver=6",
        interface: "Control de Cursor",
        performance: "Precisión de Movimiento",
        specs: {
            "Navegación": "Controla el cursor en la interfaz gráfica bidimensional.",
            "Puntería Precisa": "Traduce micromovimientos físicos a la pantalla.",
            "Gestión de DPI": "Ajusta la velocidad del cursor según la tarea.",
            "Botones Programables": "Ejecuta acciones complejas con un solo clic."
        },
        types: [
            {
                category: "Según su sensor",
                items: [
                    { name: "Óptico", description: "Usa luz LED, funciona en la mayoría de superficies." },
                    { name: "Láser", description: "Mayor precisión en superficies reflectantes." },
                    { name: "Óptico de alta gama", description: "Sensores avanzados para gaming profesional." }
                ]
            },
            {
                category: "Según su diseño ergonómico",
                items: [
                    { name: "Ambidiestro", description: "Simétrico, para diestros y zurdos." },
                    { name: "Ergonómico derecho", description: "Diseñado específicamente para mano derecha." },
                    { name: "Vertical", description: "Posición natural de la mano, reduce fatiga." },
                    { name: "Trackball", description: "Bola giratoria, sin mover la muñeca." }
                ]
            },
            {
                category: "Según su uso",
                items: [
                    { name: "Gaming", description: "Alta precisión, botones programables, RGB." },
                    { name: "Oficina", description: "Silencioso, ergonómico para uso prolongado." },
                    { name: "Diseño/CAD", description: "Máxima precisión para trabajo detallado." }
                ]
            }
        ],
        x: 75,
        y: 70
    },
    {
        id: "webcam",
        name: "Cámara Web (Webcam)",
        description: "Dispositivo de entrada de video. Captura imágenes en tiempo real para transmisiones y videollamadas.",
        long_description: "La webcam actúa como el ojo digital de la computadora, capturando luz y convirtiéndola en un flujo de datos de video. Es fundamental en la era del teletrabajo y el streaming, permitiendo la comunicación cara a cara a través de internet. Las cámaras modernas integran enfoque automático y ajuste de iluminación por inteligencia artificial para garantizar que la imagen sea clara incluso si la habitación está oscura o tiene luz de fondo intensa.",
        image: "https://dlcdnwebimgs.asus.com/files/media/9165af90-fde3-45b0-b229-88af5da8f8fe/websites/global/products/e3qwltu86agd77ck/img/fhd.png",
        interface: "Captura de Video",
        performance: "Transmisión en Vivo",
        specs: {
            "Captura de Video": "Digitaliza imágenes del mundo real para la computadora.",
            "Transmisión en Vivo": "Envía video en tiempo real a plataformas de internet.",
            "Enfoque Automático": "Ajusta la nitidez del sujeto dinámicamente.",
            "Adaptación de Luz": "Mejora la visibilidad en entornos con poca iluminación."
        },
        types: [
            {
                category: "Según su resolución",
                items: [
                    { name: "HD (720p)", description: "Calidad básica para videollamadas casuales." },
                    { name: "Full HD (1080p)", description: "Estándar actual para trabajo y streaming." },
                    { name: "2K/QHD", description: "Mayor detalle para contenido profesional." },
                    { name: "4K/UHD", description: "Máxima calidad para streaming profesional." }
                ]
            },
            {
                category: "Según su uso",
                items: [
                    { name: "Videoconferencias", description: "Enfoque automático y micrófono integrado." },
                    { name: "Streaming", description: "Alta calidad de imagen y configuración avanzada." },
                    { name: "Seguridad", description: "Visión nocturna y detección de movimiento." }
                ]
            },
            {
                category: "Según su montaje",
                items: [
                    { name: "Clip para monitor", description: "Se engancha en la parte superior de la pantalla." },
                    { name: "Trípode", description: "Posicionamiento flexible en cualquier superficie." },
                    { name: "Integrada", description: "Incorporada en laptops y tablets." }
                ]
            }
        ],
        x: 50,
        y: 15
    },
    {
        id: "headphones",
        name: "Auriculares",
        description: "Dispositivo de salida de audio y entrada de voz. Ofrece sonido envolvente y comunicación clara.",
        long_description: "Los auriculares combinan altavoces de alta fidelidad con un micrófono sensible, creando un entorno de audio aislado y personal. Son cruciales para la inmersión, ya que utilizan tecnologías de 'audio espacial' para simular que el sonido viene de diferentes direcciones (arriba, atrás, lados), lo cual ayuda a ubicar enemigos en juegos o instrumentos en música. El aislamiento acústico permite concentrarse sin distraerse con el ruido exterior.",
        image: "https://images.unsplash.com/photo-1713801129175-8e60c67e0412?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        interface: "Audio Bidireccional",
        performance: "Sonido Envolvente",
        specs: {
            "Salida de Audio": "Reproduce sonidos del sistema de forma privada.",
            "Entrada de Voz": "Captura la voz del usuario para comunicación.",
            "Sonido Espacial": "Simula dirección de audio para inmersión 3D.",
            "Cancelación de Ruido": "Filtra sonidos ambientales no deseados."
        },
        types: [
            {
                category: "Según su diseño",
                items: [
                    { name: "Over-Ear (circumaurales)", description: "Cubren completamente la oreja, máximo aislamiento." },
                    { name: "On-Ear (supraurales)", description: "Descansan sobre la oreja, más portátiles." },
                    { name: "In-Ear (intrauriculares)", description: "Se insertan en el canal auditivo, ultra compactos." },
                    { name: "Earbuds", description: "Descansan en la entrada del oído, ligeros." }
                ]
            },
            {
                category: "Según su conectividad",
                items: [
                    { name: "Cableados (3.5mm)", description: "Sin latencia, no requieren batería." },
                    { name: "Cableados (USB)", description: "Audio digital directo, con DAC integrado." },
                    { name: "Bluetooth", description: "Inalámbricos, libertad de movimiento." },
                    { name: "Inalámbricos 2.4GHz", description: "Baja latencia para gaming." }
                ]
            },
            {
                category: "Según su uso",
                items: [
                    { name: "Gaming", description: "Sonido surround, micrófono retráctil, RGB." },
                    { name: "Audiófilo", description: "Máxima fidelidad de sonido, drivers premium." },
                    { name: "Deportivos", description: "Resistentes al agua, ajuste seguro." },
                    { name: "Cancelación de ruido", description: "Ideal para viajes y oficinas ruidosas." }
                ]
            }
        ],
        x: 18,
        y: 55
    },
    {
        id: "speakers",
        name: "Parlante",
        description: "Dispositivo de salida de audio externo. Proporciona sonido potente para disfrutar sin auriculares.",
        long_description: "Los parlantes liberan el sonido al ambiente, moviendo el aire mediante membranas vibratorias para crear ondas sonoras. A diferencia de los auriculares, permiten sentir los bajos (frecuencias graves) en el cuerpo y disfrutar del audio de forma compartida. Son ideales para ver películas o escuchar música mientras te mueves por la habitación, ofreciendo una experiencia auditiva más natural y menos fatigante para el oído.",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800",
        interface: "Salida de Audio",
        performance: "Amplificación Sonora",
        specs: {
            "Amplificación de Audio": "Proyecta sonido a alto volumen en el ambiente.",
            "Estéreo": "Separa canales izquierdo y derecho para profundidad.",
            "Graves y Agudos": "Reproduce todo el espectro de frecuencias audibles.",
            "Conectividad Versátil": "Acepta fuentes de audio de diversos dispositivos."
        },
        types: [
            {
                category: "Según el rango de frecuencias que reproducen",
                items: [
                    { name: "Subwoofer", description: "Reproduce sonidos muy graves (bajos profundos)." },
                    { name: "Woofer", description: "Sonidos graves." },
                    { name: "Midrange (medio)", description: "Sonidos medios (voces, instrumentos)." },
                    { name: "Tweeter", description: "Sonidos agudos (detalles, agudos)." },
                    { name: "Full range (rango completo)", description: "Reproduce graves, medios y agudos en un solo parlante." }
                ]
            },
            {
                category: "Según su sistema de amplificación",
                items: [
                    { name: "Parlantes pasivos", description: "Necesitan un amplificador externo para funcionar." },
                    { name: "Parlantes activos", description: "Tienen amplificador incorporado (muy comunes en PC y equipos modernos)." }
                ]
            },
            {
                category: "Según su uso o aplicación",
                items: [
                    { name: "Parlantes domésticos", description: "Para casa, TV o equipos de sonido." },
                    { name: "Parlantes profesionales", description: "Para conciertos, iglesias, auditorios y eventos." },
                    { name: "Parlantes para automóvil", description: "Diseñados para autos." },
                    { name: "Parlantes multimedia", description: "Para computadoras y dispositivos móviles." }
                ]
            },
            {
                category: "Según su diseño y ubicación",
                items: [
                    { name: "Parlantes de torre", description: "Altos y potentes, uso doméstico." },
                    { name: "Parlantes de estantería (bookshelf)", description: "Pequeños, para espacios reducidos." },
                    { name: "Parlantes empotrables", description: "Se instalan en paredes o techos." },
                    { name: "Parlantes portátiles", description: "Con batería recargable y Bluetooth." }
                ]
            },
            {
                category: "Según la tecnología",
                items: [
                    { name: "Parlantes dinámicos (los más comunes)", description: "Usan bobina y cono vibratorio." },
                    { name: "Parlantes electrostáticos", description: "Alta fidelidad, membrana delgada." },
                    { name: "Parlantes piezoeléctricos", description: "Usan cristales que vibran con electricidad." },
                    { name: "Parlantes de bocina (horn)", description: "Amplifican el sonido mediante un cono acústico." }
                ]
            }
        ],
        x: 30,
        y: 55
    },
    {
        id: "speakers_right",
        name: "Parlante",
        description: "Compañero del sistema estéreo. Asegura el balance de sonido y la direccionalidad.",
        long_description: "En un sistema estéreo, el parlante derecho es la contraparte necesaria del izquierdo. Al tener dos fuentes de sonido separadas físicamente, nuestro cerebro puede triangular la posición de los sonidos mediante la diferencia de tiempo e intensidad con la que llegan a cada oído. Esto crea el 'escenario sonoro' (soundstage), dando amplitud y realismo a lo que escuchamos, haciendo que la música suene como si la banda estuviera frente a ti.",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800",
        interface: "Canal Estéreo",
        performance: "Balance Sonoro",
        specs: {
            "Canal Derecho": "Reproduce la información de audio del lado derecho.",
            "Sincronización": "Emite sonido en fase perfecta con el canal izquierdo.",
            "Diseño Acústico": "Caja resonante ajustada para claridad de voz.",
            "Estética": "Complementa simétricamente el setup del escritorio."
        },
        types: [
            {
                category: "Según el rango de frecuencias que reproducen",
                items: [
                    { name: "Subwoofer", description: "Reproduce sonidos muy graves (bajos profundos)." },
                    { name: "Woofer", description: "Sonidos graves." },
                    { name: "Midrange (medio)", description: "Sonidos medios (voces, instrumentos)." },
                    { name: "Tweeter", description: "Sonidos agudos (detalles, agudos)." },
                    { name: "Full range (rango completo)", description: "Reproduce graves, medios y agudos en un solo parlante." }
                ]
            },
            {
                category: "Según su sistema de amplificación",
                items: [
                    { name: "Parlantes pasivos", description: "Necesitan un amplificador externo para funcionar." },
                    { name: "Parlantes activos", description: "Tienen amplificador incorporado (muy comunes en PC y equipos modernos)." }
                ]
            },
            {
                category: "Según su uso o aplicación",
                items: [
                    { name: "Parlantes domésticos", description: "Para casa, TV o equipos de sonido." },
                    { name: "Parlantes profesionales", description: "Para conciertos, iglesias, auditorios y eventos." },
                    { name: "Parlantes para automóvil", description: "Diseñados para autos." },
                    { name: "Parlantes multimedia", description: "Para computadoras y dispositivos móviles." }
                ]
            },
            {
                category: "Según su diseño y ubicación",
                items: [
                    { name: "Parlantes de torre", description: "Altos y potentes, uso doméstico." },
                    { name: "Parlantes de estantería (bookshelf)", description: "Pequeños, para espacios reducidos." },
                    { name: "Parlantes empotrables", description: "Se instalan en paredes o techos." },
                    { name: "Parlantes portátiles", description: "Con batería recargable y Bluetooth." }
                ]
            },
            {
                category: "Según la tecnología",
                items: [
                    { name: "Parlantes dinámicos (los más comunes)", description: "Usan bobina y cono vibratorio." },
                    { name: "Parlantes electrostáticos", description: "Alta fidelidad, membrana delgada." },
                    { name: "Parlantes piezoeléctricos", description: "Usan cristales que vibran con electricidad." },
                    { name: "Parlantes de bocina (horn)", description: "Amplifican el sonido mediante un cono acústico." }
                ]
            }
        ],
        x: 70,
        y: 55
    },
    {
        id: "printer",
        name: "Impresora",
        description: "Dispositivo de salida para documentos físicos. Permite imprimir, escanear y copiar archivos.",
        long_description: "La impresora multifuncional unifica la oficina en un solo aparato. Utiliza cabezales microscópicos para depositar tinta o tóner sobre papel con extrema precisión, recreando documentos digitales en el mundo físico. Además, su escáner integrado hace el proceso inverso: ilumina documentos físicos y captura su imagen digitalmente, permitiendo guardarlos, editarlos o enviarlos por correo electrónico, cerrando el ciclo entre lo físico y lo digital.",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
        interface: "Impresión y Escaneo",
        performance: "Multifunción",
        specs: {
            "Impresión Física": "Plasma documentos digitales en papel tangible.",
            "Digitalización": "Convierte documentos físicos en archivos digitales.",
            "Reproducción": "Genera copias idénticas de documentos existentes.",
            "Conexión Remota": "Recibe órdenes de impresión sin cables."
        },
        types: [
            {
                category: "Según su tecnología de impresión",
                items: [
                    { name: "Inyección de tinta", description: "Rocía tinta líquida, ideal para fotos y color." },
                    { name: "Láser", description: "Usa tóner en polvo, rápida y económica para texto." },
                    { name: "Térmica", description: "Calor sobre papel especial, para tickets y recibos." },
                    { name: "Matriz de puntos", description: "Impacto mecánico, para formularios continuos." }
                ]
            },
            {
                category: "Según su funcionalidad",
                items: [
                    { name: "Impresora simple", description: "Solo imprime documentos." },
                    { name: "Multifuncional (MFP)", description: "Imprime, escanea, copia y a veces envía fax." },
                    { name: "Fotográfica", description: "Especializada en impresión de fotos de alta calidad." }
                ]
            },
            {
                category: "Según su uso",
                items: [
                    { name: "Doméstica", description: "Para uso personal y ocasional." },
                    { name: "Oficina pequeña", description: "Volumen moderado, multifunción." },
                    { name: "Empresarial", description: "Alto volumen, red compartida, gestión avanzada." },
                    { name: "Gran formato", description: "Para planos, pósters y material publicitario." }
                ]
            }
        ],
        x: 15,
        y: 85
    },
    {
        id: "case",
        name: "Gabinete (PC Case)",
        description: "Chasis que protege los componentes internos. ¡Haz clic para explorar el interior!",
        long_description: "El gabinete es mucho más que una caja bonita; es el esqueleto y la piel de la computadora. Su diseño está cuidadosamente calculado para gestionar el flujo de aire: toma aire frío del frente y expulsa el aire caliente por detrás y arriba, creando un túnel de viento que evita el sobrecalentamiento. Además, actúa como una jaula de Faraday, protegiendo los componentes electrónicos sensibles de interferencias electromagnéticas externas y reduciendo el ruido de los ventiladores.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800",
        interface: "Estructura Física",
        performance: "Refrigeración Activa",
        specs: {
            "Protección Física": "Resguarda componentes sensibles de golpes y polvo.",
            "Flujo de Aire": "Canaliza aire fresco para refrigerar el sistema.",
            "Organización": "Mantiene cables y partes ordenados internamente.",
            "Accesibilidad": "Ofrece puertos externos para conectar periféricos."
        },
        types: [
            {
                category: "Según su tamaño (factor de forma)",
                items: [
                    { name: "Full Tower", description: "Máximo espacio, múltiples tarjetas y discos." },
                    { name: "Mid Tower", description: "Tamaño estándar, equilibrio entre espacio y tamaño." },
                    { name: "Mini Tower / Micro ATX", description: "Compacto, para builds pequeños." },
                    { name: "Small Form Factor (SFF)", description: "Ultra compacto, portabilidad máxima." }
                ]
            },
            {
                category: "Según su diseño de flujo de aire",
                items: [
                    { name: "Airflow (malla frontal)", description: "Máxima ventilación, prioriza enfriamiento." },
                    { name: "Silencioso (paneles sólidos)", description: "Aislamiento acústico, reduce ruido." },
                    { name: "Híbrido", description: "Balance entre flujo de aire y silencio." }
                ]
            },
            {
                category: "Según su estética",
                items: [
                    { name: "Gaming RGB", description: "Panel de vidrio templado, iluminación RGB." },
                    { name: "Minimalista", description: "Diseño limpio, sin luces llamativas." },
                    { name: "Profesional", description: "Sobrio, ideal para oficinas." }
                ]
            }
        ],
        x: 85,
        y: 35,
        type: "internal-trigger"
    }
];
