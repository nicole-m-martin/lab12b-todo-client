import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from '../Components/HeaderPage.js';
import PrivateRoute from '../AuthPages/PrivateRoute.js';
import HomePage from '../Components/HomePage.js';
import SignUpPage from '../AuthPages/SignUpPage.js';
import LoginPage from '../AuthPages/LoginPage.js';
import TodoListPage from '../Components/TodoListPage';



  export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            component={HomePage} 
                        />
                        <PrivateRoute 
                            path="/todo" 
                            exact
                            component={TodoListPage} 
                        />            
                        <Route 
                            path="/login" 
                            exact
                            component={LoginPage} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            component={SignUpPage} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
