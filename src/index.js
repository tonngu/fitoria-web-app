import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="container-fluid vh-100">
      {" "}
      {/* Use container-fluid and vh-100 */}
      <App />
    </div>
  </React.StrictMode>
);
