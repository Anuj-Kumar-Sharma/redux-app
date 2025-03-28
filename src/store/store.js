import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import counterReducer from "../counter/counterRedux";
import productsReducer from './slices/productsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,
    products: productsReducer
  }
})

export default store;