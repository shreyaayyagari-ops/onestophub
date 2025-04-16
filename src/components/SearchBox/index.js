import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="searchBox">
      <FaSearch className="search-icon" />
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
  );
};

export default SearchBox;
