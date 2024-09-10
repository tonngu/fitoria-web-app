// src/components/WorkoutHistory.js
import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WorkoutHistory = () => {
  const data = [
    { date: "2023-09-01", volume: 1200 },
    { date: "2023-09-05", volume: 1500 },
    { date: "2023-09-10", volume: 1700 },
    { date: "2023-09-15", volume: 1650 },
    { date: "2023-09-20", volume: 1800 },
  ];

  return (
    <div
      className="workout-history-container d-flex flex-column min-vh-100"
      style={{ background: "linear-gradient(to right, #1F2833, #0B0C10)" }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#0B0C10" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Fitoria
          </Link>
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
            </ul>
          </div>
        </div>
      </nav>
      <div className="container flex-grow-1 py-5">
        <h2 className="text-center mb-4" style={{ color: "#66FCF1" }}>
          Workout Volume Progression
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="volume"
              stroke="#66FCF1"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <footer
        className="text-center py-3 mt-auto"
        style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
      >
        <p>© 2024 Fitoria. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default WorkoutHistory;
