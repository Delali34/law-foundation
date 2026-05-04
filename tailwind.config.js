/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "var(--forest)",
        "forest-deep": "var(--forest-deep)",
        cream: "var(--cream)",
        "cream-warm": "var(--cream-warm)",
        bone: "var(--bone)",
        terracotta: "var(--terracotta)",
        "terracotta-deep": "var(--terracotta-deep)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        serif: ["var(--font-serif)"],
      },
    },
  },
  plugins: [],
};
