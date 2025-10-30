import React, { useState } from "react";
import axios from "axios";

const AddDestination = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    price: "",
    duration: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image input
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (image) data.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post(
        "https://travel-planner-backend-h7z6.onrender.com/api/destinations",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("✅ Destination added successfully!");
      console.log("Added:", res.data);

      // Reset form after successful upload
      setFormData({
        name: "",
        location: "",
        description: "",
        price: "",
        duration: "",
      });
      setImage(null);
    } catch (err) {
      console.error("❌ Failed to add destination:", err);
      alert("Error adding destination. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mt-3">
      <h4 className="mb-3">➕ Add a New Destination</h4>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        name="duration"
        placeholder="Duration"
        value={formData.duration}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="form-control mb-3"
      />

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Add Destination"}
      </button>
    </form>
  );
};

export default AddDestination;
