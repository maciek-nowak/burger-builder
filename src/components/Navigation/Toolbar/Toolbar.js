import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div onClick={props.menuClick}>MENU</div>
            <Logo height='80%'/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;