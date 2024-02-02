import Footer from "../../Molecules/Footer";
import Header from "../../Molecules/Header";
import LoginBox from "../../Molecules/LoginBox";

export default function LoginPage() {
   return (
      <>
         <Header isButtonPresent={0} />
         <span className="h-[78vh] flex flex-col items-center justify-center mt-[-20px]">
            <h1
               className="w-full text-3xl font-medium flex items-center justify-center mb-4"
               aria-label="Login Text"
               role="heading"
            >
               Login
            </h1>
            <LoginBox />
         </span>
         <Footer />
      </>
   );
}
