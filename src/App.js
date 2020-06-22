import React, { Component } from 'react'
import TodoList from "./TodoList"

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoLists: ["Wash your clothes", "do the dishes", "go for grocery"],
      input: ""
    }

    this.clearAll = this.clearAll.bind(this)
    this.handleTodoInput = this.handleTodoInput.bind(this)
  }

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
        <input 
          type="text" 
          placeholder="Add a todo"
          value={this.state.input}
          onChange={this.handleTodoInput}
        />
        <button> Add </button> 
        <button onClick={this.clearAll}> Clear all </button>

        <TodoList list={this.state.todoLists}/>
      </div>
    )
  }
}

export default App
