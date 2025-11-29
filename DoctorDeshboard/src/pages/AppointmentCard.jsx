import React from 'react'
import '../style/appointmentCard.css'

function AppointmentCard({ appointment, onAccept, onReject }) {
  const { patientId, date, time, status } = appointment;
  console.log(appointment);
  return (
    <div className="card">
      <h3>{patientId?.name}</h3>
      <p><strong>Age:</strong> {patientId?.age}</p>
      <p><strong>Disease:</strong> {patientId?.discease}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Status:</strong> 
        <span className={`status ${status}`}>{status}</span>
      </p>

      <div className="btn-box">
        <button
          onClick={() => onAccept(appointment._id)}
          className="accept-btn"
          disabled={status === "accepted"}
        >
          Accept
        </button>

        <button
          onClick={() => onReject(appointment._id)}
          className="reject-btn"
          disabled={status === "rejected"}
        >
          Reject
        </button>
      </div>
    </div>
  )
}

export default AppointmentCard
