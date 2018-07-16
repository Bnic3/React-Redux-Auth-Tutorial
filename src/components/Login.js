import React, { Component } from 'react';

import busy from '../img/giphy.gif';
import '../App.css';

import {connect}  from "react-redux";

import Validator from "validator";
import  isEmpty from "lodash/isEmpty";
import PropTypes from "prop-types";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "",
                      password:"",
                      cursor: false  }
    }

formHandler = (e) => this.setState({[e.target.name]: e.target.value})  // formHandler for the fields

    render() { 
        return ( 
            <div className="App ">                      

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 ">

            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Login</h5>
                <div className= "form-div">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                    <input name= 'username' value = {this.state.username} onChange = {this.formHandler}
                    type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter username"/>
                     </div>
              
                    <div className="form-group">                      
                        <input name='password'   value = {this.state.password} onChange = {this.formHandler}
                        type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    {this.state.cursor ? <img src={busy}/> : <button type= "submit" className="button btn-primary btn">Submit</button>  }
                                 
            
                </form>
             </div>
                </div>
            </div>
            
            
                
         </div>
    

        </div>
      
      </div> 
  
        
      </div>
            );
    }
}


// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Fantasia</h1>
//         </header>   
 
export default Login;