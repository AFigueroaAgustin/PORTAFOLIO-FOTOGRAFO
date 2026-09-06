import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        studio: {
          950: "#050507",
          900: "#09090d",
          850: "#101017",
          800: "#161620",
          700: "#222230",
        },
        accent: {
          gold: "#d4af37",
          amber: "#e6b840",
          light: "#fae090",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        "tactile-card": "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 20px 40px -15px rgba(0,0,0,0.7)",
        "tactile-button": "inset 0 1px 0 0 rgba(255,255,255,0.15), 0 8px 16px -4px rgba(0,0,0,0.5)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
}

export default config
