
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    font_family: {
      "family" : ['Raleway','Open Sans']
    },

    colors : {

      "Very_Dark_Blue" : "hsl(243, 87%, 12%)",
      "Desaturated_Blue" : "hsl(238, 22%, 44%)",
  
      "Bright_Blue" : "hsl(224, 93%, 58%)",
      "Moderate_Cyan" : "hsl(170, 45%, 43%)",
  
      "Light_Grayish_Blue": "hsl(240, 75%, 98%)",
      "Light_Gray": "hsl(0, 0%, 75%)",
      "white" : "rgb(255 255 255)",
      "sky_blue" : "rgb(188, 186, 250)",
      
    },
    extend: {
      backgroundImage: {
        "curve_image_m" : "url('/images/bg-curve-mobile.svg')",
        "curve_image_d" : "url('/images/bg-curve-desktop.svg')",
      },
      boxShadow : {
        "box_shadow" : "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      }
    },
  },
  plugins: [],
}