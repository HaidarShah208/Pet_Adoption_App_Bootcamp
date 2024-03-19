// donationRequestSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from '../store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ReactNode} from 'react';
import Toast from 'react-native-toast-message';

export interface Donation {
  petName: ReactNode;
  userPhotoURL: string | undefined;
  userEmail: ReactNode;
  userName: string;
  donationId: string;
  userId: string;
  petBreed: string;
  petLocation: string;
  date:  number;
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
export const fetchUserDonations = (): AppThunk => async dispatch => {
  const currentUser = auth().currentUser;
  console.log('userCurent', currentUser)
  if (!currentUser) {
    Toast.show({
      type: 'error',
      text1: 'User not valid',
    });
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
    Toast.show({
      type: 'error',
      text1: 'Error in getting donation information',
    });
  } finally {
    dispatch(setLoadingDonations(false));
  }
};

export default donationSlice.reducer;
