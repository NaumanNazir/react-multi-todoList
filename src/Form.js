import React from 'react'

function Form(props) {
  return (
    <div>
      <form onSubmit={props.onAdd}>
          <input 
            type        = "text" 
            placeholder = "Add a todo"
            value       = {props.input}
            onChange    = {props.value}
          />
          <button> Add </button> 
        </form>
    </div>
  )
}

export default Form
