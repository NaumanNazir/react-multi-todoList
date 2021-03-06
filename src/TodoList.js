import React from 'react'

function TodoList(props) {
  return (
    <div>
      <h2> {props.listType} </h2>
      <ul>
        {
          props.list.map((todo) => (
            <li key={todo}> 
              {todo} 
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList
