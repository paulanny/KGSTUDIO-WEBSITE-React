import React from 'react';
import './Navbar.css';
import kaapitLogo from '../assets/kaapitLogo.png';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbarimg'>
        <img src={kaapitLogo} alt='kaapitlogoimage'/>
      </div>
      <div className='navbarlists'>
        <li>about us</li>
        <li>KG Studio</li>
        <li>about us</li>
        <li>what we do</li>
        <li>about us</li>
      </div>
    </div>
  );
}

export default NavBar;
