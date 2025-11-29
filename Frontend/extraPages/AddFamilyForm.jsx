import React, { useState } from "react";
import axios from "axios";
import "../extraPagesCss/addfamilyForm.css";

const AddFamilyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  // 👉 logged-in user (patient)
  const user = JSON.parse(localStorage.getItem("user")); 
  const patientId = user?.id; // MongoDB _id

  const addFamilyHandler = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    try {
      const response = await axios.post("http://localhost:3000/family/add", {
        patientId,
        name,
        email
      });

      if (response.data.success) {
        setMessage({ 
          type: "success", 
          text: "Family member added successfully! 🎉" 
        });
        setName("");
        setEmail("");
        
        // Clear success message after 3 seconds
        setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      }

    } catch (error) {
      console.error("Error:", error);
      setMessage({ 
        type: "error", 
        text: "Failed to add family member. Please try again." 
      });
    }
  };

  return (
    <div className="family-form-container">
      <h2>Add Family Member</h2>

      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={addFamilyHandler} className="family-form">
        <div className="form-group">
          <label>Family Member Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter family member's name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Family Member
        </button>
      </form>
    </div>
  );
};

export default AddFamilyForm;












// import React, { useState } from "react";
// import axios from "axios";

// const AddFamilyForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   // 👉 logged-in user (patient)
//   const user = JSON.parse(localStorage.getItem("user")); 
//   const patientId = user?.id; // MongoDB _id (automatically set when user logs in)

//   const addFamilyHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:3000/family/add", {
//         patientId,
//         name,
//         email
//       });

//       if (response.data.success) {
//         alert("Family member added successfully!");
//         setName("");
//         setEmail("");
//       }

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to add family member.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Add Family Member</h2>

//       <form onSubmit={addFamilyHandler}>

//         <div>
//           <label>Family Member Name</label><br />
//           <input
//             type="text"
//             value={name}
//             placeholder="Enter family member's name"
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div style={{ marginTop: "10px" }}>
//           <label>Email</label><br />
//           <input
//             type="email"
//             value={email}
//             placeholder="Enter email"
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" style={{ marginTop: "15px" }}>
//           Add Family Member
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddFamilyForm;
