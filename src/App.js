import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {StyleRoot} from 'radium';

class App extends Component {
    state = {
        sideDrawerShown: false
    };

    sideDrawerHandler = () => {
        this.setState({sideDrawerShown: !this.state.sideDrawerShown});
    };

    render() {
        return (
            <StyleRoot>
            <div>
                <Layout toggleSideDrawer={this.sideDrawerHandler} sideDrawerShown={this.state.sideDrawerShown}>
                    <BurgerBuilder/>
                </Layout>
            </div>
            </StyleRoot>
        );
    }
}

export default App;
