import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaExclamation } from 'react-icons/fa';
import { FaSchool } from 'react-icons/fa';
import { connect } from 'react-redux';
import '../firebaseConn.mjs';
import crime_array from '../firebaseConn.mjs';
// import Icon from '../icons/icons.js';
// import getLatLng from '../getLatLng';

class GoogleMap extends Component {
    style = {
        "position": "absolute",
        "right": "0",
        "top": "0",
        "padding": "10px",
        "width": "75%",
        "height": "100%"
    }
    
    // Icon(data) {
    //     for(let i in data) {
    //         return <h3 style={{ height:'3%', width:'3%' }} lat={i.lat} lng={i.lng}> <FaIdBadge size={this.props.zoom * 2} /></h3>
    //     }
    // }

    // getData(jsonFile) {
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

    // renderMarkers(map, maps) {
    //     let marker = new maps.Marker({
    //       position: {
    //         lat: -37.81,
    //         lng: 144.96
    //     },
    //       map: map,
    //       title: 'Hello World!'
    //     });
    //     return marker;
    //   }

<<<<<<< HEAD
    drawPolygons(map, maps, path) {
        let boundary = (new maps.Polygon({
            paths: 
            [ 
                {
                lat : 143.73960263,
                lng : -37.5607152
                }, {
                lat : 143.74336264,
                lng : -37.55872288
                }, {
                lat : 143.7447514,
                lng : -37.55789937
                }, {
                lat : 143.74918916,
                lng : -37.55526766
                }, {
                lat : 143.75068375,
                lng : -37.55438125
                }, {
                lat : 143.75129968,
                lng : -37.55397704
                }, {
                lat : 143.75798919,
                lng : -37.54958656
                }, {
                lat : 143.7588456,
                lng : -37.54901879
                }, {
                lat : 143.75911965,
                lng : -37.54884845
                }, {
                lat : 143.76356199,
                lng : -37.5459285
                }, {
                lat : 143.77069822,
                lng : -37.54123705
                }, {
                lat : 143.77580819,
                lng : -37.53782865
                }, {
                lat : 143.77610529,
                lng : -37.5376424
                }, {
                lat : 143.7803153,
                lng : -37.53941761
                }, {
                lat : 143.78305898,
                lng : -37.5405744
                }, {
                lat : 143.7858779,
                lng : -37.54175487
                }, {
                lat : 143.78725996,
                lng : -37.54232498
                }, {
                lat : 143.78547197,
                lng : -37.55205599
                }, {
                lat : 143.78527304,
                lng : -37.55314298
                }, {
                lat : 143.78281503,
                lng : -37.56667102
                }, {
                lat : 143.76320101,
                lng : -37.56436903
                }, {
                lat : 143.76146201,
                lng : -37.56416797
                }, {
                lat : 143.75558804,
                lng : -37.56348704
                }, {
                lat : 143.74801102,
                lng : -37.56260897
                }, {
                lat : 143.7381992,
                lng : -37.56147218
                }, {
                lat : 143.73831857,
                lng : -37.56139553
                }, {
                lat : 143.73960263,
                lng : -37.5607152
                } 
            ],
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        }));
        boundary.setMap(map);
    }
=======
    // drawPolygons(map,maps) {
    //     (new maps.Polygon({
    //         paths: [
    //             {lat: -37.81-1, lng: 144.96-1},
    //             {lat: -37.81+1, lng: 144.96+1},
    //             {lat: -37.81+1, lng: 144.96-1}
    //         ],
    //       strokeColor: '#FF0000',
    //       strokeOpacity: 0.8,
    //       strokeWeight: 2,
    //       fillColor: '#FF0000',
    //       fillOpacity: 0.35
    //     })).setMap(map)
    // }
>>>>>>> 90e3a3d8f7d5d4ebd9595a8f36c977c50c8766ff
      
    // checkFilters(map, maps) {
    //     if(this.props.filter.crime) this.drawPolygons(map, maps);
    // }

    static defaultProps = {
        center: {
            lat: -37.81,
            lng: 144.96
        },
        zoom: 12
    };

