// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, UserProfileData } from '../constants/allTypes/AllTypes';



const initialState: AuthState = {
  isAuth: false,
  user: {} as UserProfileData,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserProfileData>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = {} as UserProfileData;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
