import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the registration API
      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        formData
      );
      setSuccessMessage("User registered successfully!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to register user. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="registration-page d-flex flex-column min-vh-100">
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
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Registration Form */}
      <div
        className="registration-form flex-grow-1 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#1F2833" }}
      >
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#C5C6C7" }}>
            Create Your Account
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="username"
                    className="form-label"
                    style={{ color: "#C5C6C7" }}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ color: "#C5C6C7" }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ color: "#C5C6C7" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
                >
                  Register
                </button>
              </form>

              {/* Success and Error Messages */}
              {successMessage && (
                <p className="mt-3 text-success">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="mt-3 text-danger">{errorMessage}</p>
              )}
            </div>
          </div>
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

export default Registration;
