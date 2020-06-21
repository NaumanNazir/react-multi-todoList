import React, { Component } from 'react'
import TodoList from "./TodoList"

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoLists: []
    }
  }

  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

export default App
