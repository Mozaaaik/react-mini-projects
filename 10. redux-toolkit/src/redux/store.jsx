import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice.jsx'
import userReducer from '../redux/userSlice.jsx'

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      user: userReducer
  }
})

