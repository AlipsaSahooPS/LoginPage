import React from "react";
import PropTypes from "prop-types";
import Logo from "../Components/Atoms/Logo.jsx";
import Button from "../Components/Atoms/Button.jsx";

export default function Header({
   leftButtonText,
   rightButtonText,
   isButtonPresent,
}) {
   const handleClick = () => {
      console.log("Button clicked!");
   };

   return (
      <header className="w-full h-[15vh] bg-black flex items-center justify-between">
         <section className="ml-10">
            <Logo />
         </section>
         {isButtonPresent ? (
            <section className="flex justify-end space-x-4 mr-4">
               <Button
                  isFilled={false}
                  textColor="ps_white"
                  buttonText={leftButtonText}
                  onClick={handleClick}
               />
               <Button
                  isFilled={true}
                  textColor="ps_black"
                  backgroundColor="ps_red"
                  buttonText={rightButtonText}
                  onClick={handleClick}
               />
            </section>
         ) : (
            <section></section>
         )}
      </header>
   );
}

Header.propTypes = {
   leftButtonText: PropTypes.string,
   rightButtonText: PropTypes.string,
   isButtonPresent: PropTypes.bool,
};
