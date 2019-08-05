import React from "react";

import { withRouter } from "react-router-dom";

class SessionFormV3 extends React.Component {
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
      <div class="wrap --rtn">
        <form action="" method="" class="flex-form">
          <ul class="select__list">
            <li id="js-usr-new" class="select__label">Sign up</li>
            <li id="js-usr-rtn" class="select__label select__label--active">Sign in</li>
          </ul>
          <span class="pointer"></span>
          <input type="email" placeholder="Email" class="ui-elem ui-elem-email" />
          <input type="password" placeholder="Password" class="ui-elem ui-elem-pass" />
          <input type="text" placeholder="First Name" class="ui-elem ui-elem-rpass --rtn" />
          <input type="text" placeholder="Last Name" class="ui-elem ui-elem-rpass --rtn" />
          <input type="date" placeholder="D.O.B" class="ui-elem ui-elem-rpass --rtn" />
          <button id="js-btn" class="ui-button" type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SessionFormV3;
