import React from 'react';
import {NavLink} from "react-router-dom";

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case


// NavBar found on stackoverflow, not working
function Navbar() {
  return (
     <div className=" row navigation" id="navigation">
        <NavLink to="/about">about </NavLink>
        <NavLink to="/portfolio">portfolio </NavLink>
        <NavLink to="/contact">contact </NavLink>
        <NavLink to="/resume">resume</NavLink>
    </div>
  );
}

export default Navbar;

