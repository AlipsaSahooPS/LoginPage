const Button = ({ btnText }) => {
   return (
      <>
         <button className="rounded-full bg-ps-red text-ps-light-grey font-semibold py-4 px-7">
            {btnText}
         </button>
      </>
   );
};

export default Button;
