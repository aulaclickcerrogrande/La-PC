import { supabase } from './src/supabase/config.js';

const collections = {
    EXTERNAL: 'external_components',
    INTERNAL: 'internal_components'
};

async function verify() {
    console.log("🕵️ Iniciando auditoría de integridad de crucigramas...");
    let totalErrors = 0;
    let checked = 0;

    for (const table of Object.values(collections)) {
        const { data: components, error } = await supabase.from(table).select('*');
        if (error) {
            console.error(`Error leyendo ${table}:`, error);
            continue;
        }

        for (const comp of components) {
            checked++;
            const issues = checkCrossword(comp.crossword, comp.name);
            if (issues.length > 0) {
                console.error(`❌ ERROR en ${comp.name}:`);
                issues.forEach(msg => console.error(`  - ${msg}`));
                totalErrors++;
            } else {
                // console.log(`✅ ${comp.name}: OK`);
            }
        }
    }

    if (totalErrors === 0) {
        console.log(`\n✨ ¡AUDITORÍA PERFECTA! Se verificaron ${checked} componentes y todos los crucigramas conectan correctamente.`);
    } else {
        console.error(`\n⚠️ Se encontraron errores en ${totalErrors} componentes.`);
    }
}

function checkCrossword(crossword, compName) {
    if (!crossword || !crossword.words) return ["Sin crucigrama definido"];

    const issues = [];
    const grid = {}; // Key: "y,x", Value: char

    crossword.words.forEach((w, idx) => {
        // Check bounds
        if (w.x < 0 || w.y < 0) issues.push(`Palabra '${w.word}' coordenadas negativas.`);

        for (let i = 0; i < w.word.length; i++) {
            const x = w.dir === 'across' ? w.x + i : w.x;
            const y = w.dir === 'down' ? w.y + i : w.y;
            const char = w.word[i];
            const key = `${y},${x}`;

            if (grid[key] && grid[key] !== char) {
                issues.push(`Conflicto en (${x},${y}): '${grid[key]}' vs '${char}' (Palabra: ${w.word})`);
            }
            grid[key] = char;
        }
    });

    return issues;
}

verify();
