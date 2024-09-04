import React from "react";
import { render, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  const renderNavbar = () => render(
    <Router>
      <Navbar />
    </Router>
  );

  test("renders Navbar with correct heading and links", () => {
    renderNavbar();

    expect(screen.getByText(/Foodie Delight/i)).toBeInTheDocument();

    // Check if the 'Admin Panel' link is rendered
    const adminPanelLink = screen.getByText(/Admin Panel/i);
    expect(adminPanelLink).toBeInTheDocument();
    expect(adminPanelLink.closest('a')).toHaveAttribute('href', '/');

    // Check if the 'Add New Restaurant' link is rendered
    const addNewRestaurantLink = screen.getByText(/Add New Restaurant/i);
    expect(addNewRestaurantLink).toBeInTheDocument();
    expect(addNewRestaurantLink.closest('a')).toHaveAttribute('href', '/add');
  });
});
