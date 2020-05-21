import React from 'react';
import {NavLink} from "react-router-dom";

function NavItem() {
  return (
    <ul className="nav-list">
      <li>
        <NavLink to="/home" activeClassName='active'>
          <i className="fas fa-home"></i>
          <span> Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          <i className="fas fa-user"></i>
          <span>About</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills">
          <i className="fas fa-cog"></i>
          <span>Skills</span>
        </NavLink>
      </li>
      <li>

        <NavLink to="/my-works">
          <i className="far fa-eye"></i>
          <span>MyWorks</span>
        </NavLink>
      </li>
      <li>

        <NavLink to="/contact">
          <i className="fas fa-envelope"></i>
          <span>Contact</span>
        </NavLink>
      </li>
    </ul>

  )
}

export default NavItem
