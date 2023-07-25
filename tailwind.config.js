/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "30%": "30%",
      },
      dropShadow: {
        "3xl": [
          "-1px 0px 0px #8B5CF6",
          "1px 0px 0px #8B5CF6",
          "0px -1px 0px #8B5CF6",
          "0px 1px 0px #8B5CF6",
        ],
      },
      objectPosition: {
        "center-bottom": "center top",
      },
      width: {
        "95%": "95%",
      },
      height: {
        528: "600px",
        "1px": "1px",
        420: "420px",
        45: "230px",
      },
      fontFamily: {
        dela: ["Dela Gothic One", "cursive"],
        mont: ["Montserrat", "sans-serif"],
        cherry: ["Cherry Cream Soda", "cursive"],
      },
      colors: {
        mirage: "#161a33",

        charcol: "#011015",
        modelbg: "rgb(0, 0, 0, 0.4)",
        inputmodelbg: "rgb(0, 0, 0, 0.9)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gradientColorStopPositions: {
        10: "-99%",
        20: "40%",
        30: "30%",
        40: "95%",
        15: "5%",
        90: "90%",
      },
      opacity: {
        3: "0.03",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
