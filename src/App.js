import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Album from './Album';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/*<div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>*/}
          <Header />
          <Route exact path="/:filter?" render={(defaultProps) =>  <Gallery {...defaultProps}/>} />
          <Route path="/album/:filter?" render={(defaultProps) =>  <Album {...defaultProps}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
