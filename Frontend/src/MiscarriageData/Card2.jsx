import React from "react";
import "../MisscarriageDataCSS/Card2.css";

function Card2() {
  return (
    <div className="card-container">
      <h1 className="card-title">Environmental Safety for Pregnancy</h1>
      <p className="card-subtitle">
        Ensuring a safe environment is essential for protecting pregnant women 
        from harmful pollutants, toxins, and environmental risks.
      </p>

      <div className="card-content">
        <div className="card-box">
          <h2>Why Environmental Safety Matters?</h2>
          <ul>
            <li>Reduces exposure to harmful chemicals and allergens.</li>
            <li>Helps maintain healthy oxygen levels for fetal development.</li>
            <li>Decreases risk of pregnancy complications due to toxins.</li>
          </ul>
        </div>

        <div className="card-box">
          <h2>Common Pregnancy Environmental Risks</h2>
          <ul>
            <li>Household cleaning chemicals</li>
            <li>Pesticides or insect sprays</li>
            <li>Contaminated drinking water</li>
            <li>Indoor smoke or burning substances</li>
            <li>Over-exposure to heat or radiation</li>
          </ul>
        </div>

        <div className="card-box">
          <h2>Safety Tips for Pregnant Women</h2>
          <ul>
            <li>Choose natural, chemical-free cleaning products.</li>
            <li>Avoid freshly painted areas or construction zones.</li>
            <li>Keep rooms well-ventilated with open windows.</li>
            <li>Test water quality and use filters when needed.</li>
            <li>Stay away from insecticides and toxic fumes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card2;
