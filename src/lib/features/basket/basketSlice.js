import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basket: [],
    total: 0,

};

const basketSlice = createSlice({

    initialState,
    name: 'basket',
    reducers: {
        addBasket(state, action) {
            state.basket.push(action.payload);
            state.total += action.payload.price;
        },
        removeBasket(state, action) {
            const index = state.basket.findIndex((item) => item.id === action.payload.id);
            state.basket.splice(index, 1);
            state.total -= action.payload.price;
        },
    },

});

export const { addBasket, removeBasket } = basketSlice.actions;

export default basketSlice.reducer;