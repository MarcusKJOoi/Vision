import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './Homepage';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Homepage} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
