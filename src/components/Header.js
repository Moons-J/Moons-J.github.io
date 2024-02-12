import React from "react"
import './Header.css'

const Header = (props) => {
  return (
    <div className='Header'>
      <div className='menu'>
        <button>menu</button>
      </div>
      <h1>🌗 Jonas Moons 🌓</h1>
      <div className="spacer"></div>
    </div>
  )
};

export default Header;
