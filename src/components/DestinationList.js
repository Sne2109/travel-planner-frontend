import React from "react";

const DestinationList = ({ destinations }) => {
  if (destinations.length === 0)
    return <p className="text-center text-muted">No destinations available.</p>;

  return (
    <div>
      <h4 className="mb-3">Available Destinations</h4>
      <ul className="list-group">
        {destinations.map((d) => (
          <li key={d._id} className="list-group-item">
            {d.name} — {d.location} — ₹{d.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationList;

