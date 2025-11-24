import React, { useEffect, useState } from "react";
// import "../styl/pollution.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

function Pollution() {
  const [pollutionData, setPollutionData] = useState(null);

  useEffect(() => {
    // -------------------------
    //  DUMMY STATIC DATA
    // -------------------------
    const dummyData = {
      city: "Delhi",
      aqi: 145,
      humidity: 62,
      temp: 29,
      stats: [
        { name: "PM2.5", value: 95 },
        { name: "PM10", value: 120 },
        { name: "NO2", value: 60 },
        { name: "SO2", value: 30 },
        { name: "Ozone", value: 80 },
      ],
    };

    setPollutionData(dummyData);
  }, []);

  if (!pollutionData)
    return <div className="pollution-loader">Loading Pollution Data...</div>;

  return (
    <div className="pollution-container">
      <h1 className="pollution-title">Air Pollution Statistics</h1>

      {/* Summary Cards */}
      <div className="pollution-cards">
        <div className="pollution-card">
          <h3>City</h3>
          <p>{pollutionData.city}</p>
        </div>

        <div className="pollution-card">
          <h3>AQI Level</h3>
          <p>{pollutionData.aqi}</p>
        </div>

        <div className="pollution-card">
          <h3>Humidity</h3>
          <p>{pollutionData.humidity}%</p>
        </div>

        <div className="pollution-card">
          <h3>Temperature</h3>
          <p>{pollutionData.temp}°C</p>
        </div>
      </div>

      {/* BAR CHART */}
      <div className="chart-box">
        <h2>Pollutant Levels</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={pollutionData.stats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="value" fill="#667eea" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* LINE CHART */}
      <div className="chart-box">
        <h2>Humidity Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={[
              { day: "Mon", humid: pollutionData.humidity - 10 },
              { day: "Tue", humid: pollutionData.humidity - 5 },
              { day: "Wed", humid: pollutionData.humidity },
              { day: "Thu", humid: pollutionData.humidity + 4 },
              { day: "Fri", humid: pollutionData.humidity - 2 },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="humid" stroke="#764ba2" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Pollution;
