import React, { useEffect, useState } from "react";
import axios from "axios";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios
      .get("https://travel-planner-backend-h7z6.onrender.com/api/destinations")
      .then((res) => setSuggestions(res.data.slice(0, 3)))
      .catch(() => console.error("Failed to fetch suggestions"));
  }, []);

  return (
    <div className="mt-4">
      <h5>🌟 Top Suggestions</h5>
      <ul>
        {suggestions.map((s) => (
          <li key={s._id}>
            {s.name} — ₹{s.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
