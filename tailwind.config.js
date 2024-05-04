/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      greylight: {
        50: "#181818",
        100: "#373737",
        200: "#303030",
        300: "#1f1f1f",
        400: "#ffffff",
        500: "#a9a9a9"
      },
      green:{
        100: "#32cd32"
      }
    },

    fontFamily: {
      sans: ["Your Custom Sans Font", "system-ui", "sans-serif"],
      serif: ["Your Custom Serif Font", "Georgia", "serif"],
      mono: [
        "Your Custom Monospace Font",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  plugins: [],
};
