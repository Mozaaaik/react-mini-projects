import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import '../App.css'
import { FaCheckSquare } from "react-icons/fa";

function ToDo({ todo, onRemoveTodo, onUpdateTodo }) {

  const [editable, setEditable] = useState(false)
  const [newTodo, setNewTodo] = useState(todo.content)

  const removeTodo = () => {
    onRemoveTodo(todo.id)
  }

  const updateTodo = () => {

    const request = {
      id: todo.id,
      content: newTodo
    }

    onUpdateTodo(request)
    setEditable(false)

  }



  return (
    <div className='toDo'>
      <div>
        {
          editable
            ? <input className='todo-input' type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            : todo.content
        }
      </div>

      <div>
        <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
        {
          editable
            ? <FaCheckSquare className='todo-icons checkSquare' onClick={updateTodo} />
            : <MdModeEdit className='todo-icons' onClick={() => setEditable(true)} />
        }
      </div>
    </div>
  )
}

export default ToDo