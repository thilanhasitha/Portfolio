import React from "react";
import "./Navbar.css";
import { Link, Navigate } from "react-router-dom";


const Navbar = () => {
  //  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="header">
        <h1 className="title">Portfolio</h1>
      </div>
      <div className="menu">
        <ul className="menuitems">
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href = '#skills'>Skills</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
          <a href='#about'>About</a>
          </li>
          <li>
          <a href='#projects'>Projects</a>
          </li>
          <li>
          <a href='#experience'>Experience</a>
          </li>
           <button className="btn1" onClick={() => Navigate(<Contact />)}>
            Contact Me!
          </button> 
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
