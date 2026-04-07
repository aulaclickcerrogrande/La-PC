import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import RenderDescription from './RenderDescription';

const SpecsModal = ({ isOpen, onClose, component }) => {
    if (!isOpen || !component) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass-morphism w-full max-w-5xl border border-tech-purple/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)] max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-tech-purple/5 sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-tech-purple/20 rounded-lg text-tech-purple">
                            <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-white uppercase tracking-tight">Funciones Principales</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                    >
                        <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-10 space-y-8 md:space-y-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-black/20">
                            <img src={component.image} alt={component.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 space-y-4 md:space-y-5 text-center md:text-left">
                            <h4 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter uppercase">{component.name}</h4>
                            <div className="h-1 w-16 bg-tech-purple rounded-full mx-auto md:mx-0" />
                            <RenderDescription
                                text={component.long_description}
                                className="text-gray-300 text-sm md:text-base font-medium"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {Object.entries(component.specs).map(([key, value]) => (
                            <div key={key} className="flex flex-col md:flex-row p-5 bg-white/5 rounded-xl border border-white/5 hover:border-tech-purple/30 transition-colors group gap-4 md:gap-12">
                                <span className="text-[10px] md:text-xs text-tech-purple/70 uppercase tracking-[0.2em] font-black md:w-48 shrink-0 pt-1 lg:w-64">
                                    {key}
                                </span>
                                <RenderDescription
                                    text={value}
                                    className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors leading-relaxed flex-1"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-tech-purple/5 text-center flex justify-center sticky bottom-0">
                    <button
                        onClick={onClose}
                        className="px-8 py-3 bg-white/10 hover:bg-white/20 transition-all rounded-xl font-bold text-sm uppercase tracking-widest border border-white/10"
                    >
                        Cerrar Ventana
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default SpecsModal;
