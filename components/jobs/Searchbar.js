
const SearchBar = () => (
 <form action="/" method="get">
    <label htmlFor="header-search">
     <span >Job Search</span>
    </label>
      <input
         type="text"
         id="header-search"
         placeholder="Search Job Title"
      />
  <button type="submit">Search</button>
 </form>
);

export default SearchBar;

