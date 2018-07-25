// Dependencies
import React, { Component } from 'react';

class Resumen extends Component {

  constructor(props){
    super(props);
    
    this.nextPath      = this.nextPath.bind(this);
  }

  nextPath = () => {
      console.log(this.props);
      this.props.history.push('');
  }

  render() {
    return (
      <div className="Resumen">
        <main>
          <div className="album py-3 bg-light" >
            <div className="container">
              <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-10">
                  <div class="card">
                      <h5 class="card-header">Resumen de la donación</h5>
                      <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
                </div>
                <div className="col-md-1">
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Resumen;