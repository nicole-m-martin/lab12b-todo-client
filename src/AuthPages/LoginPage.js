import React, { Component } from 'react'
import { logIn } from '../Utils/ApiUtils'

export default class LoginPage extends Component {
  state = {
    email: '',
    password: ''
  }
  
  handleEmailChange = (e) => this.setState({ email: e.target.value })

  handlePasswordChange = (e) => this.setState({ password: e.target.value })

  handleSubmit = async (e) => {
    e.preventDefault()
    const user = await logIn(this.state.email, this.state.password)
    this.props.handleNewUserChange(user)
    this.props.history.push('/todos')
    }
  
  render() {
    return (
      <div className="container">
      <div className="form-wrap">
        <h1>Log In</h1>

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
          value={ this.state.password }
          onChange={ this.handlePasswordChange } />
          </label>
        </div>

        <button type="submit" className="btn">Log In</button>
        </form>
        
      </div>
      </div>
    
    )
  }
}
