import ReactDOM from 'react-dom';
import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {user :[], username: "",password: "" }
    this.handleChange=this.handleChange.bind(this);
    this.handlePasswordChnage=this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e)
  {
      this.setState({username : e.target.value});
  }
  handleSubmit(e)
  {
    e.preventDefault();
    const newUser = {
      userName : this.state.username,
      passWord : this.state.password
    }
    this.setState(state => ({users:state.user.concat(newUser),
    userName:"",
    password:""  
    }))
  }
  handlePasswordChange(e)
  {
    this.setState({password: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to App Login</h1>
        </header>
        <p className="Login Details">
        <form>
        <label>Username: </label>
        <input type="text" id="username" placeholder="Enter you username"/><br/><br/>
        <label>Password: </label>
        <input type= "password" id="password" onChange={this.handleChange}placeholder="Enter Password"/><br/><br/>
        <input type= "submit" id="submitButton"/>
        </form>
        </p>
      </div>
    );
  }
}

export default Register;
