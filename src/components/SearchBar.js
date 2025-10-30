import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [duration, setDuration] = useState("");

  const handleApply = () => onFilter({ minPrice, maxPrice, duration });

  return (
    <div className="mb-3">
      <h5>Filter</h5>
      <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="form-control mb-2" />
      <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="form-control mb-2" />
      <input type="text" placeholder="Duration (e.g. 3 days)" value={duration} onChange={(e) => setDuration(e.target.value)} className="form-control mb-2" />
      <button onClick={handleApply} className="btn btn-secondary">Apply Filter</button>
    </div>
  );
};

export default Filter;


