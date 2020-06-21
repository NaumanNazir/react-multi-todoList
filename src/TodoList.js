import React from 'react'

function TodoList(props) {
  return (
    <div>
      <h2> Things todo: </h2>
      <ul>
        {
          props.list.map((todo) => (
            <li> {todo} </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList
