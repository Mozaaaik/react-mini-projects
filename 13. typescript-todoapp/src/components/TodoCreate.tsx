import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'

function TodoCreate() {

  const dispatch = useDispatch()

  const [newTodo, setNewTodo] = useState('')

  const handleCreateTodo = (): void => {

    if (newTodo.trim().length == 0) {
      return alert('Todo giriniz')
    }

    const payload = {
      id : Math.floor(Math.random() * 9999),
      content : newTodo
    }

    dispatch(createTodo(payload)) // TodoType tipinde olmalı
    setNewTodo('')
  }

  return (
    <div className='todo-create'>
      <input
        className='todo-input'
        type='text'
        placeholder='Todo Giriniz...'
        value={newTodo}
        onChange={(e : React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
      />

      <button onClick={( handleCreateTodo )} className='todo-button' >Oluştur</button>
    </div>
  )
}

export default TodoCreate