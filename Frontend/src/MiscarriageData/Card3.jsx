import React from "react";
import "../MisscarriageDataCSS/Card2.css";

function Card3() {
  return (
    <div className="card-container">
      <h1 className="card-title">Advanced Medical Monitoring</h1>
      <p className="card-subtitle">
        Regular and advanced monitoring during pregnancy helps detect early risks,
        prevent complications, and ensure the mother’s and baby’s safety.
      </p>

      <div className="card-content">
        <div className="card-box">
          <h2>Importance of Medical Monitoring</h2>
          <ul>
            <li>Detects pregnancy risks early.</li>
            <li>Ensures the baby’s proper growth and nutrition.</li>
            <li>Helps maintain maternal health and well-being.</li>
          </ul>
        </div>

        <div className="card-box">
          <h2>Key Medical Check-ups</h2>
          <ul>
            <li>Ultrasound Scans</li>
            <li>Blood Pressure Monitoring</li>
            <li>Fetal Heartbeat Monitoring</li>
            <li>Blood Sugar Testing</li>
            <li>Thyroid Function Test</li>
          </ul>
        </div>

        <div className="card-box">
          <h2>Devices for Home Monitoring</h2>
          <ul>
            <li>Digital Blood Pressure Monitor</li>
            <li>Oxygen Level Monitor (Pulse Oximeter)</li>
            <li>Fetal Doppler (Doctor Recommended)</li>
            <li>Smartphone-based pregnancy tracking apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card3;
