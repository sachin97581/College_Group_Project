import React, { useState, useEffect } from "react";
import "../extraPagesCss/appoinmentForm.css";

const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const patientId = user?.id;

  const [formData, setFormData] = useState({
    patientId: patientId || "",
    doctorId: "",
    date: "",
    time: "",
    status: "pending"
  });

  // Fetch doctors automatically
  useEffect(() => {
    fetch("http://localhost:3000/doctor/allDoctors")
      .then((res) => res.json())
      .then((data) => {
        console.log("Doctors:", data);
        setDoctors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/appointment/addappointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response:", data);
      alert("Appointment Request Sent Successfully! ✅");

      // Reset appointment date/time only
      setFormData({
        ...formData,
        doctorId: "",
        date: "",
        time: ""
      });

    } catch (err) {
      console.log(err);
      alert("Error sending request ❌");
    }
  };

  return (
    <div className="appointment-form-container">
      {!patientId && (
        <div className="error-box">
          User not logged in. Please login first to book an appointment.
        </div>
      )}
      
      {loading && (
        <div className="loading-box">
          Loading doctors...
        </div>
      )}
      
      {!loading && patientId && (
        <>
          <h2>Book Appointment</h2>
          
          <form onSubmit={handleSubmit} className="appointment-form">
            <div>
              <label>Select Doctor:</label>
              <select
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                required
              >
                <option value="">Choose a doctor</option>
                {doctors?.map((doc) => (
                  <option key={doc._id} value={doc._id}>
                    {doc.name} - {doc.specialization}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                required
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <label>Time:</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                required
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="appointment-submit-btn">
              Send Appointment Request
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AppointmentForm;






// // import React from 'react'

// // function AppointmentForm() {
// //   return (
// //     <div>AppointmentForm</div>
// //   )
// // }

// // export default AppointmentForm

// import React, { useState, useEffect } from "react";

// const AppointmentForm = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user from localStorage
//   const patientId = user?.id; // MongoDB _id

//   const [formData, setFormData] = useState({
//     patientId: patientId || "", // Auto set from logged-in user
//     doctorId: "",
//     date: "",
//     time: "",
//     status: "pending"
//   });

//   // Fetch doctors automatically
//   useEffect(() => {
//     fetch("http://localhost:3000/doctor/allDoctors")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Doctors:", data);
//         setDoctors(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log("Error:", err);
//         setLoading(false);
//       });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:3000/appointment/addappointments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       console.log("Response:", data);
//       alert("Appointment Request Sent Successfully!");

//       // Reset appointment date/time only
//       setFormData({
//         ...formData,
//         doctorId: "",
//         date: "",
//         time: ""
//       });

//     } catch (err) {
//       console.log(err);
//       alert("Error sending request");
//     }
//   };

//   return (
//     <div style={{ width: "350px", margin: "20px auto" }}>
//       {!patientId && (
//         <div style={{ padding: "20px", color: "red", border: "1px solid red", borderRadius: "4px", marginBottom: "20px" }}>
//           Error: User not logged in. Please login first.
//         </div>
//       )}
//       {loading && <div style={{ padding: "20px" }}>Loading doctors...</div>}
//       {!loading && patientId && (
//         <>
//           <h2>Book Appointment</h2>
//           <form onSubmit={handleSubmit}>
//         <label>Select Doctor:</label>
//         <select
//           name="doctorId"
//           value={formData.doctorId}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Choose Doctor</option>
//           {doctors?.map((doc) => (
//             <option key={doc._id} value={doc._id}>
//               {doc.name} - {doc.specialization}
//             </option>
//           ))}
//         </select>

//         <label>Date:</label>
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           required
//           onChange={handleChange}
//         />

//         <label>Time:</label>
//         <input
//           type="time"
//           name="time"
//           value={formData.time}
//           required
//           onChange={handleChange}
//         />

//         <button type="submit" style={{ marginTop: "10px" }}>
//           Send Appointment Request
//         </button>
//       </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default AppointmentForm;
