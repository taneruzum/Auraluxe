import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authControl: false,
  username: '',
  email: '',
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
    },
    logout(state) {
      state.authControl = false;
      state.username = '';
      state.email = '';
    }

    // Diğer reducerlar
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;