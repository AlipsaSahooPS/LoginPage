const Button = ({ color }) => {
   // const backgroundIsBlack = backgroundColor === "black";
   // const backgroundIsWhite = backgroundColor === "white";
   return (
      <>
         <button
            className={`rounded-full border-${color} text-${color} border-2 font-semibold py-4 px-7 w-50 h-12 flex items-center justify-center`}
         >
            Add Candidate
         </button>
      </>
   );
};

export default Button;
