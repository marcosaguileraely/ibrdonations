import React, { Component } from 'react';
import axios from 'axios';
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
  
        <h2>Get Data From WerService</h2>
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
        {this.state.result}
      </div>
    );
  }
}

export default Content;
