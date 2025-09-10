import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/header.css'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='main'>
      <div className='logo' onClick={() => navigate('/')}>
        Birth
      </div>
      <div className='progress' onClick={() => navigate('/api/progress')}>
        Progress
      </div>
      <div className='chatbot' onClick={() => navigate('/api/chatbot')}>
        ChatBot
      </div>
      <div className='progress' onClick={() => navigate('/sign-up')}>
        Sign-up
      </div>
      <div className='progress' onClick={() => navigate('/log-in')}>
        Log-in
      </div>
      <div className='progress' onClick={() => navigate('/connect-with')}>
        Connect-with
      </div>
      <div className='progress' onClick={() => navigate('/ai-chat')}>
        AI-Chat
      </div>
    </div>
  )
}

export default Header
