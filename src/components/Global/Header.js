// Dependencies
import React, { Component } from 'react';

// Prop-Types
//import PropTypes from 'prop-types';

// Assets
//import logo from './images/logo.svg';
import './css/Header.css';
import '../../assets/css/flat.css'

class Header extends Component {
  /*static PropTypes = {
      //title: PropTypes.string.isRequired,
      //items: PropTypes.array.isRequired
  };*/

  render() {
    console.log(this.props);
    //const {title, items} = this.props;

    return (
      <div className="Header">
        <div className="text-center section-secondary py-2" id="greenHead" >
          <div className="container py-5">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 mb-0">Iglesia Bautista Renacer</h1>
              </div>
            </div>
          </div>
        </div>
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
          
          <ul className="Menu">
          
            { items && items.map(
              (item, key) => 
                    <li key={key}> {item.title} </li>
              )
            }
          
          </ul>

        </header> */}
      </div>
    );
  }
}

export default Header;
