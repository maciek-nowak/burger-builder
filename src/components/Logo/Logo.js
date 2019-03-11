import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = (props) => {
    return (
        <div className='Logo' style={{height: props.height}}>
            <img alt='logo' src={burgerLogo}/>
        </div>
    );
};

export default logo;