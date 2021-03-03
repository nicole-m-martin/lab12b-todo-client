import React, { Component } from 'react'
import { getAllTodo, newTodo, doneTodo } from '../Utils/ApiUtils'


export default class TodoListPage extends Component {

  state = {
    todos: [],
    todo: ''
  }

  componentDidMount = async () => {
    await this.fetchTodos()
  }

  fetchTodos = async () => {
    const todos = await getAllTodo(this.props.user.token)
    this.setState({ todos })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await newTodo(this.state.todo, this.props.user.token)
    await this.fetchTodos()

    this.setState({ todo: '' })
  }

  handleTodoChange = (e) => this.setState({ todo: e.target.value })

  handleCompletedTodo = async(todoId) => {
    await doneTodo(todoId, this.props.user.token)
    this.fetchTodos()
  }


  render() {        
    return (
      <div>
        <div className="container">
      <div className="form-wrap">
        <h2>Add Your Todos!</h2>
        <form 
        onSubmit={ this.handleSubmit }>
         <div className="form-group">
        <input className='' 
        value={ this.state.todo } 
        onChange={ this.handleTodoChange } 
        />
        </div>

        <button className='btn'>Add</button>
        </form>
         <div className="tasks">
        { !this.state.todos.length && <p>No More Tasks!</p> }
        { this.state.todos.map(todo => <p key={ todo.todo } 
          onClick={ () => this.handleCompletedTodo(todo.id) }
          className={ 
            `todos ${ todo.completed ? 'completed' : ''}` }>    
          { todo.todo } </p> )}
          </div> 
        </div>
        </div>
      </div>
     )
   }
 }

