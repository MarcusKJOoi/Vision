import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    filters: {
        population: false, 
        crimeRate: true, 
        school: true
    }
};

const reducer = ((state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE':
            return {
                ...state,
                filters: {
                    ...state.filters    ,
                    [action.id]: !state.filters[action.id]
                }   
            }
        default:
            return state;
    }
})

const store = createStore(reducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
