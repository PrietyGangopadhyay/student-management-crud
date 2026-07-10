import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      <FaSearch className="search-icon" />

      <input
        className="search-box"
        type="text"
        placeholder="Search by Name or Department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;