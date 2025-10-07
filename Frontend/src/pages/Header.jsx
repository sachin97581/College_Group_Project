import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/header.css'

const Header = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigation = (path) => {
    navigate(path)
    setMenuOpen(false) // Close menu after navigation
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={`main ${menuOpen ? 'menu-open' : ''}`}>
      <div className='logo' onClick={() => handleNavigation('/')}>
        Birth
      </div>

      {/* Mobile Menu Button */}
      <div 
        className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Items */}
      <div className='progress' onClick={() => handleNavigation('/api/progress')}>
        Progress
      </div>
      <div className='chatbot' onClick={() => handleNavigation('/api/chatbot')}>
        ChatBot
      </div>
      <div className='progress' onClick={() => handleNavigation('/ai-chat')}>
        AI-Chat
      </div>
      <div className='progress' onClick={() => handleNavigation('/connect-with')}>
        Connect-with
      </div>
      <div className='progress' onClick={() => handleNavigation('/sign-up')}>
        Sign-up
      </div>
      <div className='progress' onClick={() => handleNavigation('/log-in')}>
        Log-in
      </div>
      
      
    </div>
  )
}

export default Header