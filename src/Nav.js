import React from 'react'

function Nav(props) {
  const lists = ["all", "IT", "Sports", "Random"]
  return (
    <nav>
      <ul>
        {
          lists.map((list) => (
            <li key={list} onClick={() => props.onSelectList}> {list} </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav
