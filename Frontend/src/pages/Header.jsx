import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/header.css';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on load
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/log-in');
  };

  return (
    <div className={`main ${menuOpen ? 'menu-open' : ''}`}>

      <div className='logo' onClick={() => handleNavigation('/')}>
        Birth
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Always visible */}
      <div className='progress' onClick={() => handleNavigation('/api/progress')}>
        Progress
      </div>

      <div className='chatbot' onClick={() => handleNavigation('/api/chatbot')}>
        ChatBot
      </div>

      {/* <div className='progress' onClick={() => handleNavigation('/ai-chat')}>
        AI-Chat
      </div> */}

       <div className='progress' onClick={() => handleNavigation('/add-appointment')}>
        Dr. Appointment
      </div> 

      {/* 🔥 Conditionally Render Login / Profile */}
      {!isLoggedIn ? (
        <>
          <div className='progress' onClick={() => handleNavigation('/log-in')}>
            Log-in
          </div>
        </>
      ) : (
        <>
          <div className='progress' onClick={() => handleNavigation('/profile')}>
            Profile
          </div>

          <div className='progress' onClick={logoutHandler}>
            Logout
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
