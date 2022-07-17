import { useState } from 'react'
import Header from './components/Header'
import List from './components/List'
import Todo from './components/Todo'
function App() {
  
  const [ todos, setTodos ] = useState([])
  const [user, setUser] = useState(false)
  const [ modal, setModal] = useState(false)
  
  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <Todo setTodos={setTodos} user={user}/>
      <List todos={todos} user={user} setTodos={setTodos} modal={modal} setModal={setModal}/>
    </div>
  )
}

export default App
