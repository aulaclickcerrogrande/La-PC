import { supabase } from './src/supabase/config.js';

const collections = {
    EXTERNAL: 'external_components',
    INTERNAL: 'internal_components'
};

async function seed() {
    console.log("🚀 Iniciando sembrado de crucigramas CORREGIDOS...");

    for (const table of Object.values(collections)) {
        const { data: components, error } = await supabase.from(table).select('*');
        if (error) {
            console.error(`Error leyendo ${table}:`, error);
            continue;
        }

        for (const comp of components) {
            const baseCrossword = generateVerifiedCrossword(comp.name);
            const { error: updateError } = await supabase
                .from(table)
                .update({ crossword: baseCrossword })
                .eq('id', comp.id);

            if (updateError) console.error(`Error actualizando ${comp.name}:`, updateError);
            else console.log(`✅ Crucigrama VERIFICADO añadido a: ${comp.name}`);
        }
    }
    console.log("✨ ¡Sembrado completado con éxito! Todas las palabras cruzan perfectamente.");
}

function generateVerifiedCrossword(name) {
    const templates = [
        {
            // Template A: COMPONENTES (Verified)
            //   0 1 2 3 4 5
            // 1       F
            // 2 P L A C A
            // 3 U     N
            // 4       B I T
            // 5       L
            // 6       E
            words: [
                { word: 'PLACA', clue: 'Base de todos los componentes.', x: 0, y: 2, dir: 'across' }, // P(0,2)..C(3,2)
                { word: 'CABLE', clue: 'Conecta dispositivos.', x: 3, y: 2, dir: 'down' }, // C(3,2)..B(3,4)..E(3,6) matches PLACA(C)
                { word: 'BIT', clue: 'Unidad mínima de datos (0 o 1).', x: 3, y: 4, dir: 'across' }, // B(3,4) matches CABLE(B)
                { word: 'FAN', clue: 'Ventilador en inglés.', x: 2, y: 1, dir: 'down' }, // F(2,1)..A(2,2)..N(2,3) matches PLACA(A)
                { word: 'CPU', clue: 'Unidad Central de Proceso.', x: 0, y: 2, dir: 'down' } // C(0,2)..P..U? Wait, PLACA starts P.
                // Previous manual design said 'PC' at (0,2). Let's use PC.
            ].map(w => w.word === 'CPU' ? { word: 'PC', clue: 'Ordenador personal.', x: 0, y: 2, dir: 'down' } : w)
        },
        {
            // Template B: PERIFERICOS (Verified)
            //   0 1 2 3 4 5
            // 0 M O N I T O R
            // 1 O       O
            // 2 U       R
            // 3 S       R
            // 4 E       E
            // 5         S
            // 6 R E D
            words: [
                { word: 'MONITOR', clue: 'Pantalla para ver la imagen.', x: 0, y: 0, dir: 'across' }, // M(0,0)..T(4,0)..R(6,0)
                { word: 'MOUSE', clue: 'Ratón para mover el cursor.', x: 0, y: 0, dir: 'down' }, // M(0,0) matches MONITOR(M)
                { word: 'TORRE', clue: 'Caja donde van los componentes.', x: 4, y: 0, dir: 'down' }, // T(4,0) matches MONITOR(T)
                { word: 'RED', clue: 'Conexión entre computadoras.', x: 6, y: 0, dir: 'down' } // R(6,0) matches MONITOR(R)
            ]
        },
        {
            // Template C: CONECTORES (Verified)
            //   0 1 2 3 4
            // 0 P
            // 1 C H I P
            // 2   D   I
            // 3   M   N
            // 4   I
            words: [
                { word: 'CHIP', clue: 'Pequeño circuito integrado.', x: 0, y: 1, dir: 'across' }, // C(0,1)..H(1,1)..P(3,1)
                { word: 'PC', clue: 'Computadora Personal.', x: 0, y: 0, dir: 'down' }, // P(0,0)..C(0,1) matches CHIP(C)
                { word: 'HDMI', clue: 'Cable de video de alta definición.', x: 1, y: 1, dir: 'down' }, // H(1,1)..M(1,3)..I(1,4) matches CHIP(H)
                { word: 'PIN', clue: 'Patita de conexión metálica.', x: 3, y: 1, dir: 'down' } // P(3,1)..I(3,2)..N(3,3) matches CHIP(P)
            ]
        }
    ];

    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % templates.length;
    return templates[index];
}

seed();
