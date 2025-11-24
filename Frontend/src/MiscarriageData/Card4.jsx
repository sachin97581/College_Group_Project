import React from "react";
import "../MisscarriageDataCSS/Card2.css";

function Card4() {
  return (
    <div className="card-container">
      <h1 className="card-title">Targeted Nutritional Support</h1>
      <p className="card-subtitle">
        Nutrition plays an essential role in fetal development and helps protect against
        pregnancy complications.
      </p>

      <div className="card-content">
        <div className="card-box">
          <h2>Essential Nutrients for Pregnancy</h2>
          <ul>
            <li>Folic Acid – prevents birth defects</li>
            <li>Iron – prevents anemia</li>
            <li>Calcium – bone development</li>
            <li>Omega-3 – brain development</li>
            <li>Vitamin D – immunity support</li>
          </ul>
        </div>

        <div className="card-box">
          <h2>Healthy Foods to Include</h2>
          <ul>
            <li>Green leafy vegetables</li>
            <li>Whole grains and pulses</li>
            <li>Fresh fruits and nuts</li>
            <li>Eggs, milk, and yogurt</li>
            <li>Hydration: 2–3 liters/day</li>
          </ul>
        </div>

        <div className="card-box">
          <h2>Foods to Avoid</h2>
          <ul>
            <li>Processed foods</li>
            <li>High caffeine drinks</li>
            <li>Raw or undercooked meats</li>
            <li>Excessively salty foods</li>
            <li>Street food during high-pollution days</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card4;
