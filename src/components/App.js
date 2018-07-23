// Dependencies
import React, { Component } from 'react';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Assets
import 'font-awesome/css/font-awesome.min.css';
import PropType from 'prop-types';

//Data
import items from '../data/menu-items';

class App extends Component {

  static propTypes = {
    children : PropType.object.isRequired
  }

  render() {

    const { children } = this.props;
    console.log("Here props: ");
    console.log(this.props);

    return (
      <div className="App">
        <Header 
            title="Donaciones"
            items={items}
        />
        
        <Content body={children} />
        
        <Footer 
            copyright= "&copy; Iglesia Bautista Renacer 2018"
        />
      </div>
    );
  }
}

export default App;
