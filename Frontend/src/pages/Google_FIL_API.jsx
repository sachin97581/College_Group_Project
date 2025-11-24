// import React from 'react'

// function Google_FIL_API() {
//   return (
//     <div>Google_FIL_API</div>
//   )
// }

import React, { useState } from "react";

function Google_FIL_API() {
  const [stepsData, setStepsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Connect Google Fit (redirect to backend)
  const handleConnectGoogleFit = () => {
    window.location.href = "http://localhost:3000/patients/auth";
  };

  // Fetch Google Fit step data
  const fetchFitnessData = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:3000/patients/fitness-data/steps");
      const data = await res.json();

      // Defensive checks
      if (!data.bucket || data.bucket.length === 0) {
        setError("No fitness data found. Please open Google Fit on your phone to sync steps.");
        setStepsData([]);
        setLoading(false);
        return;
      }

      // Format data for display
      const formatted = data.bucket.map((bucket) => {
        const date = new Date(Number(bucket.startTimeMillis)).toLocaleDateString();
        const dataset = bucket.dataset[0];
        const points = dataset.point || [];
        const steps = points.reduce(
          (sum, p) => sum + (p.value[0]?.intVal || 0),
          0
        );
        return { date, steps };
      });

      setStepsData(formatted);
    } catch (err) {
      console.error("Error fetching fitness data:", err);
      setError("Error fetching fitness data. Check backend or API permissions.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>🏃 Google Fit Steps Tracker</h1>

      {/* Connect Button */}
      <button
        onClick={handleConnectGoogleFit}
        style={{
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Connect Google Fit
      </button>

      {/* Fetch Data Button */}
      <button
        onClick={fetchFitnessData}
        style={{
          backgroundColor: "#34A853",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Fetch Steps Data
      </button>

      {/* Loading / Error / Data Output */}
      <div style={{ marginTop: "30px" }}>
        {loading && <p>⏳ Fetching your Google Fit data...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && stepsData.length > 0 && (
          <div>
            <h3>📅 Last 7 Days Step Data</h3>
            <table
              style={{
                margin: "0 auto",
                borderCollapse: "collapse",
                minWidth: "300px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f0f0f0" }}>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>Date</th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>Steps</th>
                </tr>
              </thead>
              <tbody>
                {stepsData.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.date}</td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.steps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && !error && stepsData.length === 0 && (
          <p style={{ color: "#555" }}>Click “Fetch Steps Data” to see your daily step counts.</p>
        )}
      </div>
    </div>
  );
}

// export default App;
export default Google_FIL_API

