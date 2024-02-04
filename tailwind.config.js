/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            ps_red: "#FE414D",
            ps_dark_grey: "#B4B4B4",
            ps_light_grey: "#EEEEEE",
            ps_black: "#000000",
            ps_white: "#FFFFFF",
            ps_blue: "#079FFF",
            ps_yellow: "#FFE63B",
         },
      },
   },
   plugins: [],
};
