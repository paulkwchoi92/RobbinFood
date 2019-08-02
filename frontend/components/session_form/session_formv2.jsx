import React from "react";

import { withRouter } from "react-router-dom";

class SessionFormV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      dob: ""
    };
    this.handleSubmitLog = this.handleSubmitLog.bind(this);
    this.handleSubmitSign = this.handleSubmitSign.bind(this);
    this.switchFormTL = this.switchFormTL.bind(this);
    this.switchFormTS = this.switchFormTS.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  switchFormTS() {
    let changeVar1 = document.getElementById("signUp");
    let changeVar2 = document.getElementById("signIn");
   
    changeVar1.className = "active-sx";
    changeVar2.className = "inactive-dx";
    // changeVar2.className.remove("active-dx");
    // changeVar1.className.remove("inactive-sx");
  }

  switchFormTL() {
    let changeVar1 = document.getElementById("signUp");
    let changeVar2 = document.getElementById("signIn");

    changeVar2.className = "inactive-dx";
    changeVar1.className = "active-sx";
    // changeVar1.className.remove("inactive-sx");
    // changeVar2.className.remove("active-dx");
  }

  handleSubmitLog(e) {
    
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }
  handleSubmitSign(e) {
    
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="container">
        <div id="signUp" className="">
          <form onSubmit={this.handleSubmitSign}>
            <h1>Welcome To RobbinFood</h1>
            <h3>Create Your Account</h3>
            <p>
              Just enter your email address
              <br />
              and your password for join.
            </p>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Insert Email"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Insert Password"
            />
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              placeholder="First Name"
            />
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              placeholder="Lastname"
            />
            <input type="date" onChange={this.update("dob")} />
            {this.renderErrors()}
            <button
              onClick={this.switchFormTL}
              className="form-btn sx log-in"
              type="button"
            >
              Log In
            </button>
            <button className="form-btn dx" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <div id="signIn" className="">
          <form onSubmit={this.handleSubmitLog}>
            <h3>
              Welcome
              <br />
              Back !
            </h3>

            <input
              type="email"
              placeholder="Insert eMail"
              autoComplete="off"
              required
              onChange={this.update("email")}
            />
            <input
              type="password"
              placeholder="Insert Password"
              required
              value={this.state.password}
              onChange={this.update("password")}
            />
            {this.renderErrors()}
            <button
              onClick={this.switchFormTS}
              className="form-btn sx back"
              type="button"
            >
              Back
            </button>
            <button className="form-btn dx" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionFormV2;
