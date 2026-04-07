import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, X } from 'lucide-react';
import RenderDescription from './RenderDescription';

const TypesModal = ({ isOpen, onClose, component }) => {
    if (!isOpen || !component || !component.types) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass-morphism w-full max-w-6xl border border-tech-purple/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)] max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-tech-purple/5 sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-tech-purple/20 rounded-lg text-tech-purple">
                            <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-white uppercase tracking-tight">Tipos y Categorías</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                    >
                        <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-10 space-y-8">
                    <div className="text-center space-y-3">
                        <h4 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter uppercase">{component.name}</h4>
                        <div className="h-1 w-20 bg-tech-purple rounded-full mx-auto" />
                        <p className="text-gray-400 text-sm md:text-base">Conoce las diferentes clasificaciones y variantes</p>
                    </div>

                    {component.types.map((typeCategory, idx) => (
                        <div key={idx} className="space-y-4">
                            <h5 className="text-lg md:text-xl font-bold text-tech-purple uppercase tracking-tight flex items-center gap-2">
                                <div className="h-1 w-8 bg-tech-purple rounded-full" />
                                {typeCategory.category}
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {typeCategory.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-tech-purple/30 transition-all group">
                                        <h6 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-tech-purple transition-colors">{item.name}</h6>
                                        <RenderDescription
                                            text={item.description}
                                            className="text-xs md:text-sm text-gray-400"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
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

export default TypesModal;
