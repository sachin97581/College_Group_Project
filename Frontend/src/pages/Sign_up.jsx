import React, { useState, useContext } from 'react'
import {Link ,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PatientDataContext } from '../context/PatientContext'
// import '../style/Sign_up.css'
import '../style/Log_in.css'  // css of login page ans sign up page is same there is not difference in both page css




const Sign_up = () => {

    const [name , setName] = useState('')
    const [age , setAge] = useState('')
    const [discease , setDiscease] = useState('')
    const [condition , setCondition] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    const navigate = useNavigate()

    const {patien , setPatient} = useContext(PatientDataContext)

    const submitHandler = async(e) => {
        e.preventDefault()
        const newPatient = {
            name:name,
            age:age,
            discease:discease,
            condition:condition,
            email:email,
            password:password
        }

    const response = await axios.post("http://localhost:3000/patients/register" , newPatient)
    console.log("The react resoonse from file Sign-up ",response)
    if(response.status !== 201){
       const data = response.data
       
        setPatient(response.data)
        localStorage.setItem('token' , data.token)
        navigate('/Home')
    }

    setName('')
    setAge('')
    setDiscease('')
    setCondition('')
    setEmail('')
    setPassword('')
    
    }

  return (
//     <div className='sign_up-main'>
//         <h1>Sign-up form</h1>
//         <div className='sign_up-container'>
//             <form onSubmit={submitHandler}>
//                 <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
//                 <input type="text" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
//                 <input type="text" placeholder='Discease' value={discease} onChange={(e) => setDiscease(e.target.value)} />
//                 <input type="text" placeholder='Condition' value={condition} onChange={(e) => setCondition(e.target.value)} />
//                 <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type='submit'>Sign up</button>
//             </form>
//         </div>
//     </div>


// css of sign up page and login page is same there is not difference in both page css


<div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="name">Age</label>
            <input type="number" id="name" placeholder="Enter your age" required />
          </div>

          <div className="form-group">
            <label htmlFor="name">Discease</label>
            <input type="text" id="name" placeholder="Enter your discease" required />
          </div>

          <div className="form-group">
            <label htmlFor="name">Condition</label>
            <input type="text" id="name" placeholder="Enter your currunt condition" required />
          </div>

          <div className="form-group">                                                                               
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to={'/log-in'}>Log-in</Link>
        </p>
      </div>
    </div>
  )

}

export default Sign_up