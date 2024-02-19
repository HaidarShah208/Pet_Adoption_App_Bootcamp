import { configureStore } from '@reduxjs/toolkit';
import donationSlice from './donationSlice';
const store = configureStore({
  reducer: {
    donation: donationSlice,
  },
});

export default store;