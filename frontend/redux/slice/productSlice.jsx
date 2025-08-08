import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false
}

const BASE_URL = 'https://fakestoreapi.com'

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
  const response = await axios.get(`${BASE_URL}/products`)
  return response.data
})

export const counterSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
    })

  }
})

// Action creators are generated for each case reducer function
export const { setSelectedProduct } = counterSlice.actions

export default counterSlice.reducer

/*

  Sen dispatch(setSelectedProduct(product)) dediğinde:

  product objesi payload oluyor.

  Reducer’da action.payload dediğinde bu product objesini alıyorsun.

  Sonra state.selectedProduct = action.payload ile store’daki değeri değiştiriyorsun.

*/