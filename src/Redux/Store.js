import { configureStore } from '@reduxjs/toolkit'
import data from "./Reducers/data"

const store = configureStore({
  reducer:{
    data
  }
})

export default store