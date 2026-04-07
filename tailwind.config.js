/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'tech-black': '#000000',
                'tech-purple': {
                    DEFAULT: '#a855f7',
                    vibrant: '#d8b4fe',
                    glow: '#7e22ce'
                }
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: .5, transform: 'scale(1.2)' },
                }
            }
        },
    },
    plugins: [],
}
