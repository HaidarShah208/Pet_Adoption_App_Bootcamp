// donationSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from '../store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ReactNode} from 'react';
import Toast from 'react-native-toast-message';

interface Donation {
  donationId: string;
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
  imageURL: string;
  donations: Donation[];
}

export interface DonationState {
  donationData: DonationData | null;
  favoriteDonations: Donation[];
  loading: boolean;
}

const initialState: DonationState = {
  donationData: null,
  favoriteDonations: [],
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
    setFavoriteDonations: (state, action: PayloadAction<Donation[]>) => {
      state.favoriteDonations = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {setDonationData, setFavoriteDonations, setLoading} =
  donationSlice.actions;

export const fetchDonationData = (): AppThunk => async dispatch => {
  try {
    const donationsCollection = await firestore().collection('donations').get();

    if (!donationsCollection.empty) {
      const donationData: DonationData = {
        petType: '',
        petLocation: '',
        gender: '',
        imageURL: '',
        donations: donationsCollection.docs.map(doc => {
          const data = doc.data() as Donation;
          return {...data, donationId: doc.id};
        }),
      };

      dispatch(setDonationData(donationData));
    } else {
      Toast.show({
        type: 'error',
        text1: 'No data found in the donations collection',
      });
    }
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Error while loading donation information',
    });
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchUserDonations = (): AppThunk => async dispatch => {
  const userUID = auth().currentUser?.uid;

  if (userUID) {
    try {
      const userDonationsCollection = await firestore()
        .collection('donations')
        .where('userId', '==', userUID)
        .get();

      const userDonations: Donation[] = userDonationsCollection.docs.map(
        doc => {
          const data = doc.data() as Donation;
          return {...data, donationId: doc.id};
        },
      );

      const userDonationData: DonationData = {
        petType: '',
        petLocation: '',
        gender: '',
        imageURL: '',
        donations: userDonations,
      };

      dispatch(setDonationData(userDonationData));
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error fetching user donations from Firestore',
      });
    }
  } else {
    Toast.show({
      type: 'error',
      text1: 'User not authenticated',
    });
  }
};

export const fetchFavoriteDonations = (): AppThunk => async dispatch => {
  const userUID = auth().currentUser?.uid;

  if (userUID) {
    try {
      const favoriteCollection = await firestore()
        .collection('allFavrouiteDonaitons')
        .doc(userUID)
        .collection('favoriteDonations')
        .get();

      const favoriteDonations: Donation[] = favoriteCollection.docs.map(
        doc => doc.data() as Donation,
      );
      dispatch(setFavoriteDonations(favoriteDonations));
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error fetching user donations from Firestore',
      });
    }
  } else {
    Toast.show({
      type: 'error',
      text1: 'User not authenticated',
    });
  }
};

export const deleteDonation =
  (donationId: string): AppThunk =>
  async dispatch => {
    const userUID = auth().currentUser?.uid;

    if (userUID) {
      try {
        const donationRef = firestore().collection('donations').doc(donationId);

        await donationRef.delete();

        dispatch(fetchUserDonations());
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error fetching user donations from Firestore',
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'User not authenticated',
      });
    }
  };

export default donationSlice.reducer;
