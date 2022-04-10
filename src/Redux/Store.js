import { configureStore } from '@reduxjs/toolkit'
import data from "./Reducers/data"
import view_item from './Reducers/view_item'

const store = configureStore({
  reducer:{
    data,
    view_item
  }
})

export default store