import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ViewBodyInfoHistory = () => {
  const [timeFrame, setTimeFrame] = useState("3-weeks"); // Default time frame
  const [bodyInfoData, setBodyInfoData] = useState([]); // To store body info history
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch body info history based on the selected time frame
  const fetchBodyInfoHistory = async () => {
    const userId = localStorage.getItem("userId");
    let apiUrl = `http://localhost:8080/api/body-info/user/${userId}`;

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
      const data = response.data.map((log) => ({
        date: new Date(log.date).toLocaleDateString(),
        weight: log.weight,
        bodyFatPercentage: log.bodyFatPercentage,
      }));
      setBodyInfoData(data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to fetch body info history.");
    }
  };

  useEffect(() => {
    fetchBodyInfoHistory();
  }, [timeFrame]);

  return (
    <div className="view-body-info-history-page d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav
        className="navbar navbar-dark"
        style={{ backgroundColor: "#0B0C10" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Fitoria
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#1F2833", padding: "0 20px" }}
      >
        <div className="col-md-8">
          <h2 className="text-center" style={{ color: "#D3D3D3" }}>
            Body Info History
          </h2>

          {/* Time Frame Dropdown */}
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
            {bodyInfoData.length > 0 ? (
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={bodyInfoData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {/* Lines for weight and body fat percentage */}
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#66FCF1"
                    name="Weight (kg)"
                    strokeWidth={2}
                    dot={{ fill: "#66FCF1" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="bodyFatPercentage"
                    stroke="#45A29E"
                    name="Body Fat (%)"
                    strokeWidth={2}
                    dot={{ fill: "#45A29E" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p style={{ color: "#C5C6C7" }}>
                No body info data available for this time frame.
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

export default ViewBodyInfoHistory;
