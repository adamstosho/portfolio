/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    linearGradientColors: {
      'blue-purple': ['#4D6EDD', '#8B5CF6'],
      'green-yellow': ['#10B981', '#FCD34D'],
    },
    extend: {
      colors:{
        primary_bg:'#0a192f',
        primary1:'#64ffda',
        blur_texts:'#8892b0',
        var_color:'#ccd6f6',
        primary_bg2: "#112240",
      },
      
    },
  },
  plugins: [],
}

