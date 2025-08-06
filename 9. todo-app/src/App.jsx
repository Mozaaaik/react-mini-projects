import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList   from './components/ToDoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const updateTodo = (newTodo) => {
    const updated = todos.map(todo =>
      todo.id === newTodo.id ? newTodo : todo
    )
    setTodos(updated)
  }

  return (
    <div className='App'>
      <div className='main'>
        <ToDoCreate onCreateTodo={createTodo} />
        <ToDoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  )
}

export default App
