import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    style = {
        "position": "absolute",
        "right": "0",
        "top": "0",
        "padding": "10px",
        "width": "75%",
        "height": "100%"
    }

    constructor(props) {
        super(props);
    }
    
    static defaultProps = {
        center: {
            lat: -37.81,
            lng: 144.96
        },
        zoom: 10
    };

    render() {
        return (
            <div> 
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCOTCo9ek5D5h2D4IUxnb9ZVkoK6-QP0-g" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    style={this.style}
                >
                </GoogleMapReact>
            </div>
        )
    }    
}

export default Map;