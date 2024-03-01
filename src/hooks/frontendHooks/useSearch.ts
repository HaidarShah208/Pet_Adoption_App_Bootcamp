import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {YourState} from '../../constants/allTypes/AllTypes';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {fetchDonationData} from '../../redux/getDonationSlice';
import {useEffect, useState} from 'react';
export default function useSearch() {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const donationData = useSelector(
    (state: RootState) => state.donation.donationData,
  );
  const loading = useSelector((state: RootState) => state.donation.loading);

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchDonationData() as any);
    }
  }, [dispatch, isFocused]);

  useEffect(() => {
    if (donationData?.donations && donationData?.donations.length > 0) {
      setSelectedItem(donationData.donations[0].petType);
    }
  }, [donationData]);

  const handleItemClick = (petType: string) => {
    setSelectedItem(petType);
  };

  const handleFavoriteClick = async (donationItem: any) => {
    const userUID = auth().currentUser?.uid;

    if (userUID) {
      const userFavoritesCollection = firestore()
        .collection('All_Favrouite_Donaitons')
        .doc(userUID)
        .collection('favoriteDonations');

      const existingFavorite = await userFavoritesCollection
        .where('petType', '==', donationItem.petType)
        .get();

      if (existingFavorite.empty) {
        await userFavoritesCollection.add(donationItem);
        Toast.show({
          type: 'success',
          text1: 'Added to favorites!',
        });
      } else {
        Toast.show({
          type: 'info',
          text1: 'Already in favorites!',
        });
      }
    } else {
      console.error('User not authenticated');
    }
  };
  return {donationData,handleItemClick,selectedItem,loading,handleFavoriteClick};
}
