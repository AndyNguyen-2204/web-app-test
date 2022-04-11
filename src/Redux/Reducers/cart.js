import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cart:{
    product:[],
    quantity:""
  }
//   cart:[
//     {
//       product:[],
//       quantity:""
//     }
//  ]
 
}
// const findProductIndex =(cart,data_item)=>{
//   var index= -1;
//     for(var i =0;i<cart.length;i++){
//       if(cart[i].product.id==data_item.id){
//         index=i;
//         break
//       }
//     }
//   return index;
  
     
// }

// var index=-1;
//       var {data_item,quantity}=action.payload
//       index=findProductIndex(cart,data_item)
//       if(index !== -1){
//         cart[index].quantity +=quantity
//       }else{
//         cart.push({
//           product:data_item,
//           quantity
//         })
//       }
//       console.log(state.cart)
//       return cart
export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // dataerr: (state) => {
    //     state.data = 0
    //   },
    add_to_cart: (state, action) => {
       state.cart=action.payload
    },
  },
  
})

// Action creators are generated for each case reducer function
export const { add_to_cart } = cart.actions

export default cart.reducer