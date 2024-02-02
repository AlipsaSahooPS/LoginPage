import React from "react";
import PropTypes from "prop-types";

export default function Button({
   buttonText,
   isFilled,
   textColor,
   backgroundColor,
   onClick,
}) {
   const baseClasses = `rounded-full font-semibold py-4 px-7 w-50 h-12 flex items-center justify-center`;
   const buttonClasses = isFilled
      ? `${baseClasses} bg-${backgroundColor} text-${textColor} hover:text-ps`
      : `${baseClasses} border-2 border-${textColor} text-${textColor}`;

   return (
      <button className={buttonClasses} onClick={onClick}>
         {buttonText}
      </button>
   );
}

Button.propTypes = {
   buttonText: PropTypes.string.isRequired,
   isFilled: PropTypes.bool.isRequired,
   textColor: PropTypes.string.isRequired,
   backgroundColor: PropTypes.string.isRequired,
   onClick: PropTypes.func,
};
