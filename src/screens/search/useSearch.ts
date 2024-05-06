import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {fetchDonationData} from '../../store/slice/getDonationSlice';
import {useEffect, useState} from 'react';
export default function useSearch() {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const isFocused = useIsFocused();
  const [searchTerm, setSearchTerm] = useState<string>('');
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
        .collection('allFavrouiteDonaitons')
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
      Toast.show({
        type: 'error',
        text1: 'User  not authenticated',
      });
    }
  };

 

  const filteredDonations =
  donationData?.donations?.filter(donationItem =>
    donationItem.petType.toLowerCase().includes(searchTerm.toLowerCase()),
  ) || [];

  
    const onInputChange = (text: string) => {
      setSearchTerm(text);
      if (filteredDonations.length > 0) {
        setSelectedItem(filteredDonations[0].petType);
      }
    };

    
  return {
    donationData: {donations: filteredDonations},
    handleItemClick,
    selectedItem,
    loading,
    handleFavoriteClick,
    onInputChange,
    searchTerm,
  };
}
