import React from "react";
import "../MisscarriageDataCSS/Card1.css";

function Card1() {
  return (
    <div className="miscarriage-container">

      {/* HEADER SECTION */}
      <div className="header-section">
        <h1>Miscarriage Prevention by Reducing Air Pollution Exposure</h1>
        <p>
          Air pollution can negatively affect pregnancy and increase the risk of miscarriage.
          Understanding the risks and taking preventive steps can help protect maternal
          and fetal health.
        </p>
      </div>

      {/* CONTENT SECTION */}
      <div className="content-section">

        <div className="info-card">
          <h2>How Air Pollution Affects Pregnancy?</h2>
          <p>
            Pollutants like PM2.5, PM10, carbon monoxide, nitrogen dioxide, and sulfur dioxide
            can enter the bloodstream and affect the placenta. This may lead to:
          </p>
          <ul>
            <li>Reduced oxygen supply to the fetus</li>
            <li>Placental inflammation</li>
            <li>Hormonal imbalances</li>
            <li>Increased risk of miscarriage, especially in early pregnancy</li>
          </ul>
        </div>

        <div className="info-card">
          <h2>Signs of Pollution Impact on Maternal Health</h2>
          <ul>
            <li>Frequent headaches</li>
            <li>Breathing difficulty or chest tightness</li>
            <li>Fatigue or dizziness</li>
            <li>Allergies or irritation of eyes and throat</li>
            <li>Abnormal tiredness during pregnancy</li>
          </ul>
        </div>

        <div className="info-card">
          <h2>Preventive Measures for Pregnant Women</h2>
          <ul>
            <li>Use an N95 mask when going outside</li>
            <li>Avoid high-traffic pollution areas and peak pollution hours</li>
            <li>Keep indoor air clean with air purifiers and plants like aloe vera</li>
            <li>Monitor AQI daily and stay indoors when AQI is above 150</li>
            <li>Maintain a nutrient-rich diet to boost immunity</li>
            <li>Stay hydrated to help the body flush out toxins</li>
          </ul>
        </div>

        <div className="info-card">
          <h2>Healthy Lifestyle Tips</h2>
          <ul>
            <li>Practice light breathing exercises</li>
            <li>Avoid smoking or passive smoke exposure</li>
            <li>Include Vitamin C, Omega-3, and iron-rich foods</li>
            <li>Consult your doctor regularly for prenatal checkups</li>
          </ul>
        </div>

        <div className="info-card">
          <h2>When to Seek Medical Help?</h2>
          <p>If you experience any of the following, seek medical care immediately:</p>
          <ul>
            <li>Severe abdominal pain</li>
            <li>Heavy bleeding or spotting</li>
            <li>Shortness of breath</li>
            <li>Severe dizziness or fainting</li>
            <li>Reduced fetal movement (in later pregnancy)</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Card1;
