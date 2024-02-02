export default function Footer() {
   return (
      <footer
         className="w-full h-[10vh] bg-ps_red flex items-center justify-between"
         aria-label="Footer"
      >
         <button
            href="/"
            type="button"
            className="text-ps_white ml-10 hover:text-ps_black"
            aria-label="Terms of Service Link"
         >
            Terms of Service
         </button>
         <button
            href="/"
            type="button"
            className="text-ps_white hover:text-ps_black"
            aria-label="Privacy Policy Link"
         >
            Privacy Policy
         </button>
         <button
            href="/"
            type="button"
            className="text-ps_white mr-10 hover:text-ps_black"
            aria-label="Contact Us"
         >
            Contact Us
         </button>
      </footer>
   );
}
