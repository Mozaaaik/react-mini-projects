import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/Types'

const initialState : TodoInitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload] // action.payload { id: ... , content: ... } tarzonda obje olcak
        },
        removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo : TodoType) => todo.id !== action.payload)]
        },
        updateTodoById: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            let myTodo = state.todos.find((todo: TodoType) => todo.id === action.payload.id )
            if (!myTodo) return console.log('Cannot find myTodo');
            myTodo.content = action.payload.content
        }

    }
})

export const { createTodo, removeTodoById, updateTodoById } = todoSlice.actions

export default todoSlice.reducer