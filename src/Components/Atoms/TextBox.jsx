import PropTypes from "prop-types";

export default function TextBox({ content }) {
   return (
      <section className="text-center flex flex-col items-center">
         <section className="flex mb-[1px]">
            <span className="font-bold">Name: &nbsp;</span>
            <span>{content.name}</span>
         </section>
         <section className="flex mb-[1px]">
            <span className="font-bold">Email: &nbsp;</span>
            <span>{content.email}</span>
         </section>
         <section className="flex mb-[1px]">
            <span className="font-bold">Role: &nbsp;</span>
            <span>{content.role}</span>
         </section>
         <section className="flex mb-[4px]">
            <span className="font-bold">Competency: &nbsp;</span>
            <span>{content.competency}</span>
         </section>
         <section className="flex items-center ml-2 mt-1">
            <a href="/" className="font-black text-ps_black">
               View All <span aria-hidden="true">&gt;</span>
            </a>
         </section>
      </section>
   );
}

TextBox.propTypes = {
   content: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      role: PropTypes.string,
      competency: PropTypes.string,
   }).isRequired,
};
