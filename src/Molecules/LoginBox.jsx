import Button from "../Components/Buttons/Button";
import Input from "../Components/InputField/Input";

export default function LoginBox() {
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Login Button Clicked");
   };
   return (
      <section className="w-full max-w-sm mx-auto" aria-label="Login Page">
         <form
            onSubmit={handleSubmit}
            className="p-4 bg-white shadow-md rounded h-full flex flex-col justify-center"
            aria-label="Login form"
         >
            <fieldset>
               <Input
                  type="email"
                  placeholder="Enter your email"
                  label="Email"
                  isRequired={1}
                  ariaLabel="Email input field"
               />
               <Input
                  type="password"
                  placeholder="Enter your password"
                  label="Password"
                  isRequired={1}
                  ariaLabel="Password input field"
               />
            </fieldset>
            <span className="flex justify-center">
               <Button
                  buttonText="Login"
                  isFilled={1}
                  textColor="ps_white"
                  backgroundColor="ps_red"
                  onClick={handleSubmit}
                  ariaLabel="Login button"
               />
            </span>
         </form>
      </section>
   );
}
