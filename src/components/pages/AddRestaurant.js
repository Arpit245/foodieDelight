import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddRestaurant = () => {
  const navigate = useNavigate();
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    description: "",
    location: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    location: "",
  });

  const { name, description, location } = newRestaurant;

  const onInputChange = e => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validateForm = () => {
    const newErrors = { name: "", description: "", location: "" };

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!location.trim()) newErrors.location = "Location is required.";

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (validateForm()) {
      await axios.post("http://localhost:3003/restaurantDetail", newRestaurant); 
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New Restaurant</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Enter Restaurant Name"
              name="name"
              value={name}
              onChange={onInputChange}
              required
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className={`form-control form-control-lg ${errors.description ? 'is-invalid' : ''}`}
              placeholder="Enter Description"
              name="description"
              value={description}
              onChange={onInputChange}
              required
            />
            {errors.description && <div className="invalid-feedback">{errors.description}</div>}
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className={`form-control form-control-lg ${errors.location ? 'is-invalid' : ''}`}
              placeholder="Enter Location"
              name="location"
              value={location}
              onChange={onInputChange}
              required
            />
            {errors.location && <div className="invalid-feedback">{errors.location}</div>}
          </div>
          <button type="submit" className="btn btn-primary btn-block">Add Restaurant</button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
