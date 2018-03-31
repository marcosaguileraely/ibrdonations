// Dependencies
import React, { Component } from 'react';

// Prop-Types
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';

class Footer extends Component {
  static PropTypes = {
    copyright: PropTypes.string.isRequired
  };

  render() {
    console.log(this.props);
    const { copyright } = this.props;

    return (
      <div className="Footer">
        <h4>{ copyright }</h4>
      </div>
    );
  }
}

export default Footer;
