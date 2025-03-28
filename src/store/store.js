import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import counterReducer from "../counter/counterRedux";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer
  }
})

export default store;