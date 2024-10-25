import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    userId: "",
  });
  const [goals, setGoals] = useState([]); // To store the list of goals
  const [error, setError] = useState(""); // To handle errors

  useEffect(() => {
    // Fetch user information from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedUserId = localStorage.getItem("userId");
    if (storedUsername && storedUserId) {
      setUserInfo({ username: storedUsername, userId: storedUserId });
      // Fetch goals for the next two weeks
      fetchGoals(storedUserId);
    }
  }, []);

  const fetchGoals = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/goals/user/${userId}/upcoming`
      );
      setGoals(response.data); // Set the goals to state
    } catch (error) {
      setError("Failed to fetch goals.");
    }
  };

  return (
    <div className="dashboard-page d-flex flex-column min-vh-100">
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
                <Link className="nav-link" to="/log-workout">
                  Log Workout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/log-goal">
                  Log Goal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view-history">
                  View History
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
        <div className="col-md-6 text-center">
          <h2 className="mb-4" style={{ color: "#D3D3D3" }}>
            Welcome back,{" "}
            <span style={{ color: "#66FCF1" }}>{userInfo.username}</span>!
          </h2>

          {/* Quick Actions */}
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4 mb-3">
                <Link
                  to="/log-workout"
                  className="btn btn-lg w-100"
                  style={{
                    backgroundColor: "#45A29E",
                    color: "#0B0C10",
                  }}
                >
                  Log Workout
                </Link>
              </div>
              <div className="col-md-4 mb-3">
                <Link
                  to="/log-goal"
                  className="btn btn-lg w-100"
                  style={{
                    backgroundColor: "#45A29E",
                    color: "#0B0C10",
                  }}
                >
                  Log Goal
                </Link>
              </div>
              <div className="col-md-4 mb-3">
                <Link
                  to="/view-history"
                  className="btn btn-lg w-100"
                  style={{
                    backgroundColor: "#45A29E",
                    color: "#0B0C10",
                  }}
                >
                  View Workout History
                </Link>
              </div>
              <div className="col-md-4 mb-3">
                <Link
                  to="/log-body-info"
                  className="btn btn-lg w-100"
                  style={{
                    backgroundColor: "#45A29E",
                    color: "#0B0C10",
                  }}
                >
                  Log Body Info
                </Link>
              </div>
              <div className="col-md-4 mb-3">
                <Link
                  to="/view-body-info-history"
                  className="btn btn-lg w-100"
                  style={{
                    backgroundColor: "#45A29E",
                    color: "#0B0C10",
                  }}
                >
                  View Body Info History
                </Link>
              </div>
              <div className="col-md-4 mb-3">
                <Link
                  to="/training-advice"
                  className="btn btn-lg w-100"
                  style={{
                    backgroundColor: "#45A29E",
                    color: "#0B0C10",
                  }}
                >
                  AI Trainer
                </Link>
              </div>
            </div>
          </div>

          {/* Display Goals */}
          <div className="mt-5">
            <h3 className="text-center" style={{ color: "#D3D3D3" }}>
              Upcoming Goals (Next 2 Weeks)
            </h3>
            {error && <p className="text-danger">{error}</p>}
            {goals.length > 0 ? (
              <ul className="list-group mt-3">
                {goals.map((goal) => (
                  <li
                    key={goal.id}
                    className="list-group-item"
                    style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
                  >
                    <strong>{goal.description}</strong> - Target Date:{" "}
                    {new Date(goal.targetDate).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center" style={{ color: "#C5C6C7" }}>
                No upcoming goals.
              </p>
            )}
          </div>
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

export default Dashboard;
