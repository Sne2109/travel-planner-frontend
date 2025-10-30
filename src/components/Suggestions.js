import React, { useEffect, useState } from "react";
import axios from "axios";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const res = await axios.get(
          "https://travel-planner-backend-h7z6.onrender.com/api/destinations/suggestions"
        );
        setSuggestions(res.data);
      } catch (err) {
        console.error("Failed to fetch suggestions:", err);
        setError("Could not load suggestions");
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  if (loading) return <p>Loading suggestions...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="mt-4">
      <h5 className="mb-3">🌟 Top Suggestions (Cheapest Destinations)</h5>
      {suggestions.length === 0 ? (
        <p>No suggestions available.</p>
      ) : (
        <ul className="list-group">
          {suggestions.map((s) => (
            <li key={s._id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{s.name}</span>
              <span>₹{s.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Suggestions;

