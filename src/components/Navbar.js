import React from "react"
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      {window.innerWidth >= 31.25 * parseFloat(getComputedStyle(document.documentElement).fontSize) && <div className="spacer">-</div>}
      {window.innerWidth >= 31.25 * parseFloat(getComputedStyle(document.documentElement).fontSize) ? <h1>🌗 Jonas Moons 🌓</h1> : <h1 className="phone-spacer">Jonas Moons</h1>}
      <ul className='menu'> { props.children }</ul>
      <div className="spacer">-</div>
    </nav>
  )
};

export default Navbar;
