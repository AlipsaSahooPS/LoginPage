import { useState } from "react";
import FilterButton from "../Components/Atoms/FilterButton";

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
      <div className="flex overflow-x-auto gap-5 justify-center items-start">
         <FilterButton
            count={count.count1}
            text="Created"
            className="flex-shrink-0 flex-grow whitespace-nowrap"
         />
         <FilterButton
            count={count.count2}
            text="Assigned"
            className="flex-shrink-0 flex-grow whitespace-nowrap"
         />
         <FilterButton
            count={count.count3}
            text="In Interview"
            className="flex-shrink-0 flex-grow whitespace-nowrap"
         />
         <FilterButton
            count={count.count4}
            text="Under Review"
            className="flex-shrink-0 flex-grow whitespace-nowrap"
         />
         <FilterButton
            count={count.count5}
            text="Hired"
            className="flex-shrink-0 flex-grow whitespace-nowrap"
         />
         <FilterButton
            count={count.count6}
            text="Rejected"
            className="flex-shrink-0 flex-grow whitespace-nowrap"
         />
      </div>
   );
}
