import React, { useEffect, useState } from "react";
import axios from "axios";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://travel-planner-backend-h7z6.onrender.com/api/destinations/suggestions")
      .then((res) => {
        setSuggestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch suggestions:", err);
        setError("Could not load suggestions");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading suggestions...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (suggestions.length === 0) return <p>No suggestions available.</p>;

  return (
    <div
      className="mt-4 p-4 rounded shadow"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h5>🌟 Top Travel Suggestions (Cheapest First)</h5>
      <ul className="list-group mt-3">
        {suggestions.map((s) => (
          <li key={s._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{s.name} — {s.location}</span>
            <span className="badge bg-primary rounded-pill">₹{s.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;

