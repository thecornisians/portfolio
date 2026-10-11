/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode :"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "Menlo", "monospace"],
      },
      colors: {
        vercel: {
          dark: "#000000",
          gray: "#111111",
          lightGray: "#888888",
          border: "rgba(255, 255, 255, 0.08)",
          hoverBorder: "rgba(255, 255, 255, 0.2)",
          emerald: "#00f090",
          blue: "#0070f3",
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    
  },
  plugins: [],
}