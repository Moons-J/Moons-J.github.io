import React from "react"
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      {window.innerWidth >= 500 && <div className="spacer">-</div>}
      {window.innerWidth >= 500 ? <h1>🌗 Jonas Moons 🌓</h1> : <h1 className="phone-spacer">Jonas M</h1>}
      <ul className='menu'> { props.children }</ul>
      <div className="spacer">-</div>
    </nav>
  )
};

export default Navbar;
