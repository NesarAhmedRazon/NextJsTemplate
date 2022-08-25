/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NunitoSans: "'Nunito Sans', sans-serif",
      },
      fontSize: {
        "1.5xl": "1.4rem",
        "2.5xl": "1.75rem",
        "3.5xl": "2rem",
        "4.5xl": [
          "2.65rem",
          {
            lineHeight: "3.5rem",
          },
        ],
      },
      colors: {
        tfnormal: "#3FB65B",
        tfhover: "#369C4E",
        oRnormal: "#EE7616",
        oRhover: "#F26523",
        tfBlack: "#202934",
        twitter: "#00acee",
        facebook: "#39569c",
        linkedin: "#0072b1",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        21: "repeat(21, minmax(0, 1fr))",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
      },
      lineHeight: {
        11: "3rem",
        12: "3.25rem",
        13: "3.5rem",
        14: "3.75rem",
        15: "4rem",
        16: "4.25rem",
        17: "4.5rem",
        18: "5rem",
        19: "5.25rem",
        20: "5.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
