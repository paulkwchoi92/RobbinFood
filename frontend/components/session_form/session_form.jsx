import React from "react";

import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.props.formType === "login" || this.props.formType === "demo"
      ? (this.state = {
          email: "",
          password: ""
        })
      : (this.state = {
          email: "",
          password: "",
          first_name: "",
          last_name: ""
        });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }
  componentDidMount() {
    if (this.props.formType === "demo") {
      setTimeout(() => {
        this.demoLogin(this.props.demo);
      }, 500);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      // debugger
      return this.props.history.push("/");
    });
  }

  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoLogin() {
    const email = "demo@demo.com";
    const password = "longpassword";
    const typeSpeed = 60;
    // debugger
    for (let i = 0; i < email.length; i++) {
      setTimeout(() => {
        this.setState({ email: this.state.email + email[i] });
      }, i * typeSpeed);
    }
    for (let j = 0; j < password.length; j++) {
      setTimeout(() => {
        this.setState({ password: this.state.password + password[j] });
      }, email.length * typeSpeed + j * typeSpeed);
    }
    setTimeout(() => {
      this.props.processForm(this.state);
    }, email.length * typeSpeed + password.length * typeSpeed + typeSpeed);
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
      </div>
    );
  }

  render() {
    if (this.props.formType === "login" || this.props.formType === "demo") {
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
          <button onClick={this.demoLogin} className="sessionForm-btn">
            Demo Login
          </button>
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
