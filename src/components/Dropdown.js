import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Dropdown.css';

import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as AboutMeIcon } from "../icons/about-me.svg";
import { ReactComponent as MyWorkIcon } from "../icons/my-work.svg";

const navigation = [
  { name: 'home', path: '/', icon: <HomeIcon /> },
  { name: 'about me', path: '/about-me', icon: <AboutMeIcon /> },
  { name: 'my work', path: '/my-work', icon: <MyWorkIcon /> }
]

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      <button className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </button>
      {open && props.children}
    </li>
  )
};

function Dropdown() {

  return (
    <div className="dropdown">
      <div className="items">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            leftIcon={item.icon}
            className={({ isActive }) => {
              return 'menu-item' + (isActive ? ' disabled' : '');
            }}>
            <span className="">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
        {/* <DropdownItem path="/" leftIcon={<HomeIcon />}>home</DropdownItem>
        <DropdownItem path="/about-me" leftIcon={<AboutMeIcon />}>about me</DropdownItem>
        <DropdownItem path="/my-work" leftIcon={<MyWorkIcon />}>my work</DropdownItem> */}
      </div>
    </div>
  );
}

export { NavItem, Dropdown };
