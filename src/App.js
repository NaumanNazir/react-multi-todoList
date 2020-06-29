import React, { Component } from 'react'
import Form from './Form'
import Nav from './Nav'
import TodoList from './TodoList'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoLists: [],
      activeList: "all",
      input: ""
    }

    this.clearAll = this.clearAll.bind(this)
    this.handleSelectTodo = this.handleSelectTodo.bind(this)
    this.handleTodoInput = this.handleTodoInput.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  // 
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.activeList !== this.state.activeList)
  //     this.handleAddTodo(this.state.activeList)  
  // }

  // handle categories
  handleSelectTodo(todo) {
    this.setState({
      activeList: todo
    })
  }

  // sets to list
  handleAddTodo(e) {
    e.preventDefault()

    this.setState((currentState) => {
      return {
        todoLists: currentState.todoLists.concat(this.state.input),
        input: ""
      }
    })
  }

  // taking input value
  handleTodoInput(e) {
    const value = e.target.value

    this.setState({
      input: value
    })
  }

  // to clear everything
  clearAll() {
    this.setState({
      todoLists: []
    })
  }

  render() {
    return (
      <div>
        <Form 
          onAdd={this.handleAddTodo}
          value={this.handleTodoInput}
        />

        <Nav onSelectList={this.handleSelectTodo}/>

        <TodoList list={this.state.todoLists} listType={this.state.activeList}/>

        <button onClick={this.clearAll}> Clear all </button>
      </div>
    )
  }
}

export default App
