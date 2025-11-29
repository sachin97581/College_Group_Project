import React from 'react'
import { Link } from "react-router-dom"
import '../style/headerFooter.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">Doctor Dashboard</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  )
}

export default Header
