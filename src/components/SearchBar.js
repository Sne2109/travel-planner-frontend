import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Search destination..."
        className="form-control"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-secondary mt-2" onClick={() => onSearch(query)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;



