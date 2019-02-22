import React, { Component } from 'react';
import Button from '../../01-atoms/Button/Button';
import logo from '../../../logo.png';
import './welcome.css';

class Welcome extends Component {

  getStarted = () => {
    window.parent.location = '/bbc-box-photo-app/ui/manage-services'
  }

  render() {
    return (
      <div className="Welcome">
        <header className="welcome-header">
          <img src={logo} className="welcome-logo" alt="logo" />
          <h1>Welcome to Photos on Box</h1>
          <p>Photos allows you to compile your data from your favourite photo services</p>
          <Button fat="true" onClick={this.getStarted}>
              Get Started
          </Button>
          
        </header>
      </div>
    );
  }
}

export default Welcome;
