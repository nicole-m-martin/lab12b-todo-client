import React, { Component } from 'react'

export default class LoginPage extends Component {
  render() {
    return (
      <div id="container">
      <div className="form-wrap">
        <h1>Log In</h1>
        <form>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </div> 
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit" className="btn">Log In</button>
        </form>
      </div>
      </div>
    )
  }
}
