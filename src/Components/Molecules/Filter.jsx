import { useState } from "react";
import FilterButton from "../Atoms/FilterButton";

export default function Filter() {
   const initial = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0,
      count6: 0,
   };
   const [count, setCount] = useState(initial);

   return (
      <fieldset className="flex flex-wrap space-x-5 space-y-2 justify-center ml-[-20px]">
         <span></span>
         <FilterButton count={count.count1} text="Created" />
         <FilterButton count={count.count2} text="Assigned" />
         <FilterButton count={count.count3} text="In Interview" />
         <FilterButton count={count.count4} text="Under Review" />
         <FilterButton count={count.count5} text="Hired" />
         <FilterButton count={count.count6} text="Rejected" />
      </fieldset>
   );
}
