import React, { Component } from 'react';
import './Homepage.css';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GoogleMapReact from 'google-map-react';

class Homepage extends Component {

    static defaultProps = {
        center: {
            lat: -37.81,
            lng: 144.96
        },
        zoom: 10
    };

    state = {
        population: true,
        crimeRate: false,
        school: false,
        housing: false,
        jobs: false
    }

    _handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {   
        const { classes } = this.props;
        const { population, crimeRate, school, housing, jobs} = this.state;
        return (
            <div style={{ height: '100vh', width: '100%' }} className="Homepage">
            {/* <div className={classes.root}> */}
                <FormControl component="fieldset" className="Homepage-formControl">
                <FormLabel component="legend">Select what to display</FormLabel>
                <FormGroup>
                    <FormControlLabel
                    control={
                        <Checkbox checked={population} onChange={this._handleChange('population')} value="population" />
                    }
                    label="Population"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={crimeRate} onChange={this._handleChange('crimeRate')} value="crimeRate" />
                    }
                    label="Crime rate"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={school} onChange={this._handleChange('school')} value="school" />
                    }
                    label="Schools"
                    />
                </FormGroup>
            </FormControl>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCOTCo9ek5D5h2D4IUxnb9ZVkoK6-QP0-g" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                style={
                    {
                    "position": "absolute",
                    "right": "0",
                    "top": "0",
                    "padding": "10px",
                    "width": "62%",
                    "height": "100%"}
                }
            >
            </GoogleMapReact>
            </div>
        )
    };
}

// Homepage.propTypes = {
//     classes: PropTypes.object.isRequired,
// };


export default Homepage;