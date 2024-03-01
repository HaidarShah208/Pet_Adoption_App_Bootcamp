// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfileData } from '../constants/allTypes/AllTypes';
import { RootState } from './store';

interface AuthState {
  // uid(uid: any): unknown;
  username: string;
  email: string;
  photoURL: null;
  isAuth: boolean;
  user: UserProfileData;
  isAppLoading: boolean;
}

const initialState: AuthState = {
  isAuth: false,
  user: {} as UserProfileData,
  isAppLoading: true,
  photoURL: null,
  username: '',
  email: '',
  // uid: '',
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
    setIsAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload;
    },
  },
});

export const { login, logout,setIsAppLoading } = authSlice.actions;
export const selectAuthState = (state: RootState) => {
  return state.auth;
};
export default authSlice.reducer;
