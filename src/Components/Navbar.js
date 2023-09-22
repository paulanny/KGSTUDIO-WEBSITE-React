import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import kaapitLogo from "../assets/kaapitLogo.png";

function NavBar(props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbarimg">
        <img src={kaapitLogo} alt="kaapitlogoimage" />
        <nav className="navbarlists">
          <a>
            About us
            <span></span>
          </a>
          <a>
            Our Team
            <span></span>
          </a>
          <a>
            Contact us
            <span></span>
          </a>
          <a>
            Designs
            <span></span>
          </a>
          <a>
            Unknown
            <span></span>
          </a>
        </nav>
      </div>

      <div className="btnmenu">
        <button className="bookkdes" onClick={props.showModal}>
          Book a Design
        </button>
        <div
          className={`menu ${isMobileMenuOpen ? "menuclose" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </div>
      </div>

      {/* <div
        className={`backgrounddis ${isMobileMenuOpen ? "backgroundclose" : ""}`}
      > */}
        {/* <div className="spandiv"> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </div> */}
        <div
        onClick={toggleMobileMenu}
          className={`mobilemenulinks ${
            isMobileMenuOpen ? "mobilemenuOpen" : ""
          }`}
        >
          <a onClick={toggleMobileMenu}>
            About us
            <span></span>
          </a>
          <a onClick={toggleMobileMenu}>
            Our Team
            <span></span>
          </a>
          <a onClick={toggleMobileMenu}>
            Contact us
            <span></span>
          </a>
          <a onClick={toggleMobileMenu}>
            Designs
            <span></span>
          </a>
          <a onClick={toggleMobileMenu}>
            Unknown
            <span></span>
          </a>
          <button className="menubookkdes" onClick={props.showModal}>
            Book a Design
          </button>
        </div>
      </div>
    //  </div>
  );
}
export default NavBar;
