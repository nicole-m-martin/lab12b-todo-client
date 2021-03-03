import React, { Component } from 'react'

export default class SignUpPage extends Component {
  render() {
    return (
      <div id="container">
      <div class="form-wrap">
        <h1>Sign Up</h1>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </div> 
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit" class="btn">Sign Up</button>
        </form>
      </div>
      </div>
    
    )
  }
}
