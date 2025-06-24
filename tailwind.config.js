/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1e40af', // blue-800
                secondary: '#1e3a8a', // blue-900
                accent: '#fbbf24', // amber-400
            },
            container: {
                center: true,
                padding: '1.5rem',
            },
        },
    },
    plugins: [],
}