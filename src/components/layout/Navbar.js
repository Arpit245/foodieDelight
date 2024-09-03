import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="text-light mb-0">Foodie Delight</h1> {/* Heading on the left */}

        <div className="d-flex">
          <NavLink className="btn btn-outline-light me-2" exact to="/">
            Admin Panel
          </NavLink>
          <Link className="btn btn-outline-light" exact to="/add">Add User</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
