// donationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DonationState {
  data: any;  
  
}

const initialState: DonationState = {
  data: null,
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    setDonationData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    clearDonationData: (state) => {
      state.data = null;
    },
  },
});

export const { setDonationData, clearDonationData } = donationSlice.actions;
export default donationSlice.reducer;
