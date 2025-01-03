/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkmode: "selector", // or 'media' or 'selector'
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xbox: "1000px",
      },
    },
  },
  plugins: [],
};
