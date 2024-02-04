export default function SearchBar() {
   return (
      <form>
         <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-ps_dark_grey sr-only"
         >
            Search
         </label>
         <span className="relative">
            <span className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
               <svg
                  className="w-4 h-4 text-ps_light_grey dark:text-ps_black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
               >
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
               </svg>
            </span>
            <input
               type="search"
               id="default-search"
               className="block w-full p-4 ps-10 text-sm text-ps_black border border-ps_dark_grey rounded-lg"
               placeholder="Search..."
               aria-label="Search"
               required
            />
         </span>
      </form>
   );
}
