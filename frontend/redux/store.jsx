import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slice/productSlice'
import appReducer from './slice/appSlice'
import basketReducer from './slice/basketSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    app: appReducer,
    basket: basketReducer
  },
})

