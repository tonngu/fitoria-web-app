// src/components/Leaderboard.js
import React from "react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const users = [
    { rank: 1, name: "Alice", points: 1500, workouts: 45 },
    { rank: 2, name: "Bob", points: 1350, workouts: 40 },
    { rank: 3, name: "Charlie", points: 1200, workouts: 38 },
    { rank: 4, name: "David", points: 1100, workouts: 35 },
    { rank: 5, name: "Eve", points: 1000, workouts: 30 },
  ];

  return (
    <div
      className="leaderboard-container d-flex flex-column min-vh-100"
      style={{ background: "linear-gradient(to right, #1F2833, #0B0C10)" }}
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

      {/* Leaderboard Content */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ color: "#66FCF1" }}>
          Leaderboard
        </h2>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Points</th>
              <th scope="col">Workouts Completed</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.rank}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.points}</td>
                <td>{user.workouts}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Leaderboard;
