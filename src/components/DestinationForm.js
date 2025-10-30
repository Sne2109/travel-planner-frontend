import React, { useState } from "react";
import axios from "axios";

const DestinationForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    price: "",
    duration: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    try {
      await axios.post(
        "https://travel-planner-backend-h7z6.onrender.com/api/destinations",
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("✅ Destination added successfully!");
      onAdd(); // refresh list
    } catch (err) {
      console.error("Error adding destination:", err);
      alert("❌ Failed to add destination. Check backend URL or CORS settings.");
    }
  };

  return (
    <form className="p-4 border rounded mb-4" onSubmit={handleSubmit}>
      <h3>Add Destination</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="file"
        name="image"
        onChange={handleChange}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary">
        Add Destination
      </button>
    </form>
  );
};

export default DestinationForm;
