import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
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
      state.totalPrice = state.items.reduce((total, item) => total + item.productId.price * item.quantity, 0);
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i._id === itemId);
      if (item) {
        item.quantity += 1;
      }
      state.totalPrice = state.items.reduce((total, item) => total + item.productId.price * item.quantity, 0);
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i._id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(i => i._id !== itemId);
      }
      state.totalPrice = state.items.reduce((total, item) => total + item.productId.price * item.quantity, 0);
    },
    setBasket: (state, action) => {
      state.items = action.payload;
    },
    // Diğer reducerlar...
  },
});

export const { addToBasket, increaseQuantity, decreaseQuantity, setBasket } = basketSlice.actions;


export default basketSlice.reducer;