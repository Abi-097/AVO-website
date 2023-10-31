import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, Setnavbar] = useState(false);

  const handleClick = () => setClick(!click);

  const BackgroundChange = () => {
    if (window.scrollY >= 100) {
      // console.log(window.scrollY)
      Setnavbar(true);
    } else {
      Setnavbar(false);
    }
  };

  window.addEventListener("scroll", BackgroundChange);
  return (
    <>
      <nav className={navbar ? "navbar-color" : "navbar active"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className={navbar ? "black-text" : "white-text"}>a</span>
            <span style={{ color: "#d1002c" }}>v</span>
            <span className={navbar ? "black-text" : "white-text"}>o</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? "Menu" : "Menu"}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu navbar-size"}>
            <li className={`nav-item ${navbar ? "black-text" : ""}`}> HOME </li>
            <li className={`nav-item ${navbar ? "black-text" : ""}`}>
              {" "}
              ABOUT{" "}
            </li>
            <li className={`nav-item ${navbar ? "black-text" : ""}`}> WORK </li>
            <li className={`nav-item ${navbar ? "black-text" : ""}`}> BLOG </li>
            <li className={`nav-item ${navbar ? "black-text" : ""}`}>
              {" "}
              CONTACT{" "}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
