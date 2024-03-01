// store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import getDonationReducer from './getDonationSlice';
import authReducer from './authSlice'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    donation: getDonationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//  Hooks for Store

export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
