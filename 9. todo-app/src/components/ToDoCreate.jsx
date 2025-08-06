import React, { useState } from 'react'
import '../App.css'

function ToDoCreate({ onCreateTodo }) {

  const [newTodo, setNewTodo] = useState('')

  const clearInput = () => {
    setNewTodo('')
  }

  const createTodo = () => {
    if (!newTodo) return console.log('New todo yok')

    const request = {
      id : Math.floor(Math.random() * 99999),
      content : newTodo
    } 
    onCreateTodo(request)
    clearInput()
  }

  return (
    <div className='todo-create'>
      <input
        className='todo-input'
        type='text'
        placeholder='Todo giriniz'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={createTodo} className='todo-button'>Todo Oluştur</button>
    </div>
  )
}

export default ToDoCreate 