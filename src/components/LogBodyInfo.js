import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogBodyInfo = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyFatPercentage, setBodyFatPercentage] = useState("");
  const [date, setDate] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    // Ensure all required fields are filled
    if (!height || !weight || !date) {
      setErrorMessage("Height, Weight, and Date are required fields.");
      return;
    }

    try {
      // Send POST request to backend to save the body info
      await axios.post(`http://localhost:8080/api/body-info/user/${userId}`, {
        height: parseFloat(height),
        weight: parseFloat(weight),
        bodyFatPercentage: bodyFatPercentage
          ? parseFloat(bodyFatPercentage)
          : null,
        date: date,
      });

      // Show confirmation message
      setConfirmationMessage("Body Info saved successfully!");
      setErrorMessage("");

      // Clear the form
      setHeight("");
      setWeight("");
      setBodyFatPercentage("");
      setDate("");
    } catch (error) {
      setErrorMessage("Failed to save body info.");
      setConfirmationMessage("");
    }
  };

  return (
    <div className="log-body-info-page d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#0B0C10" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Fitoria
          </a>
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
        style={{ backgroundColor: "#1F2833", padding: "20px" }}
      >
        <div className="col-md-6">
          <h2 className="text-center" style={{ color: "#66FCF1" }}>
            Log Your Body Info
          </h2>

          {/* Body Info Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="height"
                className="form-label"
                style={{ color: "#C5C6C7" }}
              >
                Height (cm)
              </label>
              <input
                type="number"
                className="form-control"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="weight"
                className="form-label"
                style={{ color: "#C5C6C7" }}
              >
                Weight (kg)
              </label>
              <input
                type="number"
                className="form-control"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="bodyFatPercentage"
                className="form-label"
                style={{ color: "#C5C6C7" }}
              >
                Body Fat Percentage (%)
              </label>
              <input
                type="number"
                className="form-control"
                id="bodyFatPercentage"
                value={bodyFatPercentage}
                onChange={(e) => setBodyFatPercentage(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="date"
                className="form-label"
                style={{ color: "#C5C6C7" }}
              >
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-lg btn-block mb-3"
              style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
            >
              Save Body Info
            </button>

            {/* Confirmation & Error Messages */}
            {confirmationMessage && (
              <p className="text-success mt-3">{confirmationMessage}</p>
            )}
            {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="text-center py-3"
        style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
      >
        <p>© 2024 Fitoria. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LogBodyInfo;
