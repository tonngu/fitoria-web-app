// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import WorkoutHistory from "./components/WorkoutHistory"; // Import the workout history component
import Login from "./components/Login";
import LogWorkout from "./components/LogWorkout";
import LogGoal from "./components/LogGoal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/view-history" element={<WorkoutHistory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/log-workout" element={<LogWorkout />} />
        <Route path="/log-goal" element={<LogGoal />} />
      </Routes>
    </Router>
  );
};

export default App;
