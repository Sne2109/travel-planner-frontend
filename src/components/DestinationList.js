import React from "react";

const DestinationList = ({ destinations }) => {
  if (!destinations || destinations.length === 0)
    return <p className="text-center text-muted">No destinations found.</p>;

  return (
    <div className="row">
      {destinations.map((d) => (
        <div className="col-md-4 mb-4" key={d._id}>
          <div className="card shadow-sm h-100 border-0">
            {d.image ? (
              <img
                src={`https://travel-planner-backend-h7z6.onrender.com${d.image}`}
                className="card-img-top"
                alt={d.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
            ) : (
              <div
                className="d-flex align-items-center justify-content-center bg-light"
                style={{ height: "200px" }}
              >
                <span className="text-muted">No Image Available</span>
              </div>
            )}

            <div className="card-body">
              <h5 className="card-title">{d.name}</h5>
              <p className="card-text text-secondary mb-1">{d.location}</p>
              <p className="card-text small">{d.description}</p>
              <p className="mb-1">
                <strong>Price:</strong> ₹{d.price}
              </p>
              <p>
                <strong>Duration:</strong> {d.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;

