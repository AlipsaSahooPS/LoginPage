import Footer from "../../Molecules/Footer";
import Header from "../../Molecules/Header";
import LoginBox from "../../Molecules/LoginBox";

export default function LoginPage() {
   return (
      <>
         <Header isButtonPresent={false} aria-label="Page Header" />
         <fieldset
            className="h-[78vh] flex flex-col items-center justify-center mt-[-20px]"
            aria-label="Login Section"
         >
            <h1
               className="w-full text-3xl font-medium flex items-center justify-center mb-4"
               aria-label="Login Heading"
            >
               Login
            </h1>
            <LoginBox />
         </fieldset>
         <Footer aria-label="Page Footer" />
      </>
   );
}
