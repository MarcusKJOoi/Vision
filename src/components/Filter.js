import React, { Component } from 'react';
import './Filter.css';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
class Filter extends Component {

    _handleChange = event => {
        this.props.dispatch({ type: 'TOGGLE', id: event.target.value });
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
                        <Checkbox checked={this.props.filters.population} onChange={this._handleChange} value="population" />
                    }
                    label="Population"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={this.props.filters.crimeRate} onChange={this._handleChange} value="crimeRate" />
                    }
                    label="Crime Rate" 
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={this.props.filters.school} onChange={this._handleChange} value="school" />
                    }
                    label="Schools"
                    />
                </FormGroup>
            </FormControl>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps) (Filter);