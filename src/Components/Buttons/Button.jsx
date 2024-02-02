const Button = ({
   buttonLabel,
   isFilled,
   textColor,
   backgroundColor,
   onClick,
}) => {
   const baseClasses = `rounded-full font-semibold py-4 px-7 w-50 h-12 flex items-center justify-center`;

   const buttonClasses = isFilled
      ? `${baseClasses} bg-${backgroundColor} text-${textColor}`
      : `${baseClasses} border-2 border-${textColor} text-${textColor}`;

   return (
      <button className={buttonClasses} onClick={onClick}>
         {buttonLabel}
      </button>
   );
};

export default Button;
