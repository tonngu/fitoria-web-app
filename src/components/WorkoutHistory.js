import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

const ViewHistory = () => {
  const [selectedExercise, setSelectedExercise] = useState("Bench Press"); // Default exercise
  const [timeFrame, setTimeFrame] = useState("3-weeks"); // Default time frame
  const [exerciseData, setExerciseData] = useState([]); // To store exercise history
  const [exerciseType, setExerciseType] = useState("strength"); // Default exercise type
  const [errorMessage, setErrorMessage] = useState("");

  const exercises = [
    "Bench Press",
    "Squats",
    "Deadlifts",
    "Running",
    "Cycling",
  ]; // Same exercise list as in LogWorkout

  // Determine if the selected exercise is strength or endurance
  useEffect(() => {
    if (["Running", "Cycling"].includes(selectedExercise)) {
      setExerciseType("endurance");
    } else {
      setExerciseType("strength");
    }
  }, [selectedExercise]);

  // Fetch exercise history based on selected exercise and time frame
  const fetchExerciseHistory = async () => {
    const userId = localStorage.getItem("userId");
    let apiUrl = `http://localhost:8080/api/workouts/user/${userId}/exercise/${selectedExercise}`;

    switch (timeFrame) {
      case "3-weeks":
        apiUrl += "/past-three-weeks";
        break;
      case "2-months":
        apiUrl += "/past-two-months";
        break;
      case "6-months":
        apiUrl += "/past-six-months";
        break;
      case "1-year":
        apiUrl += "/past-year";
        break;
      default:
        apiUrl += "/past-three-weeks"; // Default to 3 weeks if no time frame is selected
    }

    try {
      const response = await axios.get(apiUrl);
      const data = response.data.map((session) => ({
        date: new Date(session.date).toLocaleDateString(),
        volume:
          exerciseType === "strength"
            ? session.reps * session.sets * session.weight // Volume for strength
            : null, // Volume is null for endurance exercises
        duration: exerciseType === "endurance" ? session.duration : null, // Duration for endurance
        distance: exerciseType === "endurance" ? session.distance : null, // Distance for endurance
      }));
      setExerciseData(data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to fetch workout history.");
    }
  };

  useEffect(() => {
    fetchExerciseHistory();
  }, [selectedExercise, timeFrame]);

  return (
    <div className="view-history-page d-flex flex-column min-vh-100">
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
        <div className="col-md-8">
          <h2 className="text-center" style={{ color: "#D3D3D3" }}>
            Workout History
          </h2>

          {/* Exercise Dropdown */}
          <div className="form-group mb-3">
            <label style={{ color: "#C5C6C7" }}>Select Exercise:</label>
            <select
              className="form-control"
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
            >
              {exercises.map((exercise, index) => (
                <option key={index} value={exercise}>
                  {exercise}
                </option>
              ))}
            </select>
          </div>

          {/* Time Frame Toggle */}
          <div className="form-group mb-3">
            <label style={{ color: "#C5C6C7" }}>Select Time Frame:</label>
            <select
              className="form-control"
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
            >
              <option value="3-weeks">Past 3 Weeks</option>
              <option value="2-months">Past 2 Months</option>
              <option value="6-months">Past 6 Months</option>
              <option value="1-year">Past 1 Year</option>
            </select>
          </div>

          {/* Graph Section */}
          <div
            style={{
              backgroundColor: "#0B0C10",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            {exerciseData.length > 0 ? (
              exerciseType === "strength" ? (
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={exerciseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    {/* Line chart for strength exercises */}
                    <Line
                      type="monotone"
                      dataKey="volume" // Plots the volume for strength exercises
                      stroke="#66FCF1"
                      strokeWidth={2}
                      dot={{ fill: "#66FCF1" }} // Optional styling for line chart points
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={exerciseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="duration"
                      stroke="#66FCF1"
                      name="Duration (min)"
                    />
                    <Line
                      type="monotone"
                      dataKey="distance"
                      stroke="#45A29E"
                      name="Distance (km)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              )
            ) : (
              <p style={{ color: "#C5C6C7" }}>
                No workout data available for this time frame.
              </p>
            )}
          </div>

          {errorMessage && <p className="text-danger">{errorMessage}</p>}
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

export default ViewHistory;
