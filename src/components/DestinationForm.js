import React, { useState } from "react";
import axios from "axios";

const DestinationForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: "", location: "", price: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.location || !form.price) {
      alert("Please fill all fields");
      return;
    }
    try {
      await axios.post("https://travel-planner-backend-h7z6.onrender.com/api/destinations", form);
      onAdd();
      setForm({ name: "", location: "", price: "" });
    } catch {
      alert("Failed to add destination");
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Destination Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="location"
            className="form-control"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  );
};

export default DestinationForm;
