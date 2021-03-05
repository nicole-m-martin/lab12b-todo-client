import React, { Component } from 'react'
import { signUp } from '../Utils/ApiUtils'

export default class SignUpPage extends Component {
  state = {
    email: '',
    password: ''
  }
  
  handleEmailChange = (e) => this.setState({ email: e.target.value })

  handlePasswordChange = (e) => this.setState({ password: e.target.value })

  handleSubmit = async e => {
    e.preventDefault();
    const user = await signUp(this.state.email, this.state.password)
    this.props.handleNewUserChange(user)
    this.props.history.push('/todos')
    }
  
  render() {
    return (
      <div className="container">
      <div className="form-wrap">
        <h1>Sign Up</h1>

        <form 
        onSubmit={ this.handleSubmit }>

        <div className="form-group">
          <label>
          Email
          <input 
          value={ this.state.email } 
          onChange={ this.handleEmailChange } /> 
          </label>
        </div>

        <div className="form-group">
          <label>
          Password
          <input 
          type='password'
          value={ this.state.password }
          onChange={ this.handlePasswordChange } />
          </label>
        </div>

        <button type="submit" className="btn">Sign Up</button>
        </form>
        
      </div>
      </div>
    
    )
  }
}
