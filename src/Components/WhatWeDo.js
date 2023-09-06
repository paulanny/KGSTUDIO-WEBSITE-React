import React from 'react';
import './WhatWeDo.css';
import { Fragment } from 'react';


const WhatWeDo = (props) => {
  return (
<Fragment>
   <div className="servicesTextsndImg">
      <div className="servicesTexts">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className='serviceimg'>
        <img src={props.imageUrl} alt="Content" />
      </div>
    </div>
    <div className='allservices'></div>
    </Fragment>
  );
};

export default WhatWeDo;
