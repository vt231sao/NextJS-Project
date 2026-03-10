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
                brand: {
                    light: '#4dabf5',
                    main: '#2196f3',
                    dark: '#1769aa',
                },
            },
            screens: {
                '3xl': '1920px',
            },
        },
    },
    plugins: [],
};
export default config;