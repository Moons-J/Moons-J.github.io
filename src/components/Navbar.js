import React from "react"
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className='Navbar'>
      <div className='menu'>
        <button>menu</button>
      </div>
      <h1>🌗 Jonas Moons 🌓</h1>
      <div className="spacer"></div>
    </div>
  )
};

export default Navbar;
