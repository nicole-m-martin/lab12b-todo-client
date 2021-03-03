import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Header extends Component {
  render() {
      return (
          <div>
              <NavLink to='/' >Home</NavLink>
              {
              this.props.user && this.props.user.token && <>
              <NavLink to='/todos'>Your Todos</NavLink>
              <button className='btn' onClick={ this.props.handleLogout }>Log Out</button>
              </>
              }
              {
               (!this.props.user || !this.props.user.token) && <>
              <NavLink to='/signin'>Sign In</NavLink>
              <NavLink to='/signup'>Sign Up</NavLink>
              </>
              }
          </div>
      )
  }
}
