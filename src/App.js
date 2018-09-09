import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './Homepage';
// import firebase from 'firebase';
// import firebase from 'firebase/app';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
            <Switch>
              {/* <header className="App-header"> */}
              {/* <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p> */}
              <Route exact path="/" component={Homepage} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
