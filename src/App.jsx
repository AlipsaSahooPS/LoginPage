import "./App.css";

import TransparentButton from "./Components/01Buttons/TransparentButton/TransparentButton";
import Input from "./Components/InputField/Input";

const App = () => {
   return (
      <>
         {/* <FilledButton btnText="Click me" /> */}
         <TransparentButton color="ps_black" />
      </>
      //remember I added custom colors in my tailwind config file, so you color names may differ
   );
};

export default App;
