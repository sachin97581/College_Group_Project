import React,{useState , useContext} from 'react'
import {Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PatientDataContext } from '../context/PatientContext'
import '../style/Log_in.css'

const Log_in = () => {
  const [email ,setEmail] = useState('')
  const [password , setPassword] = useState('')

  const navigate = useNavigate()

  const {patien , setPatient} = useContext(PatientDataContext)

  const submitHandler = async(e) => {
    e.preventDefault()
    const patientData = {
      email:email,
      password:password
    }

    const response = await axios.post("http://localhost:3000/patients/login" , patientData)
    console.log("The react resoonse from file Log-in ",response)
    if(response.status === 200){
      const data = response.data
      setPatient(response.data)
      localStorage.setItem('token' , data.token)
      navigate('/Home')
    }
setEmail('')
setPassword('')

  }

  // return (
  //   <div>
  //     <div>
  //       <form onSubmit={submitHandler}>
          // <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          // <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
  //         <button type='submit'>Log in</button>

  //         <p>New here? <Link to={'/sign-up'}>Create new Account</Link></p>
  //       </form>
  //     </div> 
  //    </div>
  // )

// I log in page css written same sigup page there is not difference in both page css


  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Log -in</h2>
        <form className="signup-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <button type="submit" className="signup-btn">Log-in</button>
        </form>
        <p className="login-link">
          New here? <Link to={'/sign-up'}>Create new Account</Link>
        </p>
      </div>
    </div>
  );

}

export default Log_in