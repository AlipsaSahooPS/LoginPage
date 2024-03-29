import PropTypes from "prop-types";

export default function FilterButton({ count, text }) {
   const handleClick = () => {
      console.log("Clicked");
   };

   return (
      <button
         className="bg-ps_dark_grey text-ps_white font-bold px-5 rounded-md flex flex-col items-center"
         onClick={handleClick}
      >
         {count}
         <span className="text-xs mb-1">{text}</span>
      </button>
   );
}

FilterButton.propTypes = {
   count: PropTypes.number,
   text: PropTypes.string,
};
