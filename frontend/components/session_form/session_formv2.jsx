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

  render() {
    return (
      <div class="container">
        <form class="signUp">
          <h1>Welcome To RobbinFood</h1>
          <h3>Create Your Account</h3>
          <p>
            Just enter your email address<br></br>
            and your password for join.
		      </p>
          <input class="w100" type="email" placeholder="Insert eMail" reqired autocomplete='off' />
          <input type="password" placeholder="Insert Password" reqired />
          <input type="password" placeholder="Verify Password" reqired />
          <button class="form-btn sx log-in" type="button">Log In</button>
          <button class="form-btn dx" type="submit">Sign Up</button>
        </form>
        <form class="signIn">
          <h3>Welcome<br></br>Back !</h3>
          <button class="fb" type="button">Log In With Facebook</button>
          <p>- or -</p>
          <input type="email" placeholder="Insert eMail" autocomplete='off' reqired />
          <input type="password" placeholder="Insert Password" reqired />
          <button class="form-btn sx back" type="button">Back</button>
          <button class="form-btn dx" type="submit">Log In</button>
        </form >
      </div >
    )
  }
}