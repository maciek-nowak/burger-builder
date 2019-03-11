import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return (
        <>
            <Backdrop visibilityChange={props.orderClose} style={props.style}/>
            <div className='Modal' style={props.style}>
                {props.children}
            </div>
        </>
    );
};

export default modal;