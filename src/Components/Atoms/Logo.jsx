import logo from "../../imgs/ps-logo.webp";

export default function Logo() {
   return (
      <figure
         className="flex items-center justify-center"
         aria-label="Company Logo"
      >
         <img
            src={logo}
            alt="Company Logo"
            width="100px"
            height="64px"
            loading="lazy"
         />
      </figure>
   );
}
