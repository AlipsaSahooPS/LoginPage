export default function MixedButton({ leftButtonText, rightButtonText }) {
   const baseClass =
      "group text-ps_red font-bold py-2 px-4 flex-auto transition-colors duration-200 border border-ps_red hover:text-ps_black hover:border-ps_black";
   const leftClass = `${baseClass} rounded-l`;
   const rightClass = `${baseClass} rounded-r`;
   return (
      <div className="inline-flex border-1 border-ps_dark_grey">
         <button className={leftClass} aria-label={leftButtonText}>
            {leftButtonText}
         </button>
         <button className={rightClass} aria-label={rightButtonText}>
            {rightButtonText}
         </button>
      </div>
   );
}
