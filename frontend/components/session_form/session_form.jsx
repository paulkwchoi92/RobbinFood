import React from 'react'

import { withRouter } from 'react-router-dom'

class SessionForm extends React.Componenet {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarger.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.maps((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to RobbinFood
          <br />
          {this.renderErrors()}
          <div clasName="login-form">
            <br />
            <label>Email or Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChage={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
                <input
                  className="session-submit"
                  type="submit"
                 value={this.props.formType}
                  />
          </div>
        </form>
      </div>
    )
  }

  
}