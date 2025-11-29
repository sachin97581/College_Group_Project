import React, { useEffect, useState } from "react";
import "../extraPagesCss/appointments.css"; // Add CSS below

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user from localStorage
  const patientId = user?.id; // MongoDB _id

  useEffect(() => {
    if (!patientId) {
      setError("User not logged in. Please login first.");
      setLoading(false);
      return;
    }

    const fetchAppointments = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/appointment/appointments/patient/${patientId}`
        );
        const data = await res.json();
        console.log("Appointments data:", data); // Debug log
        if (data.success) {
          setAppointments(data.appointments);
        } else {
          setError("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setError("Error fetching appointments: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [patientId]);

  return (
    <div className="appointments-container">
      <h2 className="section-title">My Appointments</h2>

      {loading && <p>Loading appointments...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div className="appointments-grid">
          {appointments && appointments.length > 0 ? (
            appointments.map((appt, index) => (
              <div className="appointment-card" key={index}>
                <h3 className="doctor-name">
                  Dr. {appt.doctorId?.name || "Unknown"}
                </h3>
                <p className={`status ${appt.status}`}>
                  Status: {appt.status}
                </p>
                <p className="info">📅 {appt.date}</p>
                <p className="info">⏰ {appt.time}</p>
              </div>
            ))
          ) : (
            <p className="no-appointments">No Appointments Found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PatientAppointments;
