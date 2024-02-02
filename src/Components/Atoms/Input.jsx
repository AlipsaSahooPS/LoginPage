import React from "react";
import PropTypes from "prop-types";

export default function Input({ type, placeholder, label, isRequired, value }) {
   return (
      <fieldset className="mb-4">
         <label
            className="block text-ps_black text-sm font-bold mb-2 ml-1"
            htmlFor={type}
         >
            {label}
         </label>
         <input
            className="appearance-none border-2 border-ps_dark_grey rounded w-full py-2 px-4 text-ps_black leading-tight focus:outline-none focus:border-ps_blue"
            type={type}
            placeholder={placeholder}
            value={value}
            required={isRequired === true}
         />
      </fieldset>
   );
}

Input.propTypes = {
   type: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   isRequired: PropTypes.bool,
   value: PropTypes.any,
};
