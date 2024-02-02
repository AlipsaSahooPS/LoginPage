import Logo from "../Components/Logo/Logo.jsx";
import Button from "../Components/./Buttons/Button.jsx";

const Header = () => {
   const handleClick = () => {
      console.log("Button clicked!");
   };
   return (
      <>
         <nav className="w-full h-20 bg-black flex items-center justify-between">
            <div className="ml-4">
               <Logo />
            </div>
            <div className="flex justify-end space-x-4 mr-4">
               <Button
                  buttonLabel="Click me"
                  isFilled={0}
                  textColor="ps_white"
                  onClick={handleClick}
               />

               <Button
                  buttonLabel="Click me"
                  isFilled={1}
                  textColor="ps_black"
                  backgroundColor="ps_red"
                  onClick={handleClick}
               />
            </div>
         </nav>
      </>
   );
};
export default Header;
