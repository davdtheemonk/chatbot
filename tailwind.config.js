/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: {
        // light mode
        primary: "#0063ff",
        secondary: "#c8d8b4",
        dark: "#0C0E16",
        light: "#f4f4f8",
        danger: "rgb(228, 81, 81)",
        white: "#ffffff",
        grey: "rgb(100, 100, 100)",
        accent: "#e9a3a3",
        green: "#b1f3b6",
        blue: "rgb(22, 44, 125)",
        darkblue: "#0B1229",
        gray: "rgb(190, 189, 189)",
        msm: "10px",
      },
    },
  },
};
