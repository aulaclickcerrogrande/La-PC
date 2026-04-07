import React from 'react';

const Hotspot = ({ data, isActive, onClick, isQuizMode }) => {
    return (
        <button
            onClick={() => onClick(data)}
            className="absolute group z-10 cursor-pointer p-4 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${data.x}%`, top: `${data.y}%` }}
        >
            <div className="relative">
                {/* Outer Pulse */}
                <div className={`absolute -inset-4 rounded-full border-2 ${data.type === 'internal-trigger' ? 'border-yellow-400' : 'border-tech-purple'} transition-all duration-500 scale-0 group-hover:scale-100 ${isActive ? 'scale-100 opacity-50 pulse-glow' : 'opacity-0'}`} />

                {/* Target Dot */}
                <div className={`relative w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center
            ${isActive
                        ? `${data.type === 'internal-trigger' ? 'bg-yellow-400 border-white shadow-[0_0_15px_#facc15]' : 'bg-tech-purple border-white shadow-[0_0_15px_#a855f7]'} scale-110`
                        : `${data.type === 'internal-trigger' ? 'bg-black/50 border-yellow-400 group-hover:bg-yellow-400/30' : 'bg-black/50 border-tech-purple group-hover:bg-tech-purple/30'}`
                    }`}>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-white' : `${data.type === 'internal-trigger' ? 'bg-yellow-400' : 'bg-tech-purple'}`}`} />
                </div>
            </div>

            {/* Label on hover - Hide in Quiz Mode */}
            {!isQuizMode && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-black/80 border border-tech-purple/50 px-2 py-1 rounded text-[10px] text-white backdrop-blur-sm">
                    {data.name}
                </div>
            )}
        </button>
    );
};

export default Hotspot;
