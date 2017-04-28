import React, { Component } from 'react';
import logo from './logo.svg';
import parallax from './orlando-welcome-sign-parallax.jpg';
import tiyLogo from './tiy-logo.png';

class Header extends Component {

  render () {
    return (
      <div className="parallax-container">
        <img src={tiyLogo} className="tiyLogo" alt="TIY logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <div className="parallax">
          <img src={parallax} className="" alt="parallax" />
        </div>
      </div>
    )
  }
}

export default Header
