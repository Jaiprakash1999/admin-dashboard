/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D2E33", // Primary color
        secondary: "#6B7280", // Secondary color
        bold: "#21252C", // Bold color
        alert: "#F05252",
        success: "#1A56DB",
      },
    },
  },
  plugins: [],
};
