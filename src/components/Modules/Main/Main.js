import React, { Component } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import md5gen from 'md5';
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
  Table,
  CardBody,
  CardHeader,
  CardFooter,
  Tooltip
} from 'reactstrap';

//import css & js libraries4
import './Main.css';

class Content extends Component {
  constructor(){
    super();

    this.handleChange              = this.handleChange.bind(this);
    this.handleSendData            = this.handleSendData.bind(this);
    this.handleDonationCalculator  = this.handleDonationCalculator.bind(this);
    this.nextPath                  = this.nextPath.bind(this);
    this.toggle                    = this.toggle.bind(this);
    this.toggleToolTip             = this.toggleToolTip.bind(this);
    this.toggleEnablePaymentButton = this.toggleEnablePaymentButton.bind(this);
    this.handleMd5Generator        = this.handleMd5Generator.bind(this);
    this.handleReferencecode       = this.handleReferencecode.bind(this);


    this.state = {

      // Form values
      payuIdMerchant: '634695',

      // PayU Parameter
      monto            : 0,
      codigoReferencia : '',
      firmaMd5         : '',

      name           : '',
      lastname       : '',
      dni_type       : 'Cédula de Ciudadanía',
      dni_number     : '',
      phone          : '',
      email          : '',
      address        : '',
      donation_value : 0,
      donation_target: 'Misiones Ambalema',
      fee_value      : 900,
      fee_value_percentage: 3.49,
      total_donation : 0,

      //UI/UX states
      modal: false,
      tooltipOpen: false,
      isPayButtonDisabled  : true,

      // Form UI Filled?
      isFilledName         : false,
      isFilledLastName     : false,
      isFilledDniType      : true,
      isFilledDni          : false,
      isFilledEmail        : false,
      isFilledAddr         : false,
      isFilledPhone        : false,
      isFilledValue        : false,
      isFilledTarget       : true
    };
  }

