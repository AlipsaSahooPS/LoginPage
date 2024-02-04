import CandidateCard from "./CandidateCard";
import image from "../../imgs/avatar_vox.webp";

export default function CardList() {
   const content1 = {
      name: "Alipsa",
      email: "abc@gmail.com",
      role: "HR",
      competency: "React",
   };
   const content2 = {
      name: "Alipsa",
      email: "abc@gmail.com",
      role: "HR",
      competency: "React",
   };
   return (
      <>
         <fieldset className="flex space-x-5">
            <CandidateCard content={content1} image={image} />
            <CandidateCard content={content2} image={image} />
         </fieldset>
      </>
   );
}
