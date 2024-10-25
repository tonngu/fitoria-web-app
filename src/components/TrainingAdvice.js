import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TrainingAdvice = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [bodyInfo, setBodyInfo] = useState([]);

  // Fetch user's workout history and body info from backend
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");

      try {
        // Fetch all workouts from the past 3 weeks
        const workoutResponse = await axios.get(
          `http://localhost:8080/api/workouts/user/${userId}/past-three-weeks`
        );
        setWorkoutHistory(workoutResponse.data);

        // Fetch body info (past 3 weeks as an example)
        const bodyInfoResponse = await axios.get(
          `http://localhost:8080/api/body-info/user/${userId}/past-three-weeks`
        );
        setBodyInfo(bodyInfoResponse.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setErrorMessage("Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, []);

  // Generate a summary for OpenAI prompt
  const generateUserDataSummary = () => {
    const workoutSummary = workoutHistory
      .map(
        (workout) =>
          `${workout.exercise}: ${workout.sets} sets, ${workout.reps} reps at ${workout.weight} kg on ${workout.date}`
      )
      .join("; ");

    const bodyInfoSummary = bodyInfo
      .map(
        (info) =>
          `Weight: ${info.weight} kg, Body Fat: ${
            info.bodyFatPercentage || "N/A"
          }% on ${info.date}`
      )
      .join("; ");

    console.log("Workout Summary:", workoutSummary);
    console.log("Body Info Summary:", bodyInfoSummary);

    return {
      workoutSummary,
      bodyInfoSummary,
    };
  };

  // Function to get training advice from OpenAI
  const getTrainingAdvice = async () => {
    setLoading(true);
    setErrorMessage("");

    const { workoutSummary, bodyInfoSummary } = generateUserDataSummary();
    const prompt = `Here is the user's recent workout history: ${workoutSummary}. Their body info: ${bodyInfoSummary}. What training should they do next?`;

    // Log the generated prompt
    console.log("Generated Prompt for OpenAI API:", prompt);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo", // Use gpt-3.5-turbo model
          messages: [
            {
              role: "system",
              content: "You are a helpful training assistant.",
            },
            { role: "user", content: prompt }, // User input prompt goes here
          ],
          max_tokens: 450,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_API_KEY`, // Replace YOUR_API_KEY with your OpenAI API key
          },
        }
      );

      // Store the response
      setAdvice(response.data.choices[0].message.content);
    } catch (error) {
      setErrorMessage("Failed to get training advice.");
    }
  };

  return (
    <div className="training-advice-page d-flex flex-column min-vh-100">
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
        style={{ backgroundColor: "#1F2833", padding: "20px" }}
      >
        <div className="col-md-8">
          <h2 className="text-center" style={{ color: "#66FCF1" }}>
            AI Training Advice
          </h2>

          <button
            onClick={getTrainingAdvice}
            className="btn btn-lg mb-3"
            style={{
              backgroundColor: "#45A29E",
              color: "#0B0C10",
              marginBottom: "20px",
            }}
            disabled={loading}
          >
            Get Training Advice
          </button>

          {loading && <p style={{ color: "#C5C6C7" }}>Loading...</p>}
          {advice && (
            <p style={{ color: "#C5C6C7", whiteSpace: "pre-wrap" }}>{advice}</p>
          )}
          {errorMessage && (
            <p className="text-danger text-center">{errorMessage}</p>
          )}
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

export default TrainingAdvice;
