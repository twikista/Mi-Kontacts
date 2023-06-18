import { useState } from "react";
import { TbSearch } from "react-icons/tb";
import "./searchbox.scss";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  return (
    <div className="search-box">
      <span className="search-box__icon">
        <TbSearch />
      </span>
      <input
        className="search-box__input"
        type="search"
        placeholder="search contacts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
