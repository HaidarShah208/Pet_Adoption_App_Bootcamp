// donationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { ReactNode } from 'react';

interface Donation {
  id:string;
  imageURL: string;
  petType: string;
  petLocation: string;
  gender: string;
  amount: number;
  description: string;
  petBreed: string;
  petWeight: number;
  vaccinated: boolean;
}

export interface DonationData {
  petType: ReactNode;
  petLocation: ReactNode;
  gender: ReactNode;
  imageURL: string ;
  donations: Donation[];
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

export const fetchDonationData = (): AppThunk => async (dispatch) => {
  const userUID = auth().currentUser?.uid;

  if (userUID) {
    try {
      const donationsCollection = await firestore()
        .collection('userDonation')
        .doc(userUID)
        .collection('donations')
        .get();

      if (!donationsCollection.empty) {
        const donationData: DonationData = {
          petType: '', // Modify this based on how you want to aggregate data from the sub-collection
          petLocation: '',
          gender: '',
          imageURL: '', // You may want to set this to something meaningful
          donations: donationsCollection.docs.map((doc) => doc.data() as Donation),
        };

        console.log('Donations from Firestore:', donationData);

        dispatch(setDonationData(donationData));
      } else {
        console.log('No data found in the donations sub-collection');
      }
    } catch (error) {
      console.error('Error fetching donation data from Firestores: ', error);
    } finally {
      dispatch(setLoading(false));
    }
  } else {
    console.error('User not authenticated');
  }
};

export default donationSlice.reducer;
