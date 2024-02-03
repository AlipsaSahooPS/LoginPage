export default function FilterButton({ value, setValue }) {
   const handleClick = () => {
      setValue({ value: value.value + 1 });
   };

   return (
      <button
         className="bg-ps_dark_grey text-white font-bold px-4 rounded-lg flex flex-col items-center"
         onClick={handleClick}
      >
         {value.value}
         <span className="text-xs mb-1">Created</span>
      </button>
   );
}
