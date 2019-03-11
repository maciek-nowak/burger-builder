import React from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
    return (
        <>
            <Toolbar menuClick={props.toggleSideDrawer}/>
            <SideDrawer toggleSideDrawer={props.toggleSideDrawer} sideDrawerShown={props.sideDrawerShown}/>
            <main className="Content">
                {props.children}
            </main>
        </>
    )
};

export default layout;