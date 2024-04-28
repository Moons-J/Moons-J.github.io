import React from "react"
import './Navbar.css'
import { Toggle } from './Toggle'

const Navbar = (props) => {

  return (
    <nav className='navbar'>
      {window.innerWidth >= 31.25 * parseFloat(getComputedStyle(document.documentElement).fontSize) && <div className="spacer">-</div>}
      {window.innerWidth >= 31.25 * parseFloat(getComputedStyle(document.documentElement).fontSize) ? <h1>🌗 Jonas Moons 🌓</h1> : <h1 className="phone-spacer">Jonas Moons</h1>}
        <Toggle
          isChecked={props.isDark}
          handleChange={() => props.setIsDark(!props.isDark)} />
        <ul className='menu'> { props.children }</ul>
        <div className="spacer"></div>
    </nav>
  )
};

export default Navbar;
