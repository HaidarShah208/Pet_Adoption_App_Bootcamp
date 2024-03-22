// store.ts
import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import getDonationReducer from './slice/getDonationSlice';
import dontionRequest from './slice/getDonationRequestSlice';
import authReducer from './slice/authSlice';
import {useDispatch,} from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    donation: getDonationReducer,
    request: dontionRequest,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
