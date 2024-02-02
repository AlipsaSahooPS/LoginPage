const Input = ({ type, placeholder, label }) => {
   return (
      <>
         <fieldset className="mb-4">
            <label
               className="block text-ps_black text-sm font-bold mb-2"
               htmlFor={type}
            >
               {label}
            </label>
            <input
               className="appearance-none border-2 border-ps_dark_grey rounded w-full py-2 px-4 text-ps_dark_grey leading-tight focus:outline-none focus:border-ps_blue"
               type={type}
               placeholder={placeholder}
            />
         </fieldset>
      </>
   );
};

export default Input;
