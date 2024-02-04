import Avatar from "../Atoms/Avatar";
import CardButton from "../Atoms/CardButton";
import TextBox from "../Atoms/TextBox";

export default function CandidateCard({ content, image }) {
   return (
      <article className="card w-60 h-80 bg-ps_white shadow-xl rounded-lg overflow-hidden flex flex-col items-center">
         <figure className="pt-4">
            <Avatar image={image} />
         </figure>
         <hr className="w-full border-1 border-ps_dark_grey my-3" />
         <section className="card-body flex flex-col items-center text-center">
            <CardButton color="ps_yellow" text="Created" />
            <span className="mb-3"></span>
            <TextBox content={content} />
         </section>
      </article>
   );
}
