import React from "react";
import "../MisscarriageDataCSS/Card2.css";

function Card6() {
  return (
    <div className="card-container">
      <h1 className="card-title">Long-Term Care & Wellness</h1>
      <p className="card-subtitle">
        After addressing immediate risk factors, long-term wellness ensures a
        healthy pregnancy journey and postpartum recovery.
      </p>

      <div className="card-content">
        <div className="card-box">
          <h2>Long-Term Health Practices</h2>
          <ul>
            <li>Regular prenatal checkups.</li>
            <li>Maintaining balanced diet and hydration.</li>
            <li>Light exercises recommended by doctors.</li>
            <li>Managing stress with yoga or meditation.</li>
          </ul>
        </div>

        <div className="card-box">
          <h2>Post-Pregnancy Wellness</h2>
          <ul>
            <li>Postnatal vitamin supplements.</li>
            <li>Pelvic floor exercises.</li>
            <li>Emotional and mental health support.</li>
            <li>Breastfeeding guidance.</li>
          </ul>
        </div>

        <div className="card-box">
          <h2>When to Consult a Doctor?</h2>
          <ul>
            <li>Abnormal fatigue or dizziness</li>
            <li>Sudden swelling or pain</li>
            <li>High blood pressure symptoms</li>
            <li>Irregular baby movements</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card6;
