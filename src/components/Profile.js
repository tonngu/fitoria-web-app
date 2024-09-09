// src/components/Profile.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com",
    // Add more fields as needed
  });

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Profile updated:", profileData);
  };

  return (
    <div
      className="profile d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#1F2833" }}
    >
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
                  to="/dashboard"
                  style={{ color: "#C5C6C7" }}
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/logout"
                  style={{ color: "#C5C6C7" }}
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container flex-grow-1">
        <h1 className="mt-4" style={{ color: "#66FCF1" }}>
          Your Profile
        </h1>

        {/* Profile Summary */}
        <div
          className="card mt-4"
          style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
        >
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#66FCF1" }}>
              Profile Summary
            </h5>
            <div className="d-flex align-items-center">
              <img
                src="/path-to-profile-pic.jpg"
                alt="Profile"
                className="img-thumbnail"
                style={{ width: "150px", height: "150px" }}
              />
              <div className="ms-3">
                <p>
                  <strong>Username:</strong> {profileData.username}
                </p>
                <p>
                  <strong>Email:</strong> {profileData.email}
                </p>
                {/* Display other profile details here */}
              </div>
            </div>
            <button
              className="btn btn-lg mt-3"
              style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
              onClick={handleEditToggle}
            >
              {editMode ? "Cancel" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Edit Profile Form */}
        {editMode && (
          <div
            className="card mt-4"
            style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
          >
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#66FCF1" }}>
                Edit Profile
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={profileData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Add more fields as needed */}
                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Change Password */}
        <div
          className="card mt-4"
          style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
        >
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#66FCF1" }}>
              Change Password
            </h5>
            <form>
              <div className="mb-3">
                <label htmlFor="current-password" className="form-label">
                  Current Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="current-password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="new-password" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="new-password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg"
                style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
              >
                Change Password
              </button>
            </form>
          </div>
        </div>

        {/* Delete Account */}
        <div
          className="card mt-4"
          style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
        >
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#66FCF1" }}>
              Delete Account
            </h5>
            <p className="text-danger">This action is irreversible.</p>
            <button
              className="btn btn-lg"
              style={{ backgroundColor: "#E02424", color: "#0B0C10" }}
            >
              Delete My Account
            </button>
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

export default Profile;
