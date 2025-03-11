/ @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist//*.{html,js}"],
  theme: {
    extend: {},
    keyframes: {
      textSwitch: {
        '0%, 100%': { content: '"community"', color: '#ff009d' },
        '40%': { content: '"web3"', color: '#5b54c4' },
        '60%': { content: '"research"', color: '#ffe600' },
        '80%': { content: '"educational"', color: 'white' },
        '100%': { content: '"persona1"', color: '#00ffb4' },
      }
    },
    animation: {
      textSwitch: 'textSwitch 3s infinite'
    }
  },
  keyframes: {
    animate: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(-100%)" },
    },
    go: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(100%)" },
    },
    },
    animation: {
      animate: "animate 10s linear infinite",
      go: "go 10s linear infinite",
    },
  
  plugins: [],
}