import React from 'react';
import NavItem from "./NavItem";
import Social from "./Social";

function Header() {
  return (
    <header>
      <div className="main-logo">
        <span>HH</span>
      </div>
      <nav>
        <NavItem/>
      </nav>
      <Social/>
    </header>


  )
}

export default Header
