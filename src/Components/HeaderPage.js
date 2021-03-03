import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
      return (
      <div>
        <header className='header-box'>
        <NavLink className='header-link' exact activeClassName="active" 
        to="/">Home</NavLink>

        <NavLink className='header-link' exact activeClassName="active" 
        to="/todo">Your Todos</NavLink>

        <NavLink className='header-link' exact activeClassName="active" 
        to="/signup">New User</NavLink>

        <NavLink className='header-link' exact activeClassName="active" 
        to="/login">Log In</NavLink>



        </header>
      </div>
      )
  }
}
