import logo from "../../imgs/ps-logo.png";

const Logo = () => {
   return (
      <div className="flex items-center justify-center bg-ps_black">
         <img src={logo} alt="Company Logo" className="w-25 h-16" />
      </div>
   );
};

export default Logo;
