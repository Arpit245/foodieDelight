import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditRestaurant = () => {
  let navigate = useNavigate(); 
  const { id } = useParams(); // Get restaurant ID from URL
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    location: "",
  });

  const { name, description, location } = restaurant;

  useEffect(() => {
    loadRestaurant();
  }, [id]); // Add id to dependency array

  const onInputChange = e => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/restaurantDetail/${id}`, restaurant);
    navigate("/"); // navigate to home when request is successfull
  };

  const loadRestaurant = async () => {
    const result = await axios.get(`http://localhost:3003/restaurantDetail/${id}`);
    setRestaurant(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Restaurant</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Restaurant Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Location"
              name="location"
              value={location}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block mt-4">Update Restaurant</button>
        </form>
      </div>
    </div>
  );
};

export default EditRestaurant;
