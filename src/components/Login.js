import React, { Component } from 'react';

import busy from '../img/giphy.gif';
import '../App.css';

import {connect}  from "react-redux";

import Validator from "validator";
import  isEmpty from "lodash/isEmpty";
import PropTypes from "prop-types";
import { login } from './../actions/loginAction';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "",
                      password:"",
                      cursor: false,
                    errors:{}  }
    }

formHandler = (e) => this.setState({[e.target.name]: e.target.value})  // formHandler for the fields

validateFormInput= (data)=>{
    const errors = {};
    if(Validator.isEmpty(data.username)){
      errors.username = "Username is required";
    }
    if(Validator.isEmpty(data.password)){
      errors.password = "Password is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
      }
}   

onFormSubmit = async (e)=> {
    e.preventDefault()
    this.setState({errors:{}})
    const {username,password} = this.state;
    console.log(`attempting to log in with ${username} and ${password}`)

    const {errors, isValid} = this.validateFormInput(this.state)
    console.log("errors" +errors)
    console.log("cursor "+ this.state.cursor)

    if(isValid){  
        this.setState({ cursor:true  });
       const {message} = await this.props.login(this.state)
       console.log(message)
       //Todo: add toaster
       this.setState({cursor:false});
      } else{this.setState({ errors});}

}

    render() { 
        const {errors} = this.state; 
        return ( 
            <div className="App ">                      

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 ">

            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Login</h5>
                <div className= "form-div">
                <form onSubmit={this.onFormSubmit}  >
                    <div className="form-group">
                    <input name= 'username' value = {this.state.username} onChange = {this.formHandler}
                    type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter username" disabled={this.state.cursor} />
                    {errors.username && <span className = "form-text font-weight-light text-danger">{errors.username}</span>}
                     </div>
              
                    <div className="form-group">                      
                        <input name='password'   value = {this.state.password} onChange = {this.formHandler}
                        type="password" className={ (errors.password) ? "form-control invalid" :"form-control"  } id="exampleInputPassword1" placeholder="Password" disabled={this.state.cursor}/>
                        {errors.password && <span className = "form-textfont-weight-light text-danger">{errors.password}</span>}
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

 // actions:bindActionCreators(action,dispatch)

// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Fantasia</h1>
//         </header>   
 
Login.propTypes={
    login:PropTypes.func.isRequired
}
export default connect(undefined,{login})(Login);