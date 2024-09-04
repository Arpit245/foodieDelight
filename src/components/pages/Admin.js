import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantItem from "./RestaurantItem"; 
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import SearchBar from "../common/SearchBar";
import './Admin.css'

const Admin = () => {
  const [newRestaurant, setNewRestaurant] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    loadRestaurant();
  }, [newRestaurant]);

  const loadRestaurant = async () => {
    const result = await axios.get("http://localhost:3003/restaurantDetail");
    setNewRestaurant(result.data.reverse());
  };

  const deleteRestaurant = async id => {
    await axios.delete(`http://localhost:3003/restaurantDetail/${id}`);
    loadRestaurant();
  };

  const editRestaurant = (id) => {
    navigate(`/restaurants/edit/${id}`);
  };

  const filteredRestaurants = newRestaurant.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="custom-padding-top">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="mt-4">Restaurant List</h1>
        <Grid container spacing={2}>
        {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={restaurant.id}>
                <RestaurantItem
                  item={restaurant}
                  deleteItem={() => deleteRestaurant(restaurant.id)}
                  editItem={() => editRestaurant(restaurant.id)}
                />
              </Grid>
            ))
          ) : (
            <p>No restaurants found</p>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Admin;
