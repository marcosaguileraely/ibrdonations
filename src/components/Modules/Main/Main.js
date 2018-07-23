import React, { Component } from 'react';
import axios from 'axios';

//import css & js libraries
import './Main.css';

class Content extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      lastname: '',
      dni_type: '',
      dni_number: '',
      phone: '',
      email: '',
      donation_value: 0,
      fee_value: 900,
      fee_value_percentage: 3.49,
      total_donation: 0
    };

    this.handleChange             = this.handleChange.bind(this);
    this.handleSendData           = this.handleSendData.bind(this);
    this.handleDonationCalculator = this.handleDonationCalculator.bind(this);
    this.nextPath                 = this.nextPath.bind(this);

  }

  nextPath = () => {
      console.log(this.props);
      this.props.history.push('/resume');
  }

  componentDidMount(){
    /*var postData = {
      email: "test@test.com",
      password: "password"
    };*/

    let axiosConfig = {
      headers: {
          'X-Parse-Application-Id': 'ibrserver',
          'X-Parse-Master-Key': 'Maranata2017$$',
          'Content-Type': 'application/json;charset=UTF-8'
      }
    };

    axios.get('https://ibrparseserver.herokuapp.com/parse/classes/Donations', axiosConfig)
      .then(res => {
        console.log(res.data);
        //const persons = res.data;
        //this.setState({ persons });
      }
    )
  }

  handleChange(event) {
    if(event.target.name === "i_name"){
      this.setState({ name: event.target.value });
      console.log(event.target.value);

    }if(event.target.name === "i_lastname"){
      this.setState({ lastname: event.target.value });
      console.log(event.target.value);

    }if(event.target.name === "i_dni_type"){
      this.setState({ dni_type: event.target.value });
      console.log(event.target.value);

    }if(event.target.name === "i_dni_number"){
      this.setState({ dni_number: event.target.value });
      console.log(event.target.value);

    }if(event.target.name === "i_phone"){
      this.setState({ phone: event.target.value });
      console.log(event.target.value);

    }if(event.target.name === "i_email"){
      this.setState({ email: event.target.value });
      console.log(event.target.value);

    }if(event.target.name === "i_donation_value"){
      this.setState({ 
        donation_value: event.target.value 
      });
      console.log(event.target.value);
      this.handleDonationCalculator();
      
    }if(event.target.name === "i_donation_target"){
      this.setState({ donation_value: event.target.value });
      console.log(event.target.value);
    }
  }

  handleSendData(){
      console.log('Your data is:\n' 
      + this.state.name + "\n" 
      + this.state.lastname + "\n"
      + this.state.phone + "\n"
      + this.state.cellphone + "\n"
      + this.state.email );

      var postData = {
        "name": this.state.name,
        "lastname": this.state.lastname,
        "phone": this.state.phone,
        "cellphone": this.state.cellphone,
        "email": this.state.email
      }

      let axiosConfig = {
        headers: {
            'X-Parse-Application-Id': 'ibrserver',
            'X-Parse-Master-Key': 'Maranata2017$$',
            'Content-Type': 'application/json;charset=UTF-8'
        }
      };

      console.log("Payload: " + JSON.stringify(postData));

      axios.post('https://ibrparseserver.herokuapp.com/parse/classes/Donations', postData, axiosConfig)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleDonationCalculator(){
    this.setState({ 
      total_donation: (this.state.donation_value + 100)/** this.state.fee_value_percentage + this.state.fee_value*/
    });
    console.log("===> " + this.state.total_donation);
  }

  //Rendering JS
  render() {
    return (
      <div className="Content">
        <div className="py-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Formulario para donaciones</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12">
                <hr className="mb-1"></hr>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 order-md-2">
              
              <h4 className="d-flex mb-3 justify-content-center">
                <b>Detalles de la donación</b>
              </h4>

              <div className="col-md-12 mb-3">
                  <p className="lead">Cantidad a donar</p>
                  <div className="input-group">
                  <input type="text" 
                         className="form-control form-control-lg" 
                         name="i_donation_value" 
                         placeholder="20000"
                         min="0" 
                         required="true" onChange={this.handleChange}></input>
                    <div className="input-group-append">
                      <span className="input-group-text" id="rightGreen">$</span>
                    </div>
                  </div>
                  <label htmlFor="donation_value">Ingrese la cantidad a donar. Por favor no ingrese comas ni puntos.&nbsp;</label>
              </div>

              {/*<ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    <div>
                      <h6 className="my-0"><b>Aporte donación</b></h6>
                      <small className="text-muted">Cantidad definidad&nbsp;por el donante</small>
                    </div>
                    <span className="text-muted">$1200000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0"><b>Tarifa transaccional</b></h6> <small>Tarifa por pago en línea</small> </div> <span className="text-success">$5900</span> </li>
                  <li className="list-group-item d-flex justify-content-between"> 
                    <span>Total</span> <b>$1205900</b>
                  </li>
                </ul>*/}

              <hr></hr>
              <button 
                className="btn btn-lg btn-block btn-secondary" 
                type="submit"
                onClick={this.nextPath}>Continuar con el pago</button>

            </div>

            <div className="col-md-8 order-md-1">
              <h4 className="mb-2"><b>Información del donante</b></h4>
              <form className="needs-validation" noValidate="">
                
                <div className="row">
                  <div className="col-md-6 mb-2"> <label htmlFor="i_name">Nombres</label>
                    <input autoComplete='given-name' type="text" className="form-control" name="i_name" id="i_name" placeholder="" onChange={this.handleChange}></input>
                    <div className="invalid-feedback"> Ingrese nombre(s) </div>
                  </div>

                  <div className="col-md-6 mb-2"> <label htmlFor="i_lastname">Apellidos</label>
                    <input autoComplete='given-name' type="text" className="form-control" name="i_lastname" placeholder="" onChange={this.handleChange}></input>
                    <div className="invalid-feedback"> Ingrese apellido(s) </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-2"> <label htmlFor="i_dni_type">Tipo de Identificación</label> 
                  <select className="custom-select d-block w-100" name="i_dni_type" onChange={this.handleChange}>
                      <option defaultValue="true" value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                      <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                      <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                      <option value="Pasaporte">Pasaporte</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-2"> <label htmlFor="i_dni_number">No. Identificación</label>
                    <input autoComplete='given-name' type="text" className="form-control" name="i_dni_number" onChange={this.handleChange}></input>
                  </div>
                </div>

                <div className="mb-2"> <label htmlFor="i_phone">No. teléfono móvil</label>
                    <input autoComplete='given-name' type="tel" className="form-control" name="i_phone" placeholder="" onChange={this.handleChange}></input>
                    <div className="invalid-feedback"> Ingrese número de telefono móvil </div>
                </div>

                <div className="mb-2"> <label htmlFor="i_email">Correo electrónico</label>
                  <input autoComplete='given-name' type="email" className="form-control" name="i_email" onChange={this.handleChange}></input>
                  <div className="invalid-feedback"> Please enter a valid email address. </div>
                </div>
                
                <div className="mb-2"> <label htmlFor="i_address">Dirección de dominicilio</label>
                  <input autoComplete='given-name' type="text" className="form-control" name="i_address" onChange={this.handleChange}></input>
                  <div className="invalid-feedback"> Ingrese dirección de domicilio </div>
                </div>
                
                <h4 className="mb-2"><b>Con mi donación quiero apoyar a:</b></h4>

                <div className="d-block my-2">

                  <select className="custom-select d-block w-100" name="i_donation_target" onChange={this.handleChange}>
                      <option defaultValue="true" value="Ministerio">Ministerio</option>
                      <option value="Canasta de Amor">Canasta de Amor</option>
                      <option value="Misiones">Misiones</option>
                  </select>
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
