import MixedButton from "../Atoms/MixedButton";
import Footer from "../Molecules/Footer";
import Header from "../Molecules/Header";
import Filter from "../Molecules/Filter";
import SearchBar from "../Atoms/SearchBar";
import CandidateCard from "../Molecules/CandidateCard";
import image from "../../imgs/avatar_vox.webp";

export default function DashboardPage() {
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
         <Header aria-label="Page Header" />
         <section className="mt-5 ml-12 mr-12">
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
            <section className="mt-5 flex flex-wrap gap-5">
               <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
                  <CandidateCard content={content1} image={image} />
               </div>
               <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
                  <CandidateCard content={content2} image={image} />
               </div>
               <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
                  <CandidateCard content={content1} image={image} />
               </div>
               <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
                  <CandidateCard content={content2} image={image} />
               </div>
            </section>
         </fieldset>
         <Footer aria-label="Page Footer" />
      </>
   );
}
