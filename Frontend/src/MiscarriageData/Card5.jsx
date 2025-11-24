import React from "react";
import "../MisscarriageDataCSS/Card2.css";

function Card5() {
  return (
    <div className="card-container">
      <h1 className="card-title">Indoor Environment Control</h1>
      <p className="card-subtitle">
        Controlling indoor air quality reduces exposure to pollutants and creates a safer
        environment for pregnant women.
      </p>

      <div className="card-content">
        <div className="card-box">
          <h2>Improve Indoor Air Quality</h2>
          <ul>
            <li>Use HEPA air purifiers.</li>
            <li>Open windows for ventilation.</li>
            <li>Keep the home dust-free.</li>
            <li>Avoid incense, candles, or smoke.</li>
          </ul>
        </div>

        <div className="card-box">
          <h2>Healthy Home Habits</h2>
          <ul>
            <li>Use natural cleaning products.</li>
            <li>Keep indoor plants like snake plant or aloe vera.</li>
            <li>Reduce use of fragrance sprays.</li>
            <li>Maintain humidity around 40–50%.</li>
          </ul>
        </div>

        <div className="card-box">
          <h2>Pollutants to Avoid Indoors</h2>
          <ul>
            <li>Mold & damp areas</li>
            <li>Cigarette smoke</li>
            <li>Pesticides</li>
            <li>Gas stove fumes</li>
            <li>Dust mites</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card5;
