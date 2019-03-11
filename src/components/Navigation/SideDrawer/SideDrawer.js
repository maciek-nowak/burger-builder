import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const sideDrawer = (props) => {

    return (
        <div>
            <BackDrop
                additionalClasses='InvisibleOnDesktop'
                visibilityChange={props.toggleSideDrawer}
                style={{display: props.sideDrawerShown ? 'initial' : 'none', zIndex: 190, '@media (min-width: 500px)': {
                    display: 'none'
                }}}/>
            <div className={['SideDrawer', props.sideDrawerShown ? 'Open' : 'Close'].join(' ')}>
                <Logo height='11%'/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;