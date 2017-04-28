import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './Header';
import Gallery from './Gallery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <Header />
        <Gallery />
      </div>
    );
  }
}

export default App;
