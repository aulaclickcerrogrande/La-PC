import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Info, X } from 'lucide-react';

const Crossword = ({ data, onWin, preview = false }) => {
    const [grid, setGrid] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [isWon, setIsWon] = useState(false);
    const [activeClue, setActiveClue] = useState(null);
    const inputRefs = useRef({});

    useEffect(() => {
        if (!data || !data.words) return;

        // Calculate grid size
        let maxX = 0;
        let maxY = 0;
        data.words.forEach(w => {
            const endX = w.dir === 'across' ? w.x + w.word.length - 1 : w.x;
            const endY = w.dir === 'down' ? w.y + w.word.length - 1 : w.y;
            maxX = Math.max(maxX, endX);
            maxY = Math.max(maxY, endY);
        });

        const newGrid = Array(maxY + 1).fill(null).map(() => Array(maxX + 1).fill(null));

        data.words.forEach((w, wordIdx) => {
            for (let i = 0; i < w.word.length; i++) {
                const x = w.dir === 'across' ? w.x + i : w.x;
                const y = w.dir === 'down' ? w.y + i : w.y;
                if (!newGrid[y][x]) {
                    newGrid[y][x] = {
                        char: w.word[i],
                        words: [],
                        number: i === 0 ? wordIdx + 1 : null
                    };
                }
                newGrid[y][x].words.push(wordIdx);
            }
        });

        setGrid(newGrid);
    }, [data]);

    const handleInput = (y, x, value) => {
        if (isWon || preview) return;
        const char = value.slice(-1).toUpperCase();
        if (!char.match(/[A-Z0-9]/) && char !== '') return;

        const key = `${y}-${x}`;
        const newUserAnswers = { ...userAnswers, [key]: char };
        setUserAnswers(newUserAnswers);

        // Auto focus next
        if (char !== '') {
            const currentCell = grid[y][x];
            const wordIdx = currentCell.words[0];
            const word = data.words[wordIdx];
            let nextX = x;
            let nextY = y;

            if (word.dir === 'across') nextX++;
            else nextY++;

            if (inputRefs.current[`${nextY}-${nextX}`]) {
                inputRefs.current[`${nextY}-${nextX}`].focus();
            }
        }

        // Check win
        checkWin(newUserAnswers);
    };

    const checkWin = (answers) => {
        let allCorrect = true;
        grid.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell) {
                    if (answers[`${y}-${x}`] !== cell.char) {
                        allCorrect = false;
                    }
                }
            });
        });

        if (allCorrect && !isWon) {
            setIsWon(true);
            if (onWin) onWin();
        }
    };

    if (!data || !data.words || data.words.length === 0) {
        return (
            <div className="p-8 text-center text-gray-500 italic">
                No hay crucigrama disponible para este componente aún.
            </div>
        );
    }

    return (
        <div className="space-y-6 flex flex-col items-center">
            {/* Clues Section - Hide in preview mode to save space */}
            {!preview && (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-tech-purple">Horizontales</h4>
                        {data.words.filter(w => w.dir === 'across').map((w, i) => (
                            <div key={i} className="text-xs text-gray-400 bg-white/5 p-2 rounded-lg border border-white/5">
                                <span className="font-bold text-tech-purple mr-2">{data.words.indexOf(w) + 1}.</span> {w.clue}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-tech-purple">Verticales</h4>
                        {data.words.filter(w => w.dir === 'down').map((w, i) => (
                            <div key={i} className="text-xs text-gray-400 bg-white/5 p-2 rounded-lg border border-white/5">
                                <span className="font-bold text-tech-purple mr-2">{data.words.indexOf(w) + 1}.</span> {w.clue}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Grid Section */}
            <div className={`p-4 md:p-6 bg-black/40 rounded-3xl border border-white/10 shadow-2xl overflow-auto w-full flex justify-center ${preview ? 'scale-90 origin-top' : ''}`}>
                <div
                    className="grid gap-1.5"
                    style={{
                        gridTemplateColumns: `repeat(${grid[0]?.length || 0}, minmax(35px, 60px))`,
                    }}
                >
                    {grid.map((row, y) => (
                        row.map((cell, x) => (
                            <div key={`${y}-${x}`} className="relative aspect-square w-full min-w-[35px] max-w-[60px]">
                                {cell ? (
                                    <>
                                        {cell.number && (
                                            <span className="absolute top-0.5 left-1 text-[8px] md:text-[10px] font-black text-tech-purple z-10">
                                                {cell.number}
                                            </span>
                                        )}
                                        <input
                                            ref={el => inputRefs.current[`${y}-${x}`] = el}
                                            type="text"
                                            maxLength={1}
                                            value={preview ? cell.char : (userAnswers[`${y}-${x}`] || '')}
                                            readOnly={preview}
                                            onChange={(e) => handleInput(y, x, e.target.value)}
                                            className={`w-full h-full text-center text-lg md:text-2xl font-black rounded-lg border focus:outline-none transition-all ${preview
                                                    ? 'bg-tech-purple/20 border-tech-purple/50 text-white cursor-default'
                                                    : (isWon
                                                        ? 'border-green-500/50 text-green-400 bg-green-500/10'
                                                        : 'bg-white/10 border-white/10 text-white focus:border-tech-purple focus:bg-tech-purple/20 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]')
                                                }`}
                                        />
                                    </>
                                ) : (
                                    <div className="w-full h-full bg-transparent" />
                                )}
                            </div>
                        ))
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {!preview && isWon && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-green-500/20 border border-green-500/50 rounded-2xl flex items-center gap-4 text-green-400"
                    >
                        <div className="p-2 bg-green-500 rounded-full text-black">
                            <Trophy size={20} />
                        </div>
                        <div>
                            <p className="font-black uppercase tracking-tighter italic">¡Crucigrama Completado!</p>
                            <p className="text-xs">Dominas este componente al 100%.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Crossword;
