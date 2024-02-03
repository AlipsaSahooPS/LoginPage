export default function CardButton({ color, text }) {
   return (
      <button
         className={`bg-${color} text-ps_black font-bold py-2 px-6 rounded-full flex items-center justify-center`}
      >
         <span className="text-xs mt-1">{text}</span>
      </button>
   );
}
