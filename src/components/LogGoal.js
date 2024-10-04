import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogGoal = () => {
  const [goalData, setGoalData] = useState({
    description: "",
    targetDate: "",
  });
  const [goals, setGoals] = useState([]); // To store the list of goals
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch user information from localStorage
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      // Fetch goals for the user
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
      setErrorMessage("Failed to fetch goals.");
    }
  };

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
      fetchGoals(userId); // Refresh the goals after adding
    } catch (error) {
      setErrorMessage("Failed to set goal.");
      setSuccessMessage("");
    }
  };

  const handleDeleteGoal = async (goalId) => {
    const userId = localStorage.getItem("userId");
    try {
      await axios.delete(`http://localhost:8080/api/goals/${goalId}`);
      fetchGoals(userId); // Refresh the goals after deletion
    } catch (error) {
      setErrorMessage("Failed to delete goal.");
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

          {/* Display Goals */}
          <div className="mt-5">
            <h3 className="text-center" style={{ color: "#D3D3D3" }}>
              Your Upcoming Goals (Next 2 Weeks)
            </h3>
            {goals.length > 0 ? (
              <ul className="list-group mt-3">
                {goals.map((goal) => (
                  <li
                    key={goal.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                    style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
                  >
                    <span>
                      <strong>ID:</strong> {goal.id} -{" "}
                      <strong>{goal.description}</strong> - Target Date:{" "}
                      {new Date(goal.targetDate).toLocaleDateString()}
                    </span>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteGoal(goal.id)}
                    >
                      Delete
                    </button>
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

export default LogGoal;
