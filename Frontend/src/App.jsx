import React from 'react'
import './App.css'
import Header from './pages/Header'
import PageBody from './pages/PageBody'
import Miscarriage from './pages/Miscarriage'
import Sign_up from './pages/Sign_up'
import Log_in from './pages/Log_in'
import Ai_Chat from './pages/Ai_Chat'
import PatientContext from './context/PatientContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Progress from './pages/Progress'
import PregnancyAdvice from './pages/PregnancyAdvice'
import ChatBot from './pages/ChatBot'
import Connect_with_PhNum from './pages/ConnectWithPhNum'
import bgImage from "./image/19373.jpg"; // Import from src
import Card1 from './MiscarriageData/Card1'
import Card2 from './MiscarriageData/Card2'
import Card3 from './MiscarriageData/Card3'
import Card4 from './MiscarriageData/Card4'
import Card5 from './MiscarriageData/Card5'
import Card6 from './MiscarriageData/Card6'
import Footer from './pages/Footer'
import Profile from './pages/Profile'


function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <PatientContext>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* Cards */}
            <Route path="/api/Card1" element={<Card1 />} />
            <Route path="/api/Card2" element={<Card2 />} />
            <Route path="/api/Card3" element={<Card3 />} />
            <Route path="/api/Card4" element={<Card4 />} />
            <Route path="/api/Card5" element={<Card5 />} />
            <Route path="/api/Card6" element={<Card6 />} />
            {/* End Cards */}
            <Route path="/" element={<PageBody />} />
            <Route path="/api/progress" element={<Progress />} />
            <Route path="/api/chatbot" element={<ChatBot />} />
            <Route path="/sign-up" element={<Sign_up />} />
            <Route path="/log-in" element={<Log_in />} /> 
            <Route path="/advice/:month" element={<PregnancyAdvice />} /> 
            <Route path='/connect-with' element={<Connect_with_PhNum/>}/>
            <Route path="/ai-chat" element={<Ai_Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          {/* <Miscarriage /> */}
        </BrowserRouter>
        <Footer/>
      </PatientContext>
    </div>
  )
}

export default App
