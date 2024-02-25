// store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import donationReducer from './donationSlice';
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    donation: donationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
