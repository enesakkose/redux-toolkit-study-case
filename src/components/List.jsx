import React from 'react'
import './List.scss'

function List({setTodos,todos, user, setModal, modal}) {
  
  const deleteHandle = (todo) => {
    setTodos((todos) => todos.filter(t => t.id !== todo.id)) 
  }
  const editHandle = () => {
    setModal(true)
  }
  return (
    <div className='todos'>
      <ul>
        {todos.map((todo) => (
          <>
          <li key={todo.id}>
            {todo.user} - {todo.title}
             {todo.user === user.id && (<>
             <button onClick={editHandle}>Düzenle</button>
             <button onClick={() => deleteHandle(todo)}>Sil</button>
             </>)}
          </li>
          </>
        ))}
      </ul>
      {modal &&<div className="modal">
        ben modalım
        <button onClick={() => setModal(false)}>X</button>
      </div>}
    </div>
  )
}

export default List