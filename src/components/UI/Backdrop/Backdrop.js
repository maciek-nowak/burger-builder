import React from 'react';
import './Backdrop.css';
import Radium from 'radium';

const backdrop =(props) => {
    return <div onClick={props.visibilityChange} className={[props.additionalClasses, "Backdrop"].join(' ')} style={props.style}></div>
};

export default Radium(backdrop);