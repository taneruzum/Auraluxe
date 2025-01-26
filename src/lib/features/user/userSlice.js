import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authControl: false,
  username: '',
  email: '',
  address: '',
  city: '',
  country: '',
  // Diğer başlangıç durumları
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.authControl = true;
      state.username = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.country = action.payload.country;
    },
    logout(state) {
      state.authControl = false;
      state.username = '';
      state.email = '';
      state.address = '';
      state.city = '';
      state.country = '';
    }

    // Diğer reducerlar
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;