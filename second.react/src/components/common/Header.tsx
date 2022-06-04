
import React from "react";
import { NavLink } from "react-router-dom";

const Header =() =>{
    const activeStyle =(props :{isActive:boolean}) => props.isActive ? { color: "#F15B2A" }:{} ;
  return (
    <nav>
      <NavLink to="/" style={activeStyle} >
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses"style={activeStyle} >
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" style={activeStyle} >
        About
      </NavLink>
    </nav>);
}

export default Header;