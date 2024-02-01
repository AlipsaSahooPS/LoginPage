const Button = () => {
   return (
      <>
         <button
            className={`rounded-full ${
               backgroundIsBlack ? "bg-white text-white" : "bg-black text-black"
            } border ${
               backgroundIsWhite ? "border-white" : ""
            } font-semibold py-4 px-7`}
         >
            Add Candidate
         </button>
      </>
   );
};

export default Button;
