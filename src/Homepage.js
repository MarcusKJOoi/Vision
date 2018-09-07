import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Filter from './components/Filter.js';
import Map from './components/Map.js';

class Homepage extends Component {

    render() {   
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        Select what to display: 
                    </Toolbar>
                </AppBar>
                <Filter></Filter>
                <Map></Map>
            </div>
        )
    };
}

export default Homepage;