import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#17153B",
                background: "#f8f7f3",
                accent: "#F8DE22",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                heading: ['var(--font-montserrat)', 'sans-serif'],
            },
            animation: {
                'text-gradient': 'textGradient 6s ease infinite',
                'float-slow': 'floatSlow 8s ease-in-out infinite',
            },
            keyframes: {
                textGradient: {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                floatSlow: {
                    '0%, 100%': { transform: 'translateY(0) scale(1)' },
                    '50%': { transform: 'translateY(-15px) scale(1.05)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;