import MixedButton from "../Atoms/MixedButton";
import Footer from "../Molecules/Footer";
import Header from "../Molecules/Header";
import Filter from "../Molecules/Filter";
import SearchBar from "../Atoms/SearchBar";
import CandidateCard from "../Molecules/CandidateCard";
import avatar from "../../imgs/avatar_vox.webp";

export default function DashboardPage() {
   const content = {
      name: "Alipsa",
      email: "abc@gmail.com",
      role: "HR",
      competency: "React",
   };

   return (
      <>
         <Header aria-label="Page Header" leftButtonText="Add Candidate" />
         <section className="mt-5 ml-10 mr-10">
            <SearchBar />
         </section>
         <fieldset className="flex flex-col items-center mb-10 w-full">
            <section className="mt-5">
               <MixedButton
                  leftButtonText="Competency"
                  rightButtonText="Applying For"
               />
            </section>
            <section className="mt-3">
               <Filter />
            </section>
            <section className="mt-5 flex flex-wrap gap-7 justify-center">
               <CandidateCard content={content} image={avatar} />
               <CandidateCard content={content} image={avatar} />
               <CandidateCard content={content} image={avatar} />
               <CandidateCard content={content} image={avatar} />
            </section>
         </fieldset>
         <Footer aria-label="Page Footer" />
      </>
   );
}
