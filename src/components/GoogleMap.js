import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaIdBadge } from 'react-icons/fa';
// import getLatLng from '../getLatLng';
// import crime from '../icons/round-sentiment_very_dissatisied-24px.svg';
// import icons from '../icons/icons.js';
// const crime = '../icons'
// import Button from '@material-ui/core/Button';
// import crime from '../icons/round-sentiment_very_dissatisfied-24px.svg';
const AnyReactComponent = ({text}) => <div style={{background: "red", width: 100, height: 100}}>{text}</div>;

class GoogleMap extends Component {
    style = {
        "position": "absolute",
        "right": "0",
        "top": "0",
        "padding": "10px",
        "width": "75%",
        "height": "100%"
    }
    
    // renderMarkers = (group, icon) => {
    //     const { itinerary } = this.props;
    //     const gp = itinerary[group]
    //     if(!gp){
    //         return
    //     }
    //     return gp.map(g=>{
    //         if(!g['lat_lng']){
    //             return
    //         }
    //         const {lat,lng} = g['lat_lng']
    //         return <img lat={lat} lng={lng} src={icon} width={20} height={20}/>
    //     })
    // }

    renderMarkers(map, maps) {
        let marker = new maps.Marker({
          position: {
            lat: -37.81,
            lng: 144.96
        },
          map,
          title: 'Hello World!'
        });
      }

    drawPolygons(map,maps) {
        (new maps.Polygon({
            paths: [
                {lat: -37.81-1, lng: 144.96-1},
                {lat: -37.81+1, lng: 144.96+1},
                {lat: -37.81+1, lng: 144.96-1}
            ],
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        })).setMap(map)

    }
      

    static defaultProps = {
        center: {
            lat: -37.81,
            lng: 144.96
        },
        zoom: 12
    };

    render() {

        const coordinates = [
            {lat: -37.81-10, lng: 144.96-10},
            {lat: -37.81-10, lng: 144.96+10},
            {lat: -37.81+10, lng: 144.96+10},
            {lat: -37.81+10, lng: 144.96-10}
        ]

        // this.setState({ lat, lng } = getLatLng("3000 Australia"));
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys = {{ key: "AIzaSyCOTCo9ek5D5h2D4IUxnb9ZVkoK6-QP0-g" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    style={this.style}
                    onClick={(x,y) => console.log(x,y)}
                    onGoogleApiLoaded={({map, maps}) => this.drawPolygons(map, maps)}
                    >
                    
                    <h3 style={{ height:'3%', width:'3%' }} lat={-37.81} lng={144.96}> <FaIdBadge size={this.props.zoom * 2} /></h3>
                    {/* {this.renderMarkers('crime', crime)} */}
                    {/* <Button lat={-37.81} lng={144.96}></Button> */}
                    {/* <AnyReactComponent  style={{"font": "100%" ,"font-size": "1em"}} lat={-37.81} lng={144.96} text='🚀'  /> */}
                </GoogleMapReact>
            </div>
        )
    }    
}

const mapStateToProps = ({ itinerary }) => ({ itinerary });

export default GoogleMap;