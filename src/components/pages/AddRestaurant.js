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

  const { name, description, location } = newRestaurant;

  const onInputChange = e => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/restaurantDetail", newRestaurant); // Use correct endpoint
    navigate("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New Restaurant</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Restaurant Name"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Description"
              name="description"
              value={description}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Location"
              name="location"
              value={location}
              onChange={onInputChange}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Restaurant</button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
