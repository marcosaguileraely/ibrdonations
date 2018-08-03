import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardBody,
  CardHeader,
  CardFooter
} from 'reactstrap';

//import css & js libraries4
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
      total_donation: 0,

      //UI/UX states
      modal: false
    };

    this.handleChange             = this.handleChange.bind(this);
    this.handleSendData           = this.handleSendData.bind(this);
    this.handleDonationCalculator = this.handleDonationCalculator.bind(this);
    this.nextPath                 = this.nextPath.bind(this);
    this.toggle                   = this.toggle.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  nextPath = () => {
      this.toggle();
      //console.log(this.props);
      //this.props.history.push('/donationresumen');
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
        <div className="py-1" />
        <div className="container">
          <div className="row">
            <div className="col-md-4 order-md-2">
              
            <div class="card">
              <div class="card-header">
                <p id="ptitle-card">
                  <b>Detalles de la donación</b>
                </p>
              </div>
              <div class="card-body">
                <h5 class="card-title">Cantidad a donar</h5>
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
                <div class="alert alert-secondary" id="alert-message">
                    Por favor ingrese la cantidad a donar, sin comas o puntos
                </div>
              </div>
              <div class="card-footer">
                  <button 
                    className="btn btn-lg btn-block btn-secondary" 
                    type="submit"
                    onClick={this.nextPath}>Donar
                  </button>
              </div>
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

            </div>
            
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">  
                  <ModalHeader toggle={this.toggle}>Resumen de la Donación</ModalHeader>
                  <ModalBody>
                    <Row>
                      <Col xs="6">
                        <Card>
                          <CardHeader id="custom-header" > 
                            <center>
                              <p id="subtitle-custom">Total Donación</p>
                              <h1 style={{ fontSize : '2.8rem', color : 'white' }}>$100.000</h1>
                            </center>
                          </CardHeader>    
                          <CardBody>
                            <CardTitle>¡Gracias por tu aporte!</CardTitle>
                            <blockquote class="blockquote">
                              <p id="bible-text">
                                  "Y Dios puede hacer que toda gracia abunde para ustedes, de manera que siempre, en toda circunstancia, tengan todo lo necesario, y toda buena obra abunde en ustedes." 
                              </p>
                              <footer class="blockquote-footer"><cite title="Source Title">(2 Corintios 9:8 | NVI)</cite></footer>
                            </blockquote>
                            <CardText></CardText>
                          </CardBody>
                          <CardFooter>
                            <Button color="link" onClick={this.toggle} block>Regresar</Button>
                          </CardFooter>
                        </Card>
                      </Col>
                      <Col xs="6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
            </div>

            <div className="col-md-8 order-md-1">
              <h5 className="mb-2"><b>Información del donante</b></h5>
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
                  <div className="col-md-6 mb-2"> <label htmlFor="i_dni_type">Tipo de identificación</label> 
                  <select className="custom-select d-block w-100" name="i_dni_type" onChange={this.handleChange}>
                      <option defaultValue="true" value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                      <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                      <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                      <option value="Pasaporte">Pasaporte</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-2"> <label htmlFor="i_dni_number">No. identificación</label>
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
                
                <div className="mb-2"> <label htmlFor="i_address">Dirección</label>
                  <input autoComplete='given-name' type="text" className="form-control" name="i_address" onChange={this.handleChange}></input>
                  <div className="invalid-feedback"> Ingrese dirección de domicilio </div>
                </div>
                
                <h5 className="mb-2"><b>Con mi donación quiero apoyar a:</b></h5>

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
