import Logo from "../Components/Logo/Logo.jsx";
import Button from "../Components/./Buttons/Button.jsx";

export default function Header({
   buttonText1,
   buttonText2,
   isButtonPresent = 1,
}) {
   const handleClick = () => {
      console.log("Button clicked!");
   };
   return (
      <>
         <nav className="w-full h-[15vh] bg-black flex items-center justify-between">
            <div className="ml-10">
               <Logo />
            </div>
            {isButtonPresent ? (
               <div className="flex justify-end space-x-4 mr-4">
                  <Button
                     isFilled={0}
                     textColor="ps_white"
                     buttonText={buttonText1}
                     onClick={handleClick}
                  />
                  <Button
                     isFilled={1}
                     textColor="ps_black"
                     backgroundColor="ps_red"
                     buttonText={buttonText2}
                     onClick={handleClick}
                  />
               </div>
            ) : (
               <div></div>
            )}
         </nav>
      </>
   );
}
