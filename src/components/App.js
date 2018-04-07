// Dependencies
import React, { Component } from 'react';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

import 'font-awesome/css/font-awesome.min.css';

// Assets
/*import '../assets/css/font-awesome.min.css';
import '../assets/css/fontawesome-webfont.eot';*/

//Data
import items from '../data/menu-items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
            title="Donaciones"
            items={items}
        />
        
        <Content />
        
        <Footer 
            copyright= "&copy; Iglesia Bautista Renacer 2018"
        />
      </div>
    );
  }
}

export default App;
