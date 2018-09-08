import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './GoogleMap.css';
// import getLatLng from '../getLatLng';
// import crime from '../icons/round-sentiment_very_dissatisied-24px.svg';
// import icons from '../icons/icons.js';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const crime = '../icons'
// import Button from '@material-ui/core/Button';

class GoogleMap extends Component {
    style = {
        "position": "absolute",
        "right": "0",
        "top": "0",
        "padding": "10px",
        "width": "75%",
        "height": "100%"
    }
    
    renderMarkers(map, maps) {
        let marker = new maps.Marker({
            position: this.props.center,
            map,
            title: "Please work"
        });
    }
    static defaultProps = {
        center: {
            lat: -37.81,
            lng: 144.96
        },
        zoom: 12
    };

    render() {
        // this.setState({ lat, lng } = getLatLng("3000 Australia"));
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys = {{ key: "AIzaSyCOTCo9ek5D5h2D4IUxnb9ZVkoK6-QP0-g" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    style={this.style}
                    >
                    {/* <Button lat={-37.81} lng={144.96}></Button> */}
                    <AnyReactComponent style={{"font": 2000 ,"size": 2000}} lat={-37.81} lng={144.96} text='🚀'  />
                </GoogleMapReact>
            </div>
        )
    }    
}

export default GoogleMap;