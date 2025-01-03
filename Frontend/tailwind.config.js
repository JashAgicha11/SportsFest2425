/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-gray" : "#282F37",
        "dark-gray" : "#212529",
        'primary': "#282F37",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "bg-blue" : "#171923",
        "nav-blue":"#161926",
        "Titans" :"#761E1E",
        "Mavericks":"#461764",
        "Predators":"#E78A00",
        "Warriors" :"#125353",
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        trench :['Trench Slab','sans-serif'],
        technor :['Technor','sans-serif'],
        rajdhani :['Rajdhani','sans-serif'],
        sentient :['Sentient','sans-serif'],
        poppins :['Poppins','sans-serif'],
        general :['General Sans', 'sans-serif'],
        pricedown : ['Pricedown','sans-serif'],
        clash :['Clash Grotesk','sans-serif'],
        stencil:['Stardos Stencil','sans-serif'],
      }
    },
  },
  plugins: [],
}