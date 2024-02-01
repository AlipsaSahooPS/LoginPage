/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            ps_red: "#FE414D",
            "ps-dark-grey": "#B4B4B4",
            "ps-light-grey": "#EEEEEE",
            ps_black: "#000000",
         },
      },
   },
   plugins: [],
};
