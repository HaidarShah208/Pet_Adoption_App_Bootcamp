// donationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, } from './store'; // Import RootState and AppThunk from your store
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface DonationData {
  imageURL: string;
  petType: string;
  petLocation: string;
  gender: string;
  amount:number;
  description: string;
  petBreed: string;
  petWeight: number;
  vaccinated: boolean;
}

export interface DonationState {
  donationData: DonationData | null;
  loading: boolean;
}

const initialState: DonationState = {
  donationData: null,
  loading: true,
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    setDonationData: (state, action: PayloadAction<DonationData | null>) => {
      state.donationData = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setDonationData, setLoading } = donationSlice.actions;

// Async thunk to fetch data from Firestore
export const fetchDonationData = (): AppThunk => async (dispatch) => {
  const userUID = auth().currentUser?.uid;

  if (userUID) {
    try {
      const donationData = await firestore()
        .collection('userDonation')
        .doc(userUID)
        .get();

      if (donationData.exists) {
        const data = donationData.data();
        console.log('Data from Firestore:', data);
        dispatch(setDonationData(data as DonationData));
      } else {
        console.log('No data found in Firestore');
      }
    } catch (error) {
      console.error('Error fetching data from Firestore: ', error);
    } finally {
      dispatch(setLoading(false));
    }
  } else {
    console.error('User not authenticated');
  }
};

export default donationSlice.reducer;
