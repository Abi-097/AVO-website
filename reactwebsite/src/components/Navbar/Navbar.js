// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, Setnavbar] = useState(false);
  
  const handleClick = () => setClick(!click);

  const BackgroundChange = ()=> {
    // console.log(window.scrollY)
    if(window.scrollY >= 100){
      Setnavbar(true)
    } else {
      Setnavbar(false)
    }
  }



  window.addEventListener('scroll', BackgroundChange)
  return (
    <>
      <nav className={navbar ? 'navbar-color' : 'navbar active'}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
          a<span style={{ color: '#d1002c' }}>v</span>o
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* {click ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faBars} />}  */}
            {click ? "Menu" : "Menu"} 
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu navbar-size"}>
          {/* <div className="nav-item-all"> */}
            <li className="nav-item"> HOME </li>
            <li className="nav-item"> ABOUT </li>
            <li className="nav-item"> WORK </li>
            <li className="nav-item"> BLOG </li>
            <li className="nav-item"> CONTACT </li>
            {/* </div> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
