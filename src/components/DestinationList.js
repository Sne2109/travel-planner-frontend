import React from "react";

const DestinationList = ({ destinations }) => {
  if (destinations.length === 0) return <p>No destinations found.</p>;

  return (
    <div className="row">
      {destinations.map((d) => (
        <div className="col-md-4 mb-3" key={d._id}>
          <div className="card shadow-sm">
            {d.image && <img src={`https://travel-planner-backend-h7z6.onrender.com ${d.image}`} className="card-img-top" alt={d.name} />}
            <div className="card-body">
              <h5>{d.name}</h5>
              <p>{d.location}</p>
              <p>{d.description}</p>
              <p><strong>Price:</strong> ₹{d.price}</p>
              <p><strong>Duration:</strong> {d.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;
