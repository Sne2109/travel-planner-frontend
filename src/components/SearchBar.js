import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search by name, location, or description..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;

