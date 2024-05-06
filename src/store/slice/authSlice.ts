// authSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthStates, UserProfileData} from '../../constants/allTypes/allTypes';
import {RootState} from '../store';

const initialState: AuthStates = {
  isAuth: false,
  user: {} as UserProfileData,
  isAppLoading: true,
  photoURL: null,
  username: '',
  email: '',
  updateProfile: function (arg0: {photoURL: string}): unknown {
    throw new Error('Function not implemented.');
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserProfileData>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout: state => {
      state.isAuth = false;
      state.user = {} as UserProfileData;
    },
    setIsAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload;
    },
  },
});

export const {login, logout, setIsAppLoading} = authSlice.actions;
export const selectAuthState = (state: RootState) => {
  return state.auth;
};
export default authSlice.reducer;
