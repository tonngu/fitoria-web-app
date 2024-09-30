import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogWorkout = () => {
  const [workoutType, setWorkoutType] = useState("strength"); // Toggle between strength and endurance
  const [workoutData, setWorkoutData] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
    distance: "",
    duration: "",
    date: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Separate exercise options for strength and endurance
  const strengthExercises = [
    "Bench Press",
    "Squats",
    "Deadlifts",
    "Overhead Press",
  ];
  const enduranceExercises = ["Running", "Cycling", "Swimming", "Rowing"];

  const handleChange = (e) => {
    setWorkoutData({ ...workoutData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      await axios.post(
        `http://localhost:8080/api/workouts/user/${userId}`,
        workoutData
      );
      setSuccessMessage("Workout logged successfully!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to log workout.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="log-workout-page d-flex flex-column min-vh-100">
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
            Log Your Workout
          </h2>

          {/* Toggle between Strength and Endurance */}
          <div className="form-group mb-3">
            <label style={{ color: "#C5C6C7" }}>Workout Type:</label>
            <select
              className="form-control"
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
            >
              <option value="strength">Strength Training</option>
              <option value="endurance">Endurance Training</option>
            </select>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Strength Training Exercise Dropdown */}
            {workoutType === "strength" && (
              <div className="mb-3">
                <label className="form-label" style={{ color: "#C5C6C7" }}>
                  Exercise
                </label>
                <select
                  className="form-control"
                  name="exercise"
                  value={workoutData.exercise}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Exercise</option>
                  {strengthExercises.map((exercise, index) => (
                    <option key={index} value={exercise}>
                      {exercise}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Endurance Training Exercise Dropdown */}
            {workoutType === "endurance" && (
              <div className="mb-3">
                <label className="form-label" style={{ color: "#C5C6C7" }}>
                  Exercise
                </label>
                <select
                  className="form-control"
                  name="exercise"
                  value={workoutData.exercise}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Exercise</option>
                  {enduranceExercises.map((exercise, index) => (
                    <option key={index} value={exercise}>
                      {exercise}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Strength Training Form */}
            {workoutType === "strength" && (
              <>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#C5C6C7" }}>
                    Sets
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="sets"
                    value={workoutData.sets}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#C5C6C7" }}>
                    Reps
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="reps"
                    value={workoutData.reps}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#C5C6C7" }}>
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="weight"
                    value={workoutData.weight}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            {/* Endurance Training Form */}
            {workoutType === "endurance" && (
              <>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#C5C6C7" }}>
                    Distance (km)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="distance"
                    value={workoutData.distance}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#C5C6C7" }}>
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="duration"
                    value={workoutData.duration}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            {/* Common Date Field */}
            <div className="mb-3">
              <label className="form-label" style={{ color: "#C5C6C7" }}>
                Date
              </label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={workoutData.date}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-lg"
              style={{ backgroundColor: "#45A29E", color: "#0B0C10" }}
            >
              Log Workout
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

export default LogWorkout;
