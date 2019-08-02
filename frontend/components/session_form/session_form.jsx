import React from "react";

import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.props.formType === "login"
      ? (this.state = {
          email: "",
          password: ""
        })
      : (this.state = {
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          dob: ""
        });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
  renderOtherFields() {
    return (
      <div>
        <label>
          First Name
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.update("first_name")}
            className="login-input"
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={this.state.last_name}
            onChange={this.update("last_name")}
            className="login-input"
          />
        </label>
        <label>
          Date Of Birth
          <input
            type="date"
            // value={this.state.dob}
            onChange={this.update("dob")}
            className="login-input"
          />
        </label>
      </div>
    );
  }

  render() {
    if (this.props.formType === "login"){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to RobbinFood
          <br />
          <div className="login-form">
            <br />

            <label>
              Email
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                
              />
            </label>
            <br />

            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
        {this.renderErrors()}
      </div>
    );
    } else {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Welcome to RobbinFood
          <br />
            <div className="login-form">
              <br />
              {this.renderOtherFields()}
              <label>
                Email 
              <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="login-input"
                />
              </label>
              <label>
                Password:
              <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input"
                />
              </label>
              <br />

              <input
                className="session-submit"
                type="submit"
                value={this.props.formType}
              />
            </div>
          </form>
          {this.renderErrors()}
        </div>
      );
    }
  }

  
}

export default SessionForm;
