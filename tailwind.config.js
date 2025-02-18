/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        whiteBlue: "#acd3db", //azul mas claro
        lightBlue: "#b4dee6", // Fondo claro
        darkTeal: "#0097b2", // Fondo oscuro
        buttonBlue: "#0097b2", // Color del botón de "Proyectos"
        textWhite: "#e2fbff", // Texto claro
      },
    },
  },
  plugins: [],
 };