import React from "react";
import "./Navbar.css";
import kaapitLogo from "../assets/kaapitLogo.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbarimg">
        <img src={kaapitLogo} alt="kaapitlogoimage" />
        <nav className="navbarlists">
          <a>About us</a>
          <a>Our Team</a>
          <a>Contact us</a>
          <a>Designs</a>
          <a>Unknown</a>
        </nav>
      </div>
      <div className="btnmenu">
        <button className="bookkdes">Book a Design</button>
        <div className="menu">
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
