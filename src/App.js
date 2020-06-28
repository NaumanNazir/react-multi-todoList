import React, { Component } from 'react'
import TodoList from "./TodoList"
import Nav from "./Nav"

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoLists: [],
      activeTodo: "all",
      input: ""
    }

    this.clearAll = this.clearAll.bind(this)
    this.handleSelectTodo = this.handleSelectTodo.bind(this)
    this.handleTodoInput = this.handleTodoInput.bind(this)
    // this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleSelectTodo(todo) {
    this.setState({
      activeTodo: todo
    })
  }

  // handleAddTodo(e) {
  //   e.preventDefault()

  //   this.setState((currentState) => {
  //     return {
  //       todoLists: currentState.todoLists.concat(this.state.input),
  //       input: ""
  //     }
  //   })
  // }

  handleTodoInput(e) {
    const value = e.target.value
    console.log(value)

    this.setState({
      input: value
    })
  }

  clearAll() {
    this.setState({
      todoLists: []
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
          <input 
            type        = "text" 
            placeholder = "Add a todo"
            value       = {this.state.input}
            onChange    = {this.handleTodoInput}
          />
          <button> Add </button> 
        </form>

        <button onClick={this.clearAll}> Clear all </button>

        <Nav onSelectList={this.handleSelectTodo}/>

        <h1> Active language: {this.state.activeTodo} </h1>
      </div>
    )
  }
}

export default App
