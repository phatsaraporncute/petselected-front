/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'graynav': '#1e2022',
        'textnav': '#F0F0F0',
        'bgtextshop': '#E7E7E7',
        'bluegraybut': '#52616B',
        'graybgproduct': '#D6D6D6'
      },

    },
  },
  plugins: [require("daisyui")],
}

