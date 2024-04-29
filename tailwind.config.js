/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        text_clr: "#191919",
        category_bg: "#e73c17",
        alert_clr: "#e23000",
        input_border: "#f0f0f0",
        footer_bg: "#2f333a",
      },
    },
  },
  plugins: [],
};
