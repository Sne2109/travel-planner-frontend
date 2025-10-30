import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  return (
    <div className="mb-3">
      <div className="row g-2">
        <div className="col">
          <input
            type="number"
            placeholder="Min Price"
            className="form-control"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="number"
            placeholder="Max Price"
            className="form-control"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => onFilter({ minPrice: min, maxPrice: max })}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

