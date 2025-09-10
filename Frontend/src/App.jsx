import React from 'react'
import './App.css'
import Header from './pages/Header'
import PageBody from './pages/PageBody'
import Miscarriage from './pages/Miscarriage'
import Sign_up from './pages/Sign_up'
import Log_in from './pages/Log_in'
import PatientContext from './context/PatientContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Progress from './pages/Progress'
import PregnancyAdvice from './pages/PregnancyAdvice'
import ChatBot from './pages/ChatBot'
import Connect_with_PhNum from './pages/ConnectWithPhNum'

function App() {
  return (
    <div className="App">
      <PatientContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<PageBody />} />
            <Route path="/api/progress" element={<Progress />} />
            <Route path="/api/chatbot" element={<ChatBot />} />
            <Route path="/sign-up" element={<Sign_up />} />
            <Route path="/log-in" element={<Log_in />} /> 
            <Route path="/advice/:month" element={<PregnancyAdvice />} /> 
            <Route path='/connect-with' element={<Connect_with_PhNum/>}/>
            {/* Add more routes as needed */}
          </Routes>
          {/* <Miscarriage /> */}
        </BrowserRouter>
      </PatientContext>
    </div>
  )
}

export default App








// import React from 'react'
// import './App.css'
// import Header from './pages/Header'
// import PageBody from './pages/PageBody'
// import { BrowserRouter } from 'react-router-dom'
// import Miscarriage from './pages/Miscarriage'
// import Sign_up from './pages/Sign_up'

// function App() {
// return (
//   <div className="App">
//     <BrowserRouter>
//     <Header />
//     <PageBody />
//     <Miscarriage />
//     <Sign_up />
//     </BrowserRouter>
//   </div>
// )
// }

// export default App
