import PropTypes from "prop-types";

export default function CardButton({ color, text }) {
   return (
      <button
         className={`bg-${color} text-ps_black font-bold py-1 px-4 rounded-full flex items-center justify-center`}
      >
         <span className="text-xs">{text}</span>
      </button>
   );
}

CardButton.propTypes = {
   color: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
};
