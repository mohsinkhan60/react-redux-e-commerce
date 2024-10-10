import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
  favorites: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        state.totalPrice -= existingItem.totalPrice;
        state.totalQuantity -= existingItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    
    incrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalPrice += existingItem.price;
        state.totalQuantity++;
      }
    },
    
    decrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalPrice -= existingItem.price;
        state.totalQuantity--;
      }
    },
    
    addToFavorite(state, action) {
      const newItem = action.payload;
      const exists = Array.isArray(state.favorites) && state.favorites.find((item) => item.id === newItem.id);
      if (!exists) {
        state.favorites.push(newItem);
        toast.success("Added to favorites!");
      } else {
        toast.info("This item is already in your favorites!");
      }
    },
    
    removeFromFavorite(state, action) {
      const id = action.payload;
      const existingItem = state.favorites.find((item) => item.id === id);

      if (existingItem) {
        state.favorites = state.favorites.filter((item) => item.id !== id);
        toast.success("Removed from favorites!");
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  removeFromFavorite,
  addToFavorite,
} = cartSlice.actions;

export default cartSlice.reducer;
