import React from "react";
import { useState } from "react";
import "./Navbar.css";
import kaapitLogo from "../assets/kaapitLogo.png";

// function NavBar() {
//   return (
    // <div className="navbar">
    //   <div className="navbarimg">
    //     <img src={kaapitLogo} alt="kaapitlogoimage" />
    //     <nav className="navbarlists">
    //       <a>About us</a>
    //       <a>Our Team</a>
    //       <a>Contact us</a>
    //       <a>Designs</a>
    //       <a>Unknown</a>
    //     </nav>
    //   </div>
    //   <div className="mobilemenulinks">
    //     <a>About us</a>
    //     <a>Our Team</a>
    //     <a>Contact us</a>
    //     <a>Designs</a>
    //     <a>Unknown</a>
    //   </div>
    //   <div className="btnmenu">
    //     <button className="bookkdes">Book a Design</button>
    //     <div className="menu">
    //       <div className="first"></div>
    //       <div className="second"></div>
    //       <div className="third"></div>
    //     </div>
    //   </div>
    // </div>
  // );
// }

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      {/* ... other navbar content ... */}
      <div className="btnmenu">
        <button className="bookkdes" >Book a Design</button>
        <div {`menu ${isMobileMenuOpen ? 'menuclose' : ''}`} >
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobilemenulinks">
          <a>About us</a>
          <a>Our Team</a>
          <a>Contact us</a>
          <a>Designs</a>
          <a>Unknown</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;



