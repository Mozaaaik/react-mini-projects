import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading : false
}

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {

  }
})

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions

export default counterSlice.reducer