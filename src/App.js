import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Album from './Album';
import base from './rebase';
window.base = base; //Use base from console

import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {

  constructor(){
    super();
    this.state = {
      albums: []
    };
  }
  componentDidMount(){
    base.syncState(`/albums/`,{
      context: this,
      state: 'albums',
      asArray: true
    })
  }
  render() {
    return (
      <Router forceRefresh={true}>
        <div className="App">
          <Header />
          <Route exact path="/:filter?" render={(defaultProps) =>  <Gallery/>} />
          <Route path="/album/:albumId?" render={(defaultProps) =>  <Album albums={this.state.albums} {...defaultProps}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
