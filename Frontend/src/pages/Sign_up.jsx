import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PatientDataContext } from '../context/PatientContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/Log_in.css'; // same CSS as login

const Sign_up = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [discease, setDiscease] = useState('');
  const [condition, setCondition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { setPatient } = useContext(PatientDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const newPatient = {
        name,
        age,
        discease,
        condition,
        email,
        password,
      };

      const response = await axios.post(
        'http://localhost:3000/patients/register',
        newPatient
      );
      console.log('Response from Sign-up:', response);
      if (response.status === 201) {
        const data = response.data;
        console.log('Data:', data);
        localStorage.setItem('token', data.token);
        setPatient(data.patient);

        toast.success('🎉 Account created successfully!', {
          position: 'top-center',
        });

        setTimeout(() => {
          navigate('/ai-chat');
        }, 1500);
      }
    } catch (error) {
      console.error('Signup error:', error);
      if (error.response && error.response.data.error) {
        toast.error(`❌ ${error.response.data.error}`, {
          position: 'top-center',
        });
      } else {
        toast.error('❌ Something went wrong!', { position: 'top-center' });
      }
    }

    // Clear fields
    setName('');
    setAge('');
    setDiscease('');
    setCondition('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <form className="signup-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="discease">Disease</label>
            <input
              type="text"
              id="discease"
              placeholder="Enter your disease"
              required
              value={discease}
              onChange={(e) => setDiscease(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="condition">Condition</label>
            <input
              type="text"
              id="condition"
              placeholder="Enter your current condition"
              required
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to={'/log-in'}>Log-in</Link>
        </p>
      </div>

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Sign_up;





// import React, { useState, useContext } from 'react'
// import {Link ,useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { PatientDataContext } from '../context/PatientContext'
// // import '../style/Sign_up.css'
// import '../style/Log_in.css'  // css of login page ans sign up page is same there is not difference in both page css




// const Sign_up = () => {

//     const [name , setName] = useState('')
//     const [age , setAge] = useState('')
//     const [discease , setDiscease] = useState('')
//     const [condition , setCondition] = useState('')
//     const [email , setEmail] = useState('')
//     const [password , setPassword] = useState('')


//     const navigate = useNavigate()

//     const {patien , setPatient} = useContext(PatientDataContext)

//     const submitHandler = async(e) => {
//         e.preventDefault()
//         const newPatient = {
//             name:name,
//             age:age,
//             discease:discease,
//             condition:condition,
//             email:email,
//             password:password
//         }

//     const response = await axios.post("http://localhost:3000/patients/register" , newPatient)
//     console.log("The react resoonse from file Sign-up ",response)
//     if(response.status !== 201){
//        const data = response.data
       
//         setPatient(response.data)
//         localStorage.setItem('token' , data.token)
//         navigate('/')
//     }

//     setName('')
//     setAge('')
//     setDiscease('')
//     setCondition('')
//     setEmail('')
//     setPassword('')
    
//     }

//   return (

// <div className="signup-container">
//       <div className="signup-card">
//         <h2 className="signup-title">Create an Account</h2>
//         <form className="signup-form" onSubmit={submitHandler}>
//           <div className="form-group">
//             <label htmlFor="name">Full Name</label>
//             <input type="text" id="name" placeholder="Enter your name" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="name">Age</label>
//             <input type="number" id="name" placeholder="Enter your age" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="name">Discease</label>
//             <input type="text" id="name" placeholder="Enter your discease" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="name">Condition</label>
//             <input type="text" id="name" placeholder="Enter your currunt condition" required />
//           </div>

//           <div className="form-group">                                                                               
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="Enter your email" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" placeholder="Enter your password" required />
//           </div>

//           <button type="submit" className="signup-btn">Sign Up</button>
//         </form>
//         <p className="login-link">
//           Already have an account? <Link to={'/log-in'}>Log-in</Link>
//         </p>
//       </div>
//     </div>
//   )

// }

// export default Sign_up