import React, { Component } from 'react';
import axios from 'axios';

//import css & js libraries
import './css/Content.css';

class Content extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      lastname: '',
      phone: '',
      cellphone: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSendData = this.handleSendData.bind(this);
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
    }if(event.target.name === "i_lastname"){
      this.setState({ lastname: event.target.value });
    }if(event.target.name === "i_phone"){
      this.setState({ phone: String(event.target.value) });
    }if(event.target.name === "i_cellphone"){
      this.setState({ cellphone: String(event.target.value) });
    }if(event.target.name === "i_email"){
      this.setState({ email: event.target.value });
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

  //Rendering JS
  render() {
    return (
      <div className="Content">

        <div class="py-2">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2>Formulario para Donaciones</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12">
                <hr class="mb-4"></hr>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4 order-md-2">
              
              <h4 class="d-flex mb-3 justify-content-center">
                <span class="text-muted"><b>Detalles de la Donación</b></span>
              </h4>

              <div class="col-md-12 mb-3">
                  <p class="lead">Cantidad a donar</p>
                  <div class="input-group">
                  <input type="number" class="form-control form-control-lg" name="donation_value" placeholder="20000" required="true"></input>
                    <div class="input-group-append">
                      <span class="input-group-text">$</span>
                    </div>
                  </div>
                  <label for="donation_value">Ingrese la cantidad a donar. Por favor no ingrese comas ni puntos.&nbsp;</label>
                  <div class="invalid-feedback"> Ingrese la cantidad a donar</div>
              </div>

              <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between">
                    <div>
                      <h6 class="my-0"><b>Aporte donación</b></h6>
                      <small class="text-muted">Cantidad definidad&nbsp;por el donante</small>
                    </div>
                    <span class="text-muted">$1200000</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between bg-light">
                    <div class="text-success">
                      <h6 class="my-0"><b>Tarifa transaccional</b></h6> <small>Tarifa por pago en línea</small> </div> <span class="text-success">$5900</span> </li>
                  <li class="list-group-item d-flex justify-content-between"> 
                    <span>Total&nbsp;Aporte + Tarifa</span> <b>$1205900</b>
                  </li>
              </ul>

              <hr></hr>
              <button class="btn btn-lg btn-block btn-secondary" type="submit">Continuar con el pago</button>

            </div>

            <div class="col-md-8 order-md-1">
              <h4 class="mb-3"><b>Información del Donante</b></h4>
              <form class="needs-validation" novalidate="">
                <div class="row">
                  <div class="col-md-6 mb-3"> <label for="i_firstname">Nombres</label>
                    <input type="text" class="form-control form-control-sm" name="i_firstname" placeholder="" value="" required=""></input>
                    <div class="invalid-feedback"> Ingrese nombre(s) </div>
                  </div>
                  <div class="col-md-6 mb-3"> <label for="i_lastname">Apellidos</label>
                    <input type="text" class="form-control form-control-sm" name="i_lastname" placeholder="" value="" required=""></input>
                    <div class="invalid-feedback"> Ingrese apellido(s) </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3"> <label for="i_dni_type">Tipo de Identificación</label> 
                  <select class="custom-select d-block w-100 form-control-sm" name="i_dni_type" required="">
                      <option value="">Choose...</option>
                      <option value="United States">Cédula de Ciudadanía</option>
                      <option value="United States">Tarjeta de Identidad</option>
                      <option value="United States">Cédula de Extranjería</option>
                      <option value="United States">Pasaporte</option>
                    </select>
                    <div class="invalid-feedback"> Seleccione un tipo de identificación </div>
                  </div>
                  <div class="col-md-6 mb-3"> <label for="i_dni_number">No. Identificación</label>
                    <input type="text" class="form-control form-control-sm" name="i_dni_number"></input>
                    <div class="invalid-feedback"> Ingrese No. identificación </div>
                  </div>
                </div>
                <div class="mb-3"> <label for="username">No. teléfono móvil</label>
                    <input type="text" class="form-control form-control-sm" name="i_phone" placeholder="Ej. 321 111 111" required=""></input>
                    <div class="invalid-feedback" style={{width:'100%'}} > Ingrese número de telefono móvil </div>
                </div>
                <div class="mb-3"> <label for="email">Correo electrónico<span class="text-muted"></span></label>
                  <input type="email" class="form-control form-control-sm" id="email" placeholder="Ej. yo@correejemplo.com"></input>
                  <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                </div>
                <div class="mb-3"> <label for="address">Dirección de dominicilio</label>
                  <input type="text" class="form-control form-control-sm" id="address" placeholder="Ej. Cll 301 #45-33 Apto 10001 Blq 45" required=""></input>
                  <div class="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3"> <label for="country">País</label> <select class="custom-select d-block w-100 form-control-sm" id="country" required="">
                      <option value="">Choose...</option>
                      <option value="United States">United States</option>
                    </select>
                    <div class="invalid-feedback"> Please select a valid country. </div>
                  </div>
                  <div class="col-md-6 mb-3"> <label for="state">Estado</label> <select class="custom-select d-block w-100 form-control-sm" id="state" required="">
                      <option value="">Choose...</option>
                      <option value="California">California</option>
                    </select>
                    <div class="invalid-feedback"> Please provide a valid state. </div>
                  </div>
                </div>
                <h4 class="mb-3"><b>Con mi donación quiero apoyar a:</b></h4>
                <div class="d-block my-2">
                  <div class="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="" value="on"></input> 
                    <label class="custom-control-label" for="credit">Credit card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="" value="on"></input>
                    <label class="custom-control-label" for="debit">Debit card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="" value="on"></input>
                    <label class="custom-control-label" for="paypal">Paypal</label>
                  </div>
                </div>
                <hr class="mb-4"></hr>
              </form>
            </div>
          </div>
      </div>



















      {/*}  <h2>Get Data From WerService</h2>
        <label>
            Name:
            <input type="text" name="i_name" onChange={this.handleChange} />
        </label>
        <br/>
        <label>
            Last Name:
            <input type="text" name="i_lastname" onChange={this.handleChange} />
        </label>
        <br/>
        <label>
            Phone:
            <input type="number" name="i_phone" onChange={this.handleChange} />
        </label>
        <br/>
        <label>
            Cellphone
            <input type="number" name="i_cellphone" onChange={this.handleChange} />
        </label>
        <br/>
        <label>
            Email:
            <input type="text" name="i_email" onChange={this.handleChange} />
        </label>
        <br/>

        <button id="result" onClick={this.handleSendData}>Action Data</button>
    {this.state.result} */}
      </div>
    );
  }
}

export default Content;
