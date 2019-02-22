import React, { Component } from 'react';
import Button from '../../01-atoms/Button/Button';
import fb from '../../images/facebook.png';
import fbhover from '../../images/facebook-hover.png';
import fr from '../../images/flickr.png';
import frhover from '../../images/flickr-hover.png';
import ig from '../../images/instagram.png';
import ighover from '../../images/instagram-hover.png';
import logo from '../../../logo.png';
import './manage-services.css';

class Manage extends Component {

    constructor(props) {
      super(props);
      this.state = {
        fbsrc: fb,
        frsrc: fr,
        igsrc: ig
      };
      this.handleMouseOverfb = this.handleMouseOverfb.bind(this);
      this.handleMouseOutfb = this.handleMouseOutfb.bind(this);
      this.handleMouseOverfr = this.handleMouseOverfr.bind(this);
      this.handleMouseOutfr = this.handleMouseOutfr.bind(this);
      this.handleMouseOverig = this.handleMouseOverig.bind(this);
      this.handleMouseOutig = this.handleMouseOutig.bind(this);
    }

    handleMouseOverfb() {
      this.setState({
        fbsrc: fbhover
      });
    }

    handleMouseOutfb() {
      this.setState({
        fbsrc: fb
      });
    }

    handleMouseOverfr() {
      this.setState({
        frsrc: frhover
      });
    }

    handleMouseOutfr() {
      this.setState({
        frsrc: fr
      });
    }

    handleMouseOverig() {
      this.setState({
        igsrc: ighover
      });
    }

    handleMouseOutig() {
      this.setState({
        igsrc: ig
      });
    }
  
    viewPhotos = () => {
      window.location = 'gallery'
    }
  
    render() {
      return (
        <div className="Manage">
          <h1>Manage Services on Box</h1>
          <h2><Button align="center" fat="true" onClick={this.viewPhotos}>
              View Photos
          </Button></h2>
          <h3>
            <a href="#">
              <img id="greyImage" src={this.state.fbsrc} width = "450" onMouseOver={this.handleMouseOverfb} onMouseOut={this.handleMouseOutfb}></img>
            </a>

            <a href="https://127.0.0.1/flickr-driver/ui/checkauth?post_auth_callback=/bbc-box-photo-app/ui/manage-services">
              <img id="normalImage" src={this.state.frsrc} width = "450" onMouseOver={this.handleMouseOverfr} onMouseOut={this.handleMouseOutfr}></img>
            </a>

            <a href="https://127.0.0.1/instagram-photo-driver/ui/auth?post_auth_callback=/bbc-box-photo-app/ui/manage-services">
              <img id="normalImage" src={this.state.igsrc} width = "450" onMouseOver={this.handleMouseOverig} onMouseOut={this.handleMouseOutig}></img>
            </a>

          </h3>
        </div>
      );
    }
  }

  export default Manage;
