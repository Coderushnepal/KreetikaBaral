import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //button click garda default ma page refresh hunchha yesle tyo hatauchha
    console.log(this.state); //state ko sabbai ko value console ma dinchha
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <br />
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <Link to="/"><button className="btn teal darken-1 z-depth-0">Sign Up</button></Link>
          </div>
          <h4>
            <b>
              Already a member? <Link to="/signin">Login</Link> Here !!
            </b>
          </h4>
        </form>
      </div>
    );
  }
}

export default SignUp;