    // map is the Map object that we make in the website
    // maps refers to the Google Maps API
    // you can pass in other stuff as well, to fill with info
<<<<<<< HEAD
    // renderMarkers(map, maps, data) {
    //     for (let a in data) {
    //         let marker = new maps.Marker({
    //                 position: a.location,
    //                 map: map,
    //             });
    //         return marker;
    //     }
=======
    renderMarkers(map, maps, data) {
        for (let a in data) {
            let marker = new maps.Marker({
                    position: a.location,
                    map: map,
                });
            return marker;
        }
>>>>>>> 90e3a3d8f7d5d4ebd9595a8f36c977c50c8766ff
        // let marker = new maps.Marker({
        //     id: 'test',
        //     position: { lat: -37.81, lng: 144.96},
        //     map: map,
        //     title: 'Hello World!'
        // });
        // console.log(data);
        // return marker;
<<<<<<< HEAD
    // }

    // _onClick(obj) {
    //     console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
        // let userLat = parseFloat(obj.lat).toFixed(2);
        // let userLng = parseFloat(obj.lng).toFixed(2);
        // let userCoordinates = (userLat, userLng);
    // }

    render() {
=======
    }

    _onClick(obj) {
        console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
        // let userLat = parseFloat(obj.lat).toFixed(2);
        // let userLng = parseFloat(obj.lng).toFixed(2);
        // let userCoordinates = (userLat, userLng);
    }
    // let geocoder = new GoogleMap.
    // reverseGeocodeLatLng(geocode, map, infoWindow, userInput) {
    //     geocoder.
    // }

    render() {

        // const coordinates = [
        //     {lat: -37.81-10, lng: 144.96-10},
        //     {lat: -37.81-10, lng: 144.96+10},
        //     {lat: -37.81+10, lng: 144.96+10},
        //     {lat: -37.81+10, lng: 144.96-10}
        // ]

        // this.setState({ lat, lng } = getLatLng("3000 Australia"));
>>>>>>> 90e3a3d8f7d5d4ebd9595a8f36c977c50c8766ff
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys = {{ key: "AIzaSyCOTCo9ek5D5h2D4IUxnb9ZVkoK6-QP0-g" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    style={this.style}
                    onClick={(x,y) => console.log(x,y)}   
<<<<<<< HEAD
                    onGoogleApiLoaded={({map, maps}) => this.drawPolygons(map, maps)}                 
                    yesIWantToUseGoogleMapApiInternals={true}
                    >
=======
                    onGoogleApiLoaded={(map, maps) => this.renderMarkers(map, maps, crime_array)}                 
                    yesIWantToUseGoogleMapApiInternals={true}
                    >
                    {/* <Icon props={ {data: crime_array}}></Icon> */}
>>>>>>> 90e3a3d8f7d5d4ebd9595a8f36c977c50c8766ff
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.8152065} lng={144.966937}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.8152065} lng={144.968937}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.8152065} lng={144.970937}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.8161444} lng={144.9804594}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.8114504} lng={144.9253974}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.8245483} lng={144.963937}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.8170652} lng={144.9419122}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.7960195} lng={144.9006313}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.8146251} lng={144.8456217}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.8146251} lng={144.847217}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.819811} lng={144.8813738}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.835209} lng={144.8786231}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.8571449} lng={144.8813738}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.859343} lng={144.8126334}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.859343} lng={144.8146334}> <FaExclamation size={this.props.zoom * 2} /></h3>
                    <h3 hidden={!this.props.filters.crimeRate} style={{ height:'3%', width:'3%' }} lat={-37.859343} lng={144.8166334}> <FaExclamation size={this.props.zoom * 2} /></h3>

                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.8152065} lng={144.7090333}> <FaSchool size={this.props.zoom * 2} /></h2>
                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.780598} lng={144.7122282}> <FaSchool size={this.props.zoom * 2} /></h2>
                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.784581} lng={144.8138053}> <FaSchool size={this.props.zoom * 2} /></h2>                    
                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.722259} lng={144.9029772}> <FaSchool size={this.props.zoom * 2} /></h2>
                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.6966685} lng={144.70027816}> <FaSchool size={this.props.zoom * 2} /></h2>
                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.704377} lng={144.7019467}> <FaSchool size={this.props.zoom * 2} /></h2>
                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.711568} lng={144.60819202}> <FaSchool size={this.props.zoom * 2} /></h2>
                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.812887} lng={144.954425}> <FaSchool size={this.props.zoom * 2} /></h2>
                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.79107126} lng={144.8940131}> <FaSchool size={this.props.zoom * 2} /></h2>
                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.782934} lng={144.845687}> <FaSchool size={this.props.zoom * 2} /></h2>
                    <h2 hidden={!this.props.filters.school} style={{ height:'3%', width:'3%' }} lat={-37.756022} lng={144.814184}> <FaSchool size={this.props.zoom * 2} /></h2>
<<<<<<< HEAD
=======

>>>>>>> 90e3a3d8f7d5d4ebd9595a8f36c977c50c8766ff
                
                </GoogleMapReact>
            </div>
        )
    }    
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(GoogleMap);