import React, { useEffect, useState } from "react";
import axios from "axios";
import DestinationForm from "./components/DestinationForm";
import DestinationList from "./components/DestinationList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Suggestions from "./components/Suggestions";
import Spinner from "./components/spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // ✅ Ensure you import your CSS

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDestinations = async (params = {}) => {
    setLoading(true);
    try {
      const res = await axios.get("https://travel-planner-backend-h7z6.onrender.com/api/destinations", { params });
      setDestinations(res.data);
    } catch {
      alert("Failed to fetch destinations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <div className="app-container">
      <div className="overlay"></div>

      <div className="content-container animate-fade">
        <h2 className="text-center heading mb-4">🌍 Travel Planner</h2>
        <DestinationForm onAdd={() => fetchDestinations()} />
        <SearchBar onSearch={(q) => fetchDestinations({ search: q })} />
        <Filter onFilter={(f) => fetchDestinations(f)} />
        <Suggestions />
        {loading ? <Spinner /> : <DestinationList destinations={destinations} />}
      </div>
    </div>
  );
};

export default App;
