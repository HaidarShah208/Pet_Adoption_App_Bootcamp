// donationRequestSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from '../store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ReactNode} from 'react';

export interface Donation {
  userPhotoURL: string | undefined;
  userEmail: ReactNode;
  userName: ReactNode;
  donationId: string;
  userId: string;
  petBreed: string;
  petLocation: string;
  date: string;
}

export interface DonationState {
  donations: Donation[];
  loadingDonations: boolean;
}

const initialDonationState: DonationState = {
  donations: [],
  loadingDonations: true,
};

const donationSlice = createSlice({
  name: 'donations',
  initialState: initialDonationState,
  reducers: {
    setDonations: (state, action: PayloadAction<Donation[]>) => {
      state.donations = action.payload;
      state.loadingDonations = false;
    },
    setLoadingDonations: (state, action: PayloadAction<boolean>) => {
      state.loadingDonations = action.payload;
    },
  },
});

export const {setDonations, setLoadingDonations} = donationSlice.actions;
console.log('setDonations', setDonations);
export const fetchUserDonations = (): AppThunk => async dispatch => {
  const currentUser = auth().currentUser;
  if (!currentUser) {
    console.error('Invalid owneruid provided');
    return;
  }
  const owneruid = currentUser.uid;
  try {
    const donationCollection = await firestore()
      .collection('adoptionRequests')
      .where('owneruid', '==', owneruid)
      .get();

    const donations: Donation[] = donationCollection.docs.map(doc => {
      const data = doc.data() as Donation;
      return {...data, donationId: doc.id};
    });

    dispatch(setDonations(donations));
  } catch (error) {
    console.error('Error fetching user donations from Firestore: ', error);
  } finally {
    dispatch(setLoadingDonations(false));
  }
};

export default donationSlice.reducer;
