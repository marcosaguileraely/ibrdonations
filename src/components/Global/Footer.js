// Dependencies
import React, { Component } from 'react';

// Prop-Types
//import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';
import '../../assets/css/flat.css'

class Footer extends Component {
  /*static PropTypes = {
    copyright: PropTypes.string.isRequired
  };*/

  render() {
    //console.log(this.props);
    //const { copyright } = this.props;

    return (
      <div className="Footer">        
        <div class="pt-5">
          <div class="container">
            <div class="row"> </div>
          </div>
        </div>

        <nav class="navbar navbar-expand-md my-3 navbar-light bg-light" id="footer_bar">
          <div class="container">
            <a class="navbar-brand" href="http://renacerib.org" target="_blank" rel="noopener noreferrer">
                <i class="fa d-inline fa-home"></i><b>&nbsp;renaceribr.org </b>
            </a>
                <i class="fa d-inline fa-phone-square"></i><b>&nbsp;Tel:  (+571) 5268021 </b>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarLightSupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse text-center justify-content-end" id="navbarLightSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item mx-1">
                  <a class="nav-link" href="#"><i class="fa d-inline fa-facebook-square"></i>&nbsp; Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    );
  }
}

export default Footer;
