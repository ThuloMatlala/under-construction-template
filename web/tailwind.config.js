/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                fadeIn: {
                    '0%, 100%': { opacity: '100%' },
                    '0%': { opacity: '0%' },
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                fadeIn: 'fadeIn 2s ease-in',
            }
        },
    },
    plugins: [],
}