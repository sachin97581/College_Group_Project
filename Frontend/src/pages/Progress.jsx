import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart } from "@mui/x-charts/BarChart";
import "../style/Progress.css";

// Full 9 months dataset
const fullDataset = [
  { month: "1", seoul: 50 },
  { month: "2", seoul: 60 },
  { month: "3", seoul: 70 },
  { month: "4", seoul: 80 },
  { month: "5", seoul: 90 },
  { month: "6", seoul: 100 },
  { month: "7", seoul: 110 },
  { month: "8", seoul: 120 },
  { month: "9", seoul: 130 },
];

const valueFormatter = (value) => `${value} pts`;

const chartSetting = {
  yAxis: [{ label: "Pregnancy Progress", width: 60 , color: "#ffffffff" }],
  series: [{ dataKey: "seoul", label: "Progress Points", valueFormatter }],
  height: 300,
  color: ["#ffffffff"],
  margin: { left: 70 },
};

const Progress = () => {
  const [currentMonth, setCurrentMonth] = useState("");
  const [filteredData, setFilteredData] = useState(fullDataset);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentMonth >= 1 && currentMonth <= 9) {
      const filtered = fullDataset.filter(
        (item) => Number(item.month) >= Number(currentMonth)
      );
      setFilteredData(filtered);
    } else {
      alert("Please enter a valid month (1-9)");
    }
  };

  const handleBarClick = (month) => {
    navigate(`/advice/${month}`); // Navigate to advice page
  };

  return (
    <div className="progress-container">
      <h1 className="progress-title">Progress</h1>

      {/* Form for current month */}
      <form onSubmit={handleSubmit} className="progress-form">
        <label>Enter your current pregnancy month (1-9): </label>
        <input
          type="number"
          value={currentMonth}
          onChange={(e) => setCurrentMonth(e.target.value)}
          min="1"
          max="9"
          required
        />
        <button type="submit">Show Progress</button>
      </form>

      {/* Chart */}
      <BarChart
        dataset={filteredData}
        xAxis={[{ dataKey: "month" }]}
        {...chartSetting}
        onItemClick={(event, dataPoint) => handleBarClick(dataPoint.month)}
      />
    </div>
  );
};

export default Progress;

