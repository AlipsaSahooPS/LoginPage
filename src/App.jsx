import { useState } from "react";
import "./App.css";
import FilterButton from "./Components/Atoms/FilterButton";

export default function App() {
   const [value, setValue] = useState({ value: 0 });
   return (
      <>
         <FilterButton value={value} setValue={setValue} />
      </>
   );
}
