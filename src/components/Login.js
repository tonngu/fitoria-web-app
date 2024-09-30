import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to login API
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        credentials
      );

      // Save user data to local storage for persistence
      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("username", response.data.username);

      // Redirect to dashboard on successful login
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-page d-flex flex-column min-vh-100">
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

      {/* Login Form */}
      <div
        className="login-form flex-grow-1 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#1F2833" }}
      >
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#C5C6C7" }}>
            Login to Your Account
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
                    value={credentials.username}
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
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
                >
                  Login
                </button>
              </form>

              {/* Error Message */}
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

export default Login;
