import React, { Component } from 'react';
import logo from './logo.svg';
import parallax from './orlando-welcome-sign-parallax.jpg';
import tiyLogo from './tiy-logo.png';
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
        <div className="parallax-container">
          <img src={tiyLogo} className="tiyLogo" alt="TIY logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <div className="parallax">
            <img src={parallax} className="" alt="parallax" />
          </div>
        </div>
        <section className="container">
          <div className="row">
            <div className="col s12 m6 l4 album">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
              <div className="albumTitle flow-text">Title</div>
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
          </div>
        </section>
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large waves-effect waves-light blue-grey lighten-2" href="#modal1">
            <i className="large material-icons">add</i>
          </a>
        </div>
        {/*<!-- Modal Structure -->*/}
        <div id="modal1" className="modal bottom-sheet">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