  componentDidMount(){
  
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

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleToolTip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  toggleEnablePaymentButton = () =>{
    console.log("Name " + this.state.isFilledName +
                " \nLast Name " + this.state.isFilledLastName +
                " \nDni type " + this.state.isFilledDniType +
                " \nDni " + this.state.isFilledDni +
                " \nEmail: " + this.state.isFilledEmail + 
                " \nPhone: " + this.state.isFilledPhone + 
                " \nValue: " + this.state.isFilledValue + 
                " \nTarget: " + this.state.isFilledTarget);
                     
    if(    this.state.isFilledName === true
        && this.state.isFilledLastName === true
        && this.state.isFilledDniType === true 
        && this.state.isFilledDni === true 
        && this.state.isFilledEmail === true 
        && this.state.isFilledAddr === true 
        && this.state.isFilledPhone === true 
        && this.state.isFilledValue === true 
        && this.state.isFilledTarget === true 
        && this.state.isFilledPhone === true ){
        
        this.setState({
          isPayButtonDisabled : false
        })  

    }else{
        this.setState({
          isPayButtonDisabled : true
        })
    }
  }

  handleReferencecode = (inDatum) =>{
    var today = new Date();
    var date = today.getFullYear() +""+ (today.getMonth() + 1) +""+ today.getDate();
    var time = + today.getHours() +""+ today.getMinutes();
    //var time = + today.getHours();
    var referenceCode = "IBRDON" + inDatum +"-"+ date + "" + time;
    console.log("======> " + referenceCode);

    this.setState({
      codigoReferencia: referenceCode
    })

    return referenceCode;
  }

  handleMd5Generator = () =>{
    var referencecod = this.handleReferencecode(this.state.dni_number);
    var monto_pagar = Math.round(this.state.donation_value);
    
    console.log("=====> " + referencecod + " --- " + monto_pagar);
    
    var md5string = md5gen( "lt0WPAs8Ac7i6NVhJG6SGTI2sU" + "~" + 
                            "634695" + "~" +
                            referencecod + "~" +
                            monto_pagar + "~" +
                            "COP" );
    this.setState({
      firmaMd5: md5string
    }, () => {
      console.log("MD5 =>" + md5string);
    })
  }

  nextPath = () => {
      this.toggle();
      this.handleMd5Generator();
      //console.log(this.props);
      //this.props.history.push('/donationresumen');
  }

  handleChange(event) {

    if(event.target.name === "i_name"){
      this.setState({ 
        name: String(event.target.value)
      }, () => {
        console.log(this.state.name)
        if(this.state.name.length > 0){
            this.setState({
              isFilledName: true
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }else{
            this.setState({
              isFilledName: false
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }
      });
      
    }if(event.target.name === "i_lastname"){
      this.setState({ 
        lastname: event.target.value 
      }, () => {
        console.log(this.state.lastname)
        if(this.state.lastname.length > 0){
            this.setState({
              isFilledLastName: true
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }else{
            this.setState({
              isFilledLastName: false
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }
      });

    }if(event.target.name === "i_dni_type"){
      this.setState({ 
        dni_type: event.target.value 
      }, () => {
        console.log(this.state.dni_type)
        if(this.state.dni_type.length > 0){
            this.setState({
              isFilledDniType: true
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }else{
            this.setState({
              isFilledDniType: false
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }
      });

    }if(event.target.name === "i_dni_number"){
      this.setState({ 
        dni_number: event.target.value 
      }, () => {
        console.log(this.state.dni_number)
        if(this.state.dni_number.length > 0){
            this.setState({
              isFilledDni: true
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }else{
            this.setState({
              isFilledDni: false
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }
      });

    }if(event.target.name === "i_phone"){
      this.setState({ 
        phone: event.target.value 
      }, () => {
        console.log(this.state.phone)
        if(this.state.phone.length > 0){
            this.setState({
              isFilledPhone: true
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }else{
            this.setState({
              isFilledPhone: false
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }
      });

    }if(event.target.name === "i_email"){
      this.setState({ 
        email: event.target.value 
      }, () => {
        console.log(this.state.email)
        if(this.state.email.length > 0){
            this.setState({
              isFilledEmail: true
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }else{
            this.setState({
              isFilledEmail: false
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }
      });

    }if(event.target.name === "i_address"){
      this.setState({ 
        address: String(event.target.value) 
      }, () => {
        console.log(this.state.address)
        if(this.state.address.length > 0){
            this.setState({
              isFilledAddr: true
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }else{
            this.setState({
              isFilledAddr: false
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }
      });

    }if(event.target.name === "i_donation_value"){
      this.setState({ 
        donation_value: event.target.value 
      }, () => {
        console.log(this.state.donation_value)
        if(this.state.donation_value.length > 0){
            this.setState({
              isFilledValue: true
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }else{
            this.setState({
              isFilledValue: false
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }
      });
      //console.log(event.target.value);
      //this.handleDonationCalculator();

    }if(event.target.name === "i_donation_target"){
      this.setState({ 
        donation_target: event.target.value 
      }, () => {
        console.log(this.state.donation_target)
        if(this.state.donation_target.length > 0){
            this.setState({
              isFilledTarget: true
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }else{
            this.setState({
              isFilledTarget: false
            }, () => {
              this.toggleEnablePaymentButton();
            })
        }
      });
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
                    id="TooltipExample"
                    disabled={this.state.isPayButtonDisabled}
                    className="btn btn-lg btn-block btn-secondary" 
                    type="submit"
                    onClick={this.nextPath}>Donar
                  </button>
              </div>
              <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggleToolTip}>
                Hello world!
              </Tooltip>
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
                  <ModalBody>
                    <Row>
                      <Col id="custom-left-card" className="py-2" xs="6">
                        <Card id="left-card">
                          <CardHeader id="custom-header" > 
                            <center>
                              <p id="subtitle-custom">Total Donación</p>
                              <h1 style={{ fontSize : '2.8rem', color : 'white' }}>
                                <NumberFormat value={this.state.donation_value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                              </h1>
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
                          </CardBody>
                          <CardFooter id="card-footer-non-radius">
                            <Button  size="sm" color="link" onClick={this.toggle} block>Regresar</Button>
                          </CardFooter>
                        </Card>
                      </Col>
                      <Col id="custom-right-card" xs="6">
                      <Card>
                          <CardBody>  
                          <Table borderless style={{ borderColor: 'white' }}>
                              <thead>
                                <tr>
                                  <th className="th-non-border" scope="col"><CardTitle><center><h4>Detalles de la donación</h4></center></CardTitle></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="th-non-border">{this.state.name} {this.state.lastname}</td>
                                </tr>
                                <tr>
                                  <td className="th-non-border">{this.state.dni_type} : {this.state.dni_number}</td>
                                </tr>
                                <tr>
                                  <td className="th-non-border">{this.state.phone}</td>
                                </tr>
                                <tr>
                                  <td className="th-non-border">{this.state.email}</td>
                                </tr>
                                <tr>
                                  <td className="th-non-border">Donar a: {this.state.donation_target}</td>
                                </tr>
                              </tbody>
                            </Table>
                            <hr className="py-1" style={{ borderTop: '0px solid rgba(0, 0, 0, 0.1)' }} />
                            {/*<Button size="lg" block>Confirmar y donar</Button>*/}
                            {/*PayU form*/}
                            <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/" target="_blank">
                              <input name="merchantId"       type="hidden"  value={this.state.payuIdMerchant} ></input>
                              <input name="referenceCode"    type="hidden"  value={this.state.codigoReferencia} ></input>
                              <input name="description"      type="hidden"  value="DONACION IBR" ></input>
                              <input name="amount"           type="hidden"  value={Math.round(this.state.donation_value)} ></input>
                              <input name="tax"              type="hidden"  value="0" ></input>
                              <input name="taxReturnBase"    type="hidden"  value="0" ></input>
                              <input name="signature"        type="hidden"  value={this.state.firmaMd5} ></input>
                              <input name="accountId"        type="hidden"  value="637091" ></input>
                              <input name="currency"         type="hidden"  value="COP" ></input>
                              <input name="buyerFullName"    type="hidden"  value={this.state.name + " " + this.state.lastname} ></input>
                              <input name="buyerEmail"       type="hidden"  value={this.state.email} ></input>
                              <input name="shippingAddress"  type="hidden"  value={this.state.address} ></input>
                              <input name="telephone"        type="hidden"  value={this.state.phone} ></input>
                              <input name="shippingCountry"  type="hidden"  value="CO" ></input>
                              {/*<input name="test" type="hidden" value="1" ></input>*/}
                              <input name="Submit" size="lg" block type="submit"  value="Confirmar y donar" className="btn btn-secondary btn-lg btn-block" id="button_payu"></input>
                            </form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
            </div>

            <div className="col-md-8 order-md-1">
              <h5 className="mb-2"><b>Información del donante</b></h5>
              <form className="needs-validation" noValidate="">
                
                <div className="row">
                  <div className="col-md-6 mb-2"> <label htmlFor="i_name">Nombres</label>
                    <input autoComplete='given-name' type="text" className="form-control" name="i_name" id="i_name" placeholder="" onChange={this.handleChange}></input>
                  </div>

                  <div className="col-md-6 mb-2"> <label htmlFor="i_lastname">Apellidos</label>
                    <input autoComplete='given-name' type="text" className="form-control" name="i_lastname" placeholder="" onChange={this.handleChange}></input>
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
                    <input autoComplete='given-name' type="number" className="form-control" name="i_dni_number" onChange={this.handleChange}></input>
                  </div>
                </div>

                <div className="mb-2"> <label htmlFor="i_phone">No. teléfono móvil</label>
                    <input autoComplete='given-name' type="number" className="form-control" name="i_phone" placeholder="" onChange={this.handleChange}></input>
                </div>

                <div className="mb-2"> <label htmlFor="i_email">Correo electrónico</label>
                  <input autoComplete='given-name' type="email" className="form-control" name="i_email" onChange={this.handleChange}></input>
                </div>
                
                <div className="mb-2"> <label htmlFor="i_address">Dirección</label>
                  <input autoComplete='given-name' type="text" className="form-control" name="i_address" onChange={this.handleChange}></input>
                </div>
                
                <h5 className="mb-2"><b>Con mi donación quiero apoyar a:</b></h5>

                <div className="d-block my-2">

                  <select className="custom-select d-block w-100" name="i_donation_target" onChange={this.handleChange}>
                      <option defaultValue="true" value="Misiones Ambalema">Misiones Ambalema</option>
                      <option value="Ministerio">Ministerio Hombres</option>
                      <option value="Canasta de Amor">Ministerio Parejas</option>
                      <option value="Canasta de Amor">Canasta de Amor</option>
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
