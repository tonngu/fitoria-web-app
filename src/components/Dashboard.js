import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    userId: "",
  });

  useEffect(() => {
    // Fetch user information from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedUserId = localStorage.getItem("userId");
    if (storedUsername && storedUserId) {
      setUserInfo({ username: storedUsername, userId: storedUserId });
    }
  }, []);

  return (
    <div className="dashboard d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#0B0C10" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Fitoria
          </a>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mt-5">
        <h2>Welcome back, {userInfo.username}!</h2>
        <p>Your User ID: {userInfo.userId}</p>

        {/* Navigation Buttons */}
        <div className="mt-4">
          <Link
            to="/log-workout"
            className="btn btn-lg"
            style={{
              backgroundColor: "#45A29E",
              color: "#0B0C10",
              marginRight: "15px",
            }}
          >
            Log Workout
          </Link>
          <Link
            to="/log-goal"
            className="btn btn-lg"
            style={{
              backgroundColor: "#45A29E",
              color: "#0B0C10",
              marginRight: "15px",
            }}
          >
            Log Goal
          </Link>
          <Link
            to="/view-history"
            className="btn btn-lg"
            style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
          >
            View History
          </Link>
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

export default Dashboard;
