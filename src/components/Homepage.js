// src/components/Homepage.js
import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"; // Make sure to include your CSS file if you have custom styles

const Homepage = () => {
  return (
    <div className="homepage d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#0B0C10" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
                  to="/leaderboard"
                  style={{ color: "#C5C6C7" }}
                >
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="hero-section text-center flex-grow-1"
        style={{ backgroundColor: "#1F2833", color: "#C5C6C7" }}
      >
        <div className="container-fluid py-5">
          <h1 style={{ color: "#66FCF1" }}>Welcome to Fitoria</h1>
          <p className="lead">
            Track your fitness journey, log exercises, and stay motivated!
          </p>
          <Link
            to="/register"
            className="btn btn-lg"
            style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div
        className="features-section py-5 flex-grow-1"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container-fluid">
          <h2 className="text-center" style={{ color: "#0B0C10" }}>
            Features
          </h2>
          <div className="row mt-4 justify-content-center">
            <div className="col-md-4 mb-4 d-flex">
              <div
                className="card text-center flex-fill"
                style={{ borderColor: "#45A29E" }}
              >
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#45A29E" }}>
                    Log Your Exercises
                  </h5>
                  <p className="card-text">
                    Easily log workouts and track your daily exercise routine.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex">
              <div
                className="card text-center flex-fill"
                style={{ borderColor: "#45A29E" }}
              >
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#45A29E" }}>
                    Track Your Progress
                  </h5>
                  <p className="card-text">
                    Monitor your progress with visual graphs and statistics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex">
              <div
                className="card text-center flex-fill"
                style={{ borderColor: "#45A29E" }}
              >
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#45A29E" }}>
                    Earn Rewards
                  </h5>
                  <p className="card-text">
                    Stay motivated by earning points and badges for consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="text-center py-3 mt-auto"
        style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
      >
        <p>© 2024 Fitoria. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
