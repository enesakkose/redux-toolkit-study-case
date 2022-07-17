import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function Todo({setTodos, user}) {
  const [ todo, setTodo ] = useState('')
    const addTodos = () => {
      setTodos((todos) => [{
        title: todo,
        done: false,
        id: nanoid(),
        user: user.id
      }, ...todos])
      setTodo('')
    }
    
  return (
    <div className='todo'>
        <input type="text" placeholder='Todo yazın' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button disabled={!todo || !user} onClick={addTodos}>Ekle</button>
    </div>
  )
}

export default Todo