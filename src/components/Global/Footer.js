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

        <div class="py-5 bg-dark text-white">
          <div class="container">
            <div class="row">
              <div class="col-md-6 text-center align-self-center">
                
                <p class="mb-5">
                  <strong>
                    Iglesia Bautista Renacer
                  </strong>
                    <abbr title="">Dirección:</abbr> Cl. 168 #52-38 <br />
                    <abbr title="">Dirección:</abbr> Bogotá D.C, Colombia
                    <abbr title="Phone">Teléfono:</abbr> +57 1 5268021
                </p>

                <div class="my-3 row">
                    <div class="col-4">
                      <a href="https://www.facebook.com"><i class="fa fa-3x fa-facebook"></i></a>
                    </div>
                    <div class="col-4">
                      <a href="https://twitter.com"><i class="fa fa-3x fa-twitter"></i></a>
                    </div>
                    <div class="col-4">
                      <a href="https://www.instagram.com"><i class="fa fa-3x fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-md-6 p-0">
                    <img class="img-fluid" src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDW8nO9JhT_pEjebobq9pgUF2cEp0EUb1I&amp;&amp;markers=folsom+Ave+san+francisco&amp;center=folsom+Ave+san+francisco&amp;zoom=16&amp;size=640x300&amp;sensor=false&amp;scale=2"></img>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
