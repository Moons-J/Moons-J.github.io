import React, { useState } from "react";
import './NavItem.css';

import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as AboutMeIcon } from "../icons/about-me.svg";
import { ReactComponent as MyWorkIcon } from "../icons/my-work.svg";

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

function DropdownMenu() {

  function DropdownItem(props) {
    return (
      <a href={props.path} className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
  <div className="dropdown">
    <div className="items">
      <DropdownItem path="/" leftIcon={<HomeIcon />}>home</DropdownItem>
      <DropdownItem path="/about-me" leftIcon={<AboutMeIcon />}>about me</DropdownItem>
      <DropdownItem path="/my-work" leftIcon={<MyWorkIcon />}>my work</DropdownItem>
      </div>
  </div>
  );
}

export { NavItem, DropdownMenu };
