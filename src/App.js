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
        <TodoList list={this.state.todoLists}/>
      </div>
    )
  }
}

export default App
