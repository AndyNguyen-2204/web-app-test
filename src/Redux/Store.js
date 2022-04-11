import { configureStore } from '@reduxjs/toolkit'
import data from "./Reducers/data"
import view_item from './Reducers/view_item'
import cart from './Reducers/cart'

const store = configureStore({
  reducer:{
    data,
    view_item,
    cart
  }
})

export default store