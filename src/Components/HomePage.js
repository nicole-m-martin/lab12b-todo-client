import React from 'react'
import { Link } from 'react-router-dom'


export default class HomePage extends React.Component {
  render() {
      return (
        <>
            <h1>Welcome to Task Tracker</h1>
            <div>
            <h2><Link to="/signup" className='links'><button>New User</button></Link></h2>
            <h2><Link to="/login" className='links'><button>Returning User</button></Link></h2>
            </div>
          </>
      );
  }
}


