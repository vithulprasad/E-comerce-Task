import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      const fin = state.find((value) => value.id === newItem.id);

      if (!fin) {
        const data = {
          name: newItem.name,
          price: newItem.price,
          about: newItem.about,
          category: newItem.category,
          image: newItem.image,
          id: newItem.id,
          quantity: newItem.quantity
        };
        state.push(data);
        toast.success(`Item added to the cart`);
      } else {
        toast.error(`Item is already in the cart!`);
      }
    },
    increment: (state, action) => {
      const newItem = action.payload;
      return state.map((item) =>
        item.id === newItem ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decrement: (state, action) => {
      const newItem = action.payload;
      return state.map((item) =>
        item.id === newItem && item.quantity > 0
          ? { ...item, quantity: item.quantity >1 ?item.quantity - 1 :item.quantity =1 }
          : item
      );
    },
    remove:(state)=>{
        state = []
        return state 
    },
    removeSingle:(state, action) => {
        const newItemId = action.payload;
        const newState = state.filter(item => item.id !== newItemId);
        return newState;
      },
  },
});

export const { addCart, increment, decrement,remove,removeSingle } = cart.actions;
export default cart.reducer;
