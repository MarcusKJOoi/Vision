import React, { Component } from 'react';
import './Filter.css';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            population: true,
            crimeRate: false,
            school: false,
            housing: false,
            jobs: false
        }
    }

    _handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return(
            <div style={{ height: '100vh', width: '100%' }} className="Filter">
            {/* <div className={classes.root}> */}
                <FormControl component="fieldset" className="Filter-formControl">
                {/* <FormLabel component="legend">Select what to display</FormLabel> */}
                <FormGroup>
                    <FormControlLabel
                    control={
                        <Checkbox checked={this.state.population} onChange={this._handleChange('population')} value="population" />
                    }
                    label="Population"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={this.state.crimeRate} onChange={this._handleChange('crimeRate')} value="crimeRate" />
                    }
                    label="Crime rate"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={this.state.school} onChange={this._handleChange('school')} value="school" />
                    }
                    label="Schools"
                    />
                </FormGroup>
            </FormControl>
            </div>
        )
    }
}

export default Filter;