import React from 'react';

/**
 * RenderDescription Component (Smart Version)
 * Detects image URLs anywhere in the text and renders them inline or as blocks.
 */
const RenderDescription = ({ text, className = "" }) => {
    if (!text) return null;

    // Pattern to match common image extensions + Supabase URLs
    // Captures the URL globally within the text
    const urlPattern = /(https?:\/\/[^\s]+?\.(?:jpeg|jpg|gif|png|webp|svg|bmp)(?:\?[^\s]*)?)/gi;

    // Split text by the pattern to keep both text and URLs
    const parts = text.split(urlPattern);

    return (
        <div className={`leading-relaxed ${className}`}>
            {parts.map((part, idx) => {
                if (!part) return null;

                // Check if part is a URL that matches our pattern
                if (part.match(urlPattern)) {
                    return (
                        <div key={idx} className="my-5 rounded-2xl overflow-hidden border border-tech-purple/40 bg-black/60 shadow-2xl shadow-purple-500/20 max-w-full">
                            <img
                                src={part}
                                alt="Imagen descriptiva"
                                className="w-full h-auto max-h-[500px] object-contain cursor-zoom-in hover:scale-[1.02] transition-transform duration-700"
                                loading="lazy"
                            />
                        </div>
                    );
                }

                // Normal text - Preserve newlines by splitting and mapping to <p> or <br>
                return (
                    <span key={idx} className="whitespace-pre-line">
                        {part}
                    </span>
                );
            })}
        </div>
    );
};

export default RenderDescription;
