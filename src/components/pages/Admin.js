import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const [newRestaurant, setNewRestaurant] = useState([]);

  useEffect(() => {
    loadRestaurant();
  }, []);

  const loadRestaurant = async () => {
    const result = await axios.get("http://localhost:3003/restaurantDetail");
    setNewRestaurant(result.data.reverse());
  };

  const deleteRestaurant = async id => {
    await axios.delete(`http://localhost:3003/restaurantDetail/${id}`); // Ensure correct endpoint
    loadRestaurant();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Restaurant List</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newRestaurant.map((restaurant, index) => (
              <tr key={restaurant.id}>
                <th scope="row">{index + 1}</th>
                <td>{restaurant.name}</td>
                <td>{restaurant.description}</td>
                <td>{restaurant.location}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary me-2" // Bootstrap class for margin-end
                    to={`/restaurants/edit/${restaurant.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteRestaurant(restaurant.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
