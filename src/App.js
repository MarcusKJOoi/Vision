import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './Homepage';

class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="App">
            <Switch>
              {/* <header className="App-header"> */}
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* <h1 className="App-title">Welcome  to React</h1> */}
              {/* </header> */}
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
