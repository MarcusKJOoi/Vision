import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Filter from './components/Filter.js';
import GoogleMap from './components/GoogleMap.js';
import './components/Filter.css';

class Homepage extends Component {
    render() {  
        // this.getData(crime); 
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        Select what to display: 
                    </Toolbar>
                </AppBar>
                <Filter></Filter>
                <GoogleMap></GoogleMap>
            </div>
        )
    };
}


export default Homepage;