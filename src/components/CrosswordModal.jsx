import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, X } from 'lucide-react';
import Crossword from './Crossword';

const CrosswordModal = ({ isOpen, onClose, component }) => {
    if (!isOpen || !component) return null;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="glass-morphism w-full max-w-5xl border border-tech-purple/40 rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(168,85,247,0.3)] max-h-[95vh] flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b border-white/10 bg-tech-purple/10">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-tech-purple text-white rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                            <Gamepad2 size={20} />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                            <h3 className="text-lg md:text-xl font-black text-white italic tracking-tighter uppercase whitespace-nowrap">
                                Reto: <span className="text-tech-purple">Crucigrama</span>
                            </h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">{component.name}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-all text-gray-400 hover:text-white hover:rotate-90"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar bg-black/40">
                    <div className="w-full">
                        <Crossword data={component.crossword} onWin={() => setTimeout(onClose, 3000)} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CrosswordModal;
