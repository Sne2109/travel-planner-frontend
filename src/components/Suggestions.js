import React, { useEffect, useState } from "react";
import axios from "axios";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get("https://travel-planner-backend-1.onrender.com/api/destinations/suggestions")
      .then((res) => setSuggestions(res.data))
      .catch(() => console.error("Failed to fetch suggestions"));
  }, []);

  return (
    <div>
      <h5>Top Suggestions (Cheapest)</h5>
      <ul>
        {suggestions.map((s) => (
          <li key={s._id}>{s.name} — ₹{s.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;

