import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#00d4ff",
                "accent-success": "#39ff14",
                "difficulty-easy": "#10b981",
                "difficulty-medium": "#fbbf24",
                "difficulty-hard": "#ef4444",
                "background-light": "#f5f8f8",
                "background-dark": "#030405", // User specified Obsidan
                "obsidian": "#030405",
                "surface-dark": "#161e20",
                "glass": "rgba(255, 255, 255, 0.03)",
                "glass-border": "rgba(0, 212, 255, 0.2)"
            },
            fontFamily: {
                "display": ["var(--font-inter)", "Inter", "sans-serif"],
                "sans": ["var(--font-inter)", "Inter", "sans-serif"],
                "mono": ["var(--font-jetbrains-mono)", "monospace"]
            },
            borderRadius: {
                "lg": "2rem",
                "xl": "3rem",
            },
            backgroundImage: {
                "mesh": "radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)"
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
};
export default config;
