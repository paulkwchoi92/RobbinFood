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
      this.props.fetchAllStocks()
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
    setTimeout(() => {
      this.props.fetchAllStocks();
    }, email.length * typeSpeed + password.length * typeSpeed + typeSpeed);
  }
  renderOtherFields() {
    return (
      <div>
        <label>
          <div className="input-label">First Name</div>
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.update("first_name")}
            className="login-input"
          />
        </label>
        <label>
          <div className="input-label">Last Name</div>
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
    return (
      <div className="login-form-container">
        <div className="session-image">
          <img src={window.log_in_image} />
        </div>
        <div className="input-form-container">
          <div className="login-form">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="login-title">Welcome to RobbinFood</div>
              <br />
              <br />
              <div className="input-top">
                {this.props.formType === "signup" ? (
                  this.renderOtherFields()
                ) : (
                  <div />
                )}
                <label>
                  <div className="input-label">Email</div>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="login-input"
                  />
                </label>
                <label>
                  <div className="input-label">Password</div>
                  
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                  />
                </label>
                <br />
              </div>
              <div className="button-container">
              <input
                className="session-submit"
                type="submit"
                value={this.props.formType}
                />
              </div>
            </form>
          </div>
          {this.renderErrors()}
        </div>
      </div>
    );
  }
}

export default SessionForm;
