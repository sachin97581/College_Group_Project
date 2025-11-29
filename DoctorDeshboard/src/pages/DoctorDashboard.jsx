import React, { useEffect, useState } from 'react'
import AppointmentCard from '../pages/AppointmentCard'
import '../style/dr_Deshboard.css'

function DoctorDashboard() {
  const [doctors, setDoctors] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3000/doctor/allDoctors")
      .then(res => res.json())
      .then(data => {
        // console.log("Doctors:", data);
        setDoctors(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, []);

  // const fetchAppointments = (id) => {
  //   fetch(`http://localhost:3000/appointment/get/${id}`)
  //     .then(res => res.json())
  //     .then(data => setAppointments(data))
  //     .catch(err => console.error(err))
  // }

  const fetchAppointments = (id) => {
    fetch(`http://localhost:3000/appointment/doctor/appointments/${id}`)
      .then(res => res.json())
      .then(data => {
        // console.log("Appointments:", data.appointments)
        setAppointments(data.appointments)
      })
      .catch(err => console.error(err))
  }


  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value)
    fetchAppointments(e.target.value)
  }

  // Accept appointment change status
  const updateAppointmentStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:3000/appointment/appointments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      });

      const data = await res.json();
      console.log("Updated:", data);

      // Refresh appointments after update
      fetchAppointments(selectedDoctor);

    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleAccept = (id) => updateAppointmentStatus(id, "accepted");
  const handleReject = (id) => updateAppointmentStatus(id, "rejected");


  return (
    <div className="dashboard-container">
      <h2>Doctor Appointment Dashboard</h2>

      {loading ? <p>Loading doctors...</p> : (
        <select className="dropdown" value={selectedDoctor} onChange={handleDoctorChange}>
          <option>Select a Doctor</option>
          {doctors.map(doc => (
            <option key={doc._id} value={doc._id}>{doc.name}</option>
          ))}
        </select>
      )}

      <div className="appointments-list">
        {appointments.map(app => (
          // <AppointmentCard 
          //   key={app._id}
          //   appointment={app}
          //   onAccept={(id)=>console.log("Accept",id)}
          //   onReject={(id)=>console.log("Reject",id)}
          // />
          <AppointmentCard
            key={app._id}
            appointment={app}
            onAccept={handleAccept}
            onReject={handleReject}
          />

        ))}
      </div>
    </div>
  )
}

export default DoctorDashboard
