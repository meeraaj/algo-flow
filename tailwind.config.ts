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
                // High-fidelity palette from design
                "primary": "#00d4ff",
                "obsidian": "#030405",
                "background-dark": "#030405",
                "background-light": "#f5f8f8",
                "accent-success": "#39ff14",
                "surface-dark": "#161e20",
                // Specific glass and border tokens
                "glass": "rgba(255, 255, 255, 0.03)",
                "glass-border": "rgba(0, 212, 255, 0.1)",
                "difficulty-easy": "#10b981",
                "difficulty-medium": "#fbbf24",
                "difficulty-hard": "#ef4444",
            },
            fontFamily: {
                "display": ["var(--font-inter)", "Inter", "sans-serif"],
                "sans": ["var(--font-inter)", "Inter", "sans-serif"],
                "mono": ["var(--font-jetbrains-mono)", "monospace"]
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
            backgroundImage: {
                // Cinematic mesh background logic
                "mesh": "radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
                "hero-gradient": "linear-gradient(to right, #00d4ff, #60a5fa)",
            },
            animation: {
                // Support for the pulsing "Spatial Beta" tag
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            backdropBlur: {
                "xs": "2px",
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
};
export default config;