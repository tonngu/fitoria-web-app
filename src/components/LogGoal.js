import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogGoal = () => {
  const [goalData, setGoalData] = useState({
    description: "",
    targetDate: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setGoalData({ ...goalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      await axios.post(
        `http://localhost:8080/api/goals/user/${userId}`,
        goalData
      );
      setSuccessMessage("Goal set successfully!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to set goal.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="log-goal-page d-flex flex-column min-vh-100">
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
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#1F2833", padding: "0 20px" }}
      >
        <div className="col-md-6">
          <h2 className="text-center" style={{ color: "#D3D3D3" }}>
            Set Your Goal
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#C5C6C7" }}>
                Goal Description
              </label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={goalData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ color: "#C5C6C7" }}>
                Target Date
              </label>
              <input
                type="date"
                className="form-control"
                name="targetDate"
                value={goalData.targetDate}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-lg"
              style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
            >
              Set Goal
            </button>
          </form>

          {successMessage && (
            <p className="mt-3 text-success">{successMessage}</p>
          )}
          {errorMessage && <p className="mt-3 text-danger">{errorMessage}</p>}
        </div>
      </div>

      <footer
        className="text-center py-3"
        style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
      >
        <p>© 2024 Fitoria. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LogGoal;
