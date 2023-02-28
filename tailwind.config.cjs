/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '400%': '400%',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1900px',
      // => @media (min-width: 1900px) { ... }
    },
    colors: {
      black: {
        DEFAULT: "#000000",
        50: "#8A8A8A",
        100: "#7A7A7A",
        200: "#5C5C5C",
        300: "#3D3D3D",
        400: "#1F1F1F",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      slategray: {
        DEFAULT: "#64748B",
        50: "#CCD2DA",
        100: "#C0C8D2",
        200: "#A9B3C1",
        300: "#919EB0",
        400: "#79899F",
        500: "#64748B",
        600: "#4D596A",
        700: "#353E4A",
        800: "#1E2229",
        900: "#060708",
      },
      gray: {
        DEFAULT: "#393435",
        50: "#978D8F",
        100: "#8E8385",
        200: "#796E71",
        300: "#645B5D",
        400: "#4E4749",
        500: "#393435",
        600: "#1C191A",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      blue: {
        DEFAULT: "#4c60ab",
        100: "#dbdfee",
        200: "#b7bfdd",
        300: "#94a0cd",
        400: "#7080bc",
        500: "#4c60ab",
        600: "#3d4d89",
        700: "#2e3a67",
        800: "#1e2644",
        900: "#0f1322",
      },
      silver: "#c0b7b1",
      darkgray: "#433e3f",
      grayLavender: "#c8c6d7",
      bone: "#d9cab3",
      white: "#ffffff",
      snow: "#f9f4f5",
      primary: "#EDEDE9",
      male: "#D6CCC2",
      blackCoffee: "#3a3238",
      premium: "#C39C50",
      basic: "#3B738B",
      medium: "#B92833",
      standard: "#135D37",
    },
    extend: {},
  },
  plugins: [],
};
