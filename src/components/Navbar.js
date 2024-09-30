// src/components/Navbar.js

//THIS IS CURRENTLY NOT IN USE
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#0B0C10" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "#66FCF1" }}>
          Fitoria
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/register"
                style={{ color: "#C5C6C7" }}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                style={{ color: "#C5C6C7" }}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/dashboard"
                style={{ color: "#C5C6C7" }}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/profile"
                style={{ color: "#C5C6C7" }}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
