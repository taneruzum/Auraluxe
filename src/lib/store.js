import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import basketReducer from './features/basket/basketSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        basket: basketReducer,
    },
});