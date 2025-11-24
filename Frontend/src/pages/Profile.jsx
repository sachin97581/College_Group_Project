import React, { useEffect, useState } from "react";
import profileImage from "../image/img4-removebg-preview.png";
// import "../style/Profile.css";
import "../style/profileGoogleFitPollution.css"
import Google_FIL_API from "./Google_FIL_API";
import Pollution from "./Pollution";

function Profile() {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000";
  // Common possible profile endpoints (tries each until success)
  const endpoints = [
    `${API_BASE}/patients/profile`,
  ];

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
              Authorization: `Bearer ${token}`
            }
          });

          // network OK but server returned error status
          if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            const message = body.error || body.message || `Status ${res.status}`;
            lastError = `Endpoint ${url} -> ${message}`;
            // try next endpoint
            continue;
          }

          const data = await res.json();
          setPatient(data.patient);
          setError(null);
          setLoading(false);
          return;
        } catch (err) {
          // network error (CORS, server down, wrong port)
          lastError = `Network error when calling ${url}: ${err.message}`;
          // try next endpoint
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

      {/* LEFT SIDE IMAGE */}
      <div className="profile-image-box">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>

      {/* RIGHT SIDE DETAILS */}
      <div className="profile-card">

        {/* <p><strong>ID:</strong> {patient._id}</p> */}
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Disease:</strong> {patient.discease}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Condition:</strong> {patient.condition}</p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(patient.createdAt).toLocaleDateString()}
        </p>

        {/* EDIT PROFILE BUTTON */}
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
    <br /><br />
    <Google_FIL_API/>
    <Pollution/>
  </div>
);
}

export default Profile;
