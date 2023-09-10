import React from "react";
import './Hero.css';

const Hero = (props) => {
  return (
    <div className="heropage">
      <div className="heroimage__texts">
        <h2>KAAPIT GRAPHICS STUDIO!</h2>
        <p>
          Minim ea nostrud proident duis veniam dolor duis exercitation. Aliquip
          ut do reprehenderit do nisi. Officia in nostrud occaecat excepteur
          dolor enim elit id tempor. Minim aliquip velit veniam dolor nostrud.
          Aute et anim ullamco et ullamco sunt esse in esse magna non sunt.
          Nulla adipisicing minim deserunt aliqua quis cillum laborum pariatur
          minim labore commodo incididunt. 
        </p>
      </div>
      <button className="herobookdes" onClick={props.showModal}>Book a Design</button>
    </div>
  );
};

export default Hero;
