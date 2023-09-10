import React from 'react';
import './BackDrop.css';

const Backdrop = (props) => {
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={cssClasses.join(' ')} onClick={props.closed}></div>;
};

export default Backdrop;
