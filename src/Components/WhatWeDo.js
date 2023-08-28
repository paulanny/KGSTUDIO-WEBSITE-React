import React from 'react';
import './WhatWeDo.css';


const WhatWeDo = (props) => {
  return (
   <div className="servicesTextsndImg">
      <div className="servicesTexts">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className='serviceimg'>
        <img src={props.imageUrl} alt="Content" />
      </div>
    </div>
  );
};

export default WhatWeDo;
