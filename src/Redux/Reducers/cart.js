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
      var index=-1;
      var product=action.payload.product
      var quantity=action.payload.quantity
      var size=action.payload.valueall.valueSize
      const findProductIndex =(product)=>{
        const cart_1=state.cart
          for(var i =0;i<cart_1.length;i++){
            if(cart_1[i].product.id===product.id&&state.cart[i].valueall.valueSize===size){
              index=i;
              break
            }
          }
        return index
      }
        index=findProductIndex(product)
        console.log(index);
    if(index!==-1&&state.cart[index].valueall.valueSize===size){
      state.cart[index].quantity+=quantity
      console.log(1);
    }else{
      state.cart.push(action.payload)
      console.log(2);
    }
    
    },
    minus_quantity:(state,action)=>{
      var index=-1;
      var product=action.payload.product
      var size=action.payload.valueall.valueSize
      const findProductIndex =(product)=>{
        const cart_1=state.cart
        for(var i =0;i<cart_1.length;i++){
          if(cart_1[i].product.id===product.id&&cart_1[i].valueall.valueSize===size){
            index=i;
            break
          }
        }
        return index
      }
        index=findProductIndex(product)
        state.cart[index].quantity-=1
        if(state.cart[index].quantity<1){
          state.cart[index].quantity=1
        }
    },
    plus_quantity:(state,action)=>{
      var index=-1;
      var product=action.payload.product
      var size=action.payload.valueall.valueSize
      const findProductIndex =(product)=>{
        const cart_1=state.cart
          for(var i =0;i<cart_1.length;i++){
            if(cart_1[i].product.id===product.id&&cart_1[i].valueall.valueSize===size){
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