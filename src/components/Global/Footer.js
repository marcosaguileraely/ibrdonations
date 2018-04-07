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
        {/* <h4>{ copyright }</h4> */}
        
        <div class="pt-5">
          <div class="container">
            <div class="row"> </div>
          </div>
        </div>

        <nav class="navbar navbar-expand-md my-3 navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#"><b>Navbar Light</b></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarLightSupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse text-center justify-content-end" id="navbarLightSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item mx-1">
                  <a class="nav-link" href="#"><i class="fa d-inline fa-facebook-square"></i>&nbsp; share</a>
                </li>
                <li class="nav-item mx-1">
                  <a class="nav-link" href="#"><i class="fa d-inline fa-twitter"></i>&nbsp; tweet</a>
                </li>
                <li class="nav-item mx-1">
                  <a class="nav-link" href="#"><i class="fa d-inline fa-pinterest"></i>&nbsp; pin</a>
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
