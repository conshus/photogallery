import React, { Component } from 'react';
import logo from './logo.svg';
import parallax from './orlando-welcome-sign-parallax.jpg';
import tiyLogo from './tiy-logo.png';
import { Link } from 'react-router-dom';


class Header extends Component {

  render () {
    return (
      <div className="parallax-container">
        <Link to="/">
          <img src={tiyLogo} className="tiyLogo" alt="TIY logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className="parallax">
          <img src={parallax} className="" alt="parallax" />
        </div>
      </div>
    )
  }
}

export default Header
