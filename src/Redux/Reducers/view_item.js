import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  item:[]
 
}
export const view_item = createSlice({
  name: 'view_item',
  initialState,
  reducers: {
    click_on_data: (state, action) => {
      state.item = action.payload
    },
    search_item:(state,action)=>{
      state.item=action.payload
    }
  },
  
})

// Action creators are generated for each case reducer function
export const { click_on_data,search_item } = view_item.actions

export default view_item.reducer