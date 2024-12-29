import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  // Diğer başlangıç durumları
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.username = action.payload.name;
      state.email = action.payload.email;
    },
    // Diğer reducerlar
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;