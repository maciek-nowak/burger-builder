import React from 'react';
import './Button.css';

const button = (props) => {
    return <button onClick={props.onClick} className={[props.type, "Button"].join(' ')}>{props.children}</button>
};

export default button;