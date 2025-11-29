import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../image/img4-removebg-preview.png";
import "../style/profileGoogleFitPollution.css";
import Google_FIL_API from "./Google_FIL_API";
import Pollution from "./Pollution";

function Profile() {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000";

  const endpoints = [`${API_BASE}/patients/profile`];

  // ✅ MOVE handleNavigation HERE
  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found. Please login first.");
      setLoading(false);
      return;
    }

    const fetchWithFallback = async () => {
      let lastError = null;
      for (const url of endpoints) {
        try {
          const res = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            lastError =
              body.error || body.message || `Status ${res.status}`;
            continue;
          }

          const data = await res.json();
          setPatient(data.patient);
          setLoading(false);
          return;
        } catch (err) {
          lastError = `Network error at ${url}: ${err.message}`;
        }
      }
      setError(lastError || "Failed to fetch profile");
      setLoading(false);
    };

    fetchWithFallback();
  }, []);

  if (loading) return <div className="profile-container">Loading...</div>;
  if (error) return <div className="profile-container error">{error}</div>;
  if (!patient) return <div className="profile-container">No data found</div>;

  return (
    <div className="profile-container">
      <h1 className="profile-title">Patient Profile</h1>

      <div className="profile-wrapper"> 
        <div className="profile-image-box">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>

        <div className="profile-card">
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Email:</strong> {patient.email}</p>
          <p><strong>Disease:</strong> {patient.discease}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Condition:</strong> {patient.condition}</p>
          {/* <p>
            <strong>Created At:</strong>{" "}
            {new Date(patient.createdAt).toLocaleDateString()}
          </p> */}

          <button className="edit-btn" onClick={ () => handleNavigation("/your-appointments")}>Your Appointments</button>

          {/* ✅ FIXED — NOW handleNavigation WORKS */}
          <button
            className="edit-btn"
            onClick={() => handleNavigation("/add-family")}>Add Family Member</button>
        </div>
      </div>

      <br /><br />
      {/* <Google_FIL_API /> */}
      <Pollution />
    </div>
  );
}

export default Profile;
