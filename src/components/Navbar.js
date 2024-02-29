import React from "react"
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      {window.innerWidth >= 466 && <div className="spacer">-</div>}
      {window.innerWidth >= 466 ? <h1>🌗 Jonas Moons 🌓</h1> : <h3 className="phone-spacer">Jonas M</h3>}
      <ul className='menu'> { props.children }</ul>
      <div className="spacer">-</div>
    </nav>
  )
};

export default Navbar;
