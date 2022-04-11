import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  data:[]
 
}
export const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataerr: (state) => {
        state.data = 0
      },
    fetchdata: (state, action) => {
      state.data = action.payload
    },
  },
  
})

// Action creators are generated for each case reducer function
export const { dataerr,fetchdata } = data.actions

export default data.reducer
