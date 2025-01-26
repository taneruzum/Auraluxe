import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i._id === item._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i._id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i._id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(i => i._id !== itemId);
      }
    },
    // Diğer reducerlar...
  },
});

export const { addToBasket, increaseQuantity, decreaseQuantity } = basketSlice.actions;

export const selectTotalPrice = (state) =>
  state.basket.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default basketSlice.reducer;