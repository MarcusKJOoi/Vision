import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Filter from './components/Filter.js';
import GoogleMap from './components/GoogleMap.js';
import './components/Filter.css';
import $ from 'jquery';

const crime = require('./crimeRate.json');

class Homepage extends Component {


    // getCrimeData(jsonFile) {
    //     let arr = [];
    //     for(let x in jsonFile) {
    //         arr.push([x, jsonFile[x]]);
    //     }
    //     console.log(arr);
    //     for(let y in arr) {
    //         let z = y[0]
    //         new GoogleMap.maps.Map
    //     }
    // }

    render() {  
        // this.getCrimeData(crime); 
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