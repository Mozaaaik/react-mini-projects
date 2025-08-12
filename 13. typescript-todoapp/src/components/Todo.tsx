import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodoById } from '../redux/todoSlice';

interface TodoProps {
  todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

  const { id, content } = todoProps

  const [editable, setEditable] = useState(false)
  const [newTodo, setNewtodo] = useState(content)


  const dispatch = useDispatch()

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id))
  }

  const handleUpdate = () => {
    console.log('Handle Update Çalıştı')
    const payload = { id, content: newTodo }
    dispatch(updateTodoById(payload))
    setEditable(false)
  }

  return (
    <div className='todo'>
      <div>
        {
          editable
            ? <input className='todo-input myTodo' type='text' value={newTodo} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setNewtodo(e.target.value) }/>
            : newTodo
        }
        
      </div>

      <div>
        {
          editable
            ? <FaRegCheckSquare className='icons' onClick={ handleUpdate } />
            : <FaEdit className='icons' onClick={ () => setEditable(true) } />
        }


        <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' />

      </div>
    </div>
  )
}

export default Todo