import React from 'react';
import { motion } from 'framer-motion';
import { Info, GraduationCap, CheckCircle2, XCircle, Send, RotateCcw, Maximize2, BookOpen, Gamepad2 } from 'lucide-react';
import RenderDescription from './RenderDescription';

const DetailsPanel = ({ selected, onShowSpecs, onShowTypes, onShowCrossword, isQuizMode, quizResponses, onQuizUpdate, allData }) => {
    const currentResponse = quizResponses[selected?.id] || {
        selectedAnswer: '',
        userDescription: '',
        feedback: null,
        alternatives: []
    };

    const [showCrossword, setShowCrossword] = React.useState(false);

    React.useEffect(() => {
        setShowCrossword(false); // Reset when component changes
    }, [selected?.id]);

    React.useEffect(() => {
        if (selected && isQuizMode && currentResponse.alternatives.length === 0) {
            // Generate alternatives only once
            const others = allData.filter(d => d.id !== selected.id).map(d => d.name);
            const shuffled = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
            const newAlternatives = [...shuffled, selected.name].sort(() => 0.5 - Math.random());

            onQuizUpdate(selected.id, {
                ...currentResponse,
                alternatives: newAlternatives
            });
        }
    }, [selected, isQuizMode, currentResponse.alternatives.length, allData, onQuizUpdate, currentResponse]);

    const handleSubmit = () => {
        const isCorrect = currentResponse.selectedAnswer === selected.name;
        onQuizUpdate(selected.id, {
            ...currentResponse,
            feedback: isCorrect ? 'correct' : 'incorrect'
        });
    };

    const handleAnswerSelect = (alt) => {
        if (currentResponse.feedback === 'correct') return;
        onQuizUpdate(selected.id, {
            ...currentResponse,
            selectedAnswer: alt,
            feedback: null // Reset feedback when changing answer
        });
    };

    const handleDescriptionChange = (val) => {
        if (currentResponse.feedback === 'correct') return;
        onQuizUpdate(selected.id, {
            ...currentResponse,
            userDescription: val
        });
    };

    const handleReset = () => {
        onQuizUpdate(selected.id, {
            ...currentResponse,
            feedback: null
        });
    };

    if (!selected) {
        return (
            <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="glass-morphism p-6 rounded-2xl border border-tech-purple/20 flex flex-col h-full items-center justify-center text-gray-400 space-y-4 text-center min-h-[200px]"
            >
                <Info className="w-10 h-10 md:w-12 md:h-12 text-tech-purple/50" />
                <p className="max-w-[200px] text-sm md:text-base">Selecciona un componente de la placa para comenzar.</p>
            </motion.div>
        );
    }

    if (isQuizMode) {
        return (
            <motion.div
                key={`quiz-${selected.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="glass-morphism p-5 md:p-6 rounded-2xl border border-tech-purple/20 flex flex-col h-full space-y-4 md:space-y-6 overflow-y-auto custom-scrollbar"
            >
                <div className="relative rounded-xl border border-tech-purple/30 overflow-hidden shrink-0 bg-black/20">
                    <img src={selected.image} alt="Tarea" className="w-full h-auto max-h-48 object-contain" />
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-tech-purple" />
                        Identificación
                    </h3>

                    <div className="grid grid-cols-1 gap-2">
                        {currentResponse.alternatives.map((alt) => (
                            <button
                                key={alt}
                                disabled={currentResponse.feedback === 'correct'}
                                onClick={() => handleAnswerSelect(alt)}
                                className={`text-left p-3 rounded-xl border transition-all text-sm font-medium ${currentResponse.selectedAnswer === alt
                                    ? 'bg-tech-purple border-tech-purple text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                                    : 'bg-white/5 border-white/10 text-gray-300 hover:border-tech-purple/50'
                                    }`}
                            >
                                {alt}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-2 flex-1">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Tu Descripción</h3>
                    <textarea
                        disabled={currentResponse.feedback === 'correct'}
                        value={currentResponse.userDescription}
                        onChange={(e) => handleDescriptionChange(e.target.value)}
                        placeholder="Escribe aquí la función de este componente..."
                        className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-tech-purple transition-colors resize-none"
                    />
                </div>

                {currentResponse.feedback && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-xl flex items-center gap-3 border ${currentResponse.feedback === 'correct'
                            ? 'bg-green-500/10 border-green-500/30 text-green-400'
                            : 'bg-red-500/10 border-red-500/30 text-red-400'
                            }`}
                    >
                        {currentResponse.feedback === 'correct' ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                        <span className="text-sm font-bold uppercase tracking-tight">
                            {currentResponse.feedback === 'correct' ? '¡Respuesta Correcta!' : 'Nombre Incorrecto, intenta de nuevo'}
                        </span>
                    </motion.div>
                )}

                <button
                    onClick={currentResponse.feedback === 'correct' ? handleReset : handleSubmit}
                    className="w-full py-4 bg-tech-purple hover:bg-tech-purple-glow transition-all rounded-xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 group shadow-lg"
                >
                    {currentResponse.feedback === 'correct' ? (
                        <>Reintentar <RotateCcw className="w-4 h-4" /></>
                    ) : (
                        <>Comprobar <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                </button>

                {/* Crossword Challenge Trigger */}
                <div className="pt-4 border-t border-white/10">
                    <button
                        onClick={onShowCrossword}
                        className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 text-tech-purple"
                    >
                        <Gamepad2 size={14} /> Activar Reto: Crucigrama
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-morphism p-5 md:p-6 rounded-2xl border border-tech-purple/20 flex flex-col h-full overflow-y-auto custom-scrollbar"
        >
            <div className="space-y-5 md:space-y-6">
                <div className="relative group overflow-hidden rounded-xl border border-tech-purple/30 bg-black/20">
                    <img
                        src={selected.image}
                        alt={selected.name}
                        className="w-full h-auto max-h-64 object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {selected.name}
                    </h2>
                    <div className="h-1 w-12 bg-tech-purple rounded-full" />
                </div>

                <RenderDescription
                    text={selected.description}
                    className="text-gray-300 text-sm md:text-lg text-balance"
                />

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest mb-1">INTERFAZ</p>
                        <p className="text-xs md:text-sm font-bold text-tech-purple-vibrant lowercase truncate">{selected.interface}</p>
                    </div>
                    <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest mb-1">RENDIMIENTO</p>
                        <p className="text-xs md:text-sm font-bold text-tech-purple-vibrant lowercase truncate">{selected.performance}</p>
                    </div>
                </div>

                <button
                    onClick={onShowSpecs}
                    className="w-full py-3 md:py-4 bg-tech-purple hover:bg-tech-purple-glow transition-colors rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-2 group"
                >
                    Ver Especificaciones
                    <Maximize2 className="w-4 h-4 group-hover:scale-125 transition-transform" />
                </button>

                {selected.types && (
                    <button
                        onClick={onShowTypes}
                        className="w-full py-3 md:py-4 bg-white/10 hover:bg-white/20 transition-colors rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-2 group border border-white/10"
                    >
                        Ver Tipos
                        <BookOpen className="w-4 h-4 group-hover:scale-125 transition-transform" />
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export default DetailsPanel;
