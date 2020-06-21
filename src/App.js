import React, { Component } from 'react'
import TodoList from "./TodoList"

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoLists: ["Wash your clothes", "do the dishes", "go for grocery"]
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Add a todo"/>
        <button> Add </button> 

        <TodoList list={this.state.todoLists}/>
      </div>
    )
  }
}

export default App
