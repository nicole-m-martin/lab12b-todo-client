import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Components/HeaderPage';
import PrivateRoute from './AuthPages/PrivateRoute';
import HomePage from './Components/HomePage';
import SignUpPage from './AuthPages/SignUpPage';
import LoginPage from './AuthPages/LoginPage';
import TodoListPage from './Components/TodoListPage';
import { getFromLocalStorage, putInLocalStorage } from './Utils/LocalstorageUtils';



  export default class App extends Component {
    state = {
      user: getFromLocalStorage()
    }

    handleNewUserChange = (user) => {
      this.setState({ user })
      putInLocalStorage(user);
    }

    handleLogout = () => {
      localStorage.clear()
      window.location.reload()
    }



    render() {
        return (
            <div>
                <Router>
                    <Header
                    user={ this.state.user }
                    handleLogout={ this.handleLogout } />
                    <Switch>

                    <Route 
                     path="/" 
                     exact
                     render={ (routerProps) => 
                     <HomePage {...routerProps } /> }
                     />
                        
                    <PrivateRoute 
                      path="/todos" 
                      exact
                      token={ this.state.user && this.state.user.token }
                      render={ (routerProps) =>
                      <TodoListPage
                      user={ this.state.user }
                      { ...routerProps } /> }
                      />

                    <Route 
                      path="/signin" 
                      exact
                      render={ (routerProps) => 
                      <LoginPage 
                      handleNewUserChange={ this.handleNewUserChange }
                      { ...routerProps } /> } 
                      />
                        
                    <Route 
                      path="/signup" 
                      exact
                      render={ (routerProps) => 
                      <SignUpPage 
                      handleNewUserChange={ this.handleNewUserChange }
                      { ...routerProps } /> } 
                      />
                    
                    </Switch>
                </Router>
            </div>
        )
    }
}