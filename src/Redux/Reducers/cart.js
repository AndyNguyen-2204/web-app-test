import { createSlice } from '@reduxjs/toolkit'
// var data=JSON.parse(localStorage.getItem("CART"))
const initialState = {
   cart:[
   
   ]
}
export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_to_cart: (state, action) => {
    // console.log(action.payload)
    //  var index=-1;
    //   
    //   var quantity=action.payload.quantity
    //   index=findProductIndex(cart_1,product)
    //   if(index !== -1){
    //     cart_1[index].quantity +=quantity
    //   }else{
    //   cart_1.push(action.payload)
        
    //   }
    //   return [...cart_1]
    state.cart.push(action.payload)
    
    },
    minus_quantity:(state,action)=>{
      var index=-1;
      var product=action.payload.product
      const findProductIndex =(product)=>{
        const cart_1=state.cart
          for(var i =0;i<cart_1.length;i++){
            if(cart_1[i].product.id===product.id){
              index=i;
              break
            }
          }
        return index
      }
        index=findProductIndex(product)
        state.cart[index].quantity-=1
    },
    plus_quantity:(state,action)=>{
      var index=-1;
      var product=action.payload.product
      const findProductIndex =(product)=>{
        const cart_1=state.cart
          for(var i =0;i<cart_1.length;i++){
            if(cart_1[i].product.id===product.id){
              index=i;
              break
            }
          }
        return index
      }
        index=findProductIndex(product)
        state.cart[index].quantity+=1
    },
    clear_cart:(state)=>{
     state.cart.splice(0,(state.cart).length)
    }

  },
  
})

// Action creators are generated for each case reducer function
export const { add_to_cart,minus_quantity,plus_quantity,clear_cart } = cart.actions

export default cart.reducer