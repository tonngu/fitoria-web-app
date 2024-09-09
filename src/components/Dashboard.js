// src/components/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      className="dashboard d-flex flex-column min-vh-100"
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
                  to="/profile"
                  style={{ color: "#C5C6C7" }}
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: "#C5C6C7" }}>
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
          Welcome back, [Username]!
        </h1>

        {/* Activity Overview */}
        <div className="row mt-4">
          <div className="col-md-6">
            <div
              className="card"
              style={{
                backgroundColor: "#0B0C10",
                color: "#C5C6C7",
                borderColor: "#45A29E",
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#66FCF1" }}>
                  Past Activity
                </h5>
                <p className="card-text">
                  Summary of activities for the past few days.
                </p>
                {/* Include a chart or table here */}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card"
              style={{
                backgroundColor: "#0B0C10",
                color: "#C5C6C7",
                borderColor: "#45A29E",
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#66FCF1" }}>
                  Today's Goals
                </h5>
                <p className="card-text">What you need to achieve today.</p>
                {/* Include a list or checklist of today's goals */}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div
              className="card"
              style={{
                backgroundColor: "#0B0C10",
                color: "#C5C6C7",
                borderColor: "#45A29E",
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#66FCF1" }}>
                  Quick Actions
                </h5>
                <div className="d-grid gap-2">
                  <Link
                    to="/log-workout"
                    className="btn btn-lg"
                    style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
                  >
                    Log New Workout
                  </Link>
                  <Link
                    to="/view-history"
                    className="btn btn-lg"
                    style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
                  >
                    View Workout History
                  </Link>
                  <Link
                    to="/set-goals"
                    className="btn btn-lg"
                    style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
                  >
                    Set New Goals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Section */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#0B0C10",
                color: "#C5C6C7",
                borderColor: "#45A29E",
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#66FCF1" }}>
                  Motivational Quote
                </h5>
                <p className="card-text">
                  "The only bad workout is the one that didn't happen."
                </p>
              </div>
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

export default Dashboard;
