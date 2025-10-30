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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    if (image) data.append("image", image);

    try {
      const res = await axios.post("https://travel-planner-backend-h7z6.onrender.com/api/destinations", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Destination added successfully!");
      console.log(res.data);
    } catch (err) {
      console.error("Failed to add destination:", err);
      alert("Error adding destination.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="location" placeholder="Location" onChange={handleChange} required />
      <input name="description" placeholder="Description" onChange={handleChange} required />
      <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
      <input name="duration" placeholder="Duration" onChange={handleChange} required />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Add Destination</button>
    </form>
  );
};

export default AddDestination;
