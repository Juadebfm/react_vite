/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        text_color: "#191919",
        category_bg: "#e73c17",
        alert_color: "#e23000",
        input_border: "#f0f0f0",
        footer_bg: "#2f333a",
        footer_faded_bg: "#2f333a99",
      },
    },
  },
  plugins: [],
};
