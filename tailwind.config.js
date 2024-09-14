/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#3662E3",
        "custom-gray": "#CDD5E0",
        "dark-blue": "#1D1B48",
        "bg-300": "#4A5567",
        "bg-500": "#364153",
        "bg-700": "#20293A",
        "bg-900": "#111729",
      },
    },
  },
  plugins: [],
};
