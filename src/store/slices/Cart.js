import { createSlice } from "@reduxjs/toolkit";

const initialState= {
   products: [],
   totalQuantity: 0,
   totalPrice: 0,
 }

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   addToCart (state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id)
      if(itemIndex){
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price
      }else{
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image
        })
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeFromCart (state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id)
      if(findItem){
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.totalQuantity--;
        state.products = state.products.filter((item) => item.id !== id)
      
    }},
    incrementQuantity (state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id)
      if(findItem){
        findItem.quantity++;
        findItem.totalPrice += findItem.price
        state.totalPrice += findItem.price;
        state.totalQuantity++;
      }
    },
    decrementQuantity (state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id)
      if(findItem.quantity > 1){
      if(findItem){
        findItem.quantity--;
        findItem.totalPrice -= findItem.price
        state.totalPrice -= findItem.price;
        state.totalQuantity--;
        
          
        }
      }},
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;