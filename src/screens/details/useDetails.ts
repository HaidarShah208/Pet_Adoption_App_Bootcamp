import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthState} from '../../store/slice/authSlice';
import {RootState} from '../../store/store';
import useProfile from '../profile/useProfile';
import { deleteDonation } from '../../store/slice/getDonationSlice';
import { useNavigation } from '@react-navigation/native';

export default function useDetails({route}: any) {
  const {currentUsername} = useProfile();
  const [userData, setUserData] = useState<{
    username?: string;
    photoURL?: string;
    uid: string;
  } | null>(null);
  const currentUser = auth().currentUser;
  const {donationData} = route.params;
  const dispatch = useDispatch();
  const navigation=useNavigation()

  const favoriteDonations = useSelector(
    (state: RootState) => state.donation.favoriteDonations,
  );
  const isDonationFavorite = favoriteDonations.includes(donationData);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await firestore()
          .collection('users')
          .doc(donationData.userId)
          .get();

        if (userDoc.exists) {
          const userDataFromFirestore = userDoc.data();
          if (userDataFromFirestore) {
            const {username, photoURL, uid} = userDataFromFirestore;
            setUserData({
              username: username || '',
              photoURL: photoURL || '',
              uid: uid || '',
            });
          }
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error in fetching user data',
        });
      }
    };

    fetchUserData();
  }, [donationData.userId]);

  const handleDeleteClick = (donationItem: any) => {
    const donationId = donationItem.donationId;

    if (donationId) {
      dispatch(deleteDonation(donationId) as any);
      Toast.show({
        type:'success',
        text1: 'Donation deleted successfully',
      });
      navigation.goBack()
    } else {
      Toast.show({
        type: 'error',
        text1: 'Donation Id not found',
      });
    }
  };

  const handleAdoptNow = async () => {
    if (!auth().currentUser) {
      Alert.alert('Authentication Error', 'Please log in to adopt.');
      return;
    }

    const currentUser = auth().currentUser;
    const userEmail = currentUser?.email;
    const uid = currentUser?.uid;
    const userPhotoURL = currentUser?.photoURL || '';
    const owneruid = userData?.uid;
    const userName = currentUsername;
    try {
      const timestamp = new Date().getTime();

      await firestore().collection('adoptionRequests').add({
        petName: donationData.petBreed,
        petBreed: donationData.petType,
        petLocation: donationData.petLocation,
        userEmail,
        userName,
        userPhotoURL,
        uid,
        owneruid,
        date: timestamp,
      });

      Toast.show({
        type: 'success',
        text1: 'Request sent successfully',
      });
    } catch (error) {
      Alert.alert(
        'Error',
        'There was an error submitting the adoption request. Please try again.',
      );
    }
  };

  return {
    userData,
    setUserData,
    currentUser,
    donationData,
    handleAdoptNow,
    handleDeleteClick,
    isFavorite: isDonationFavorite,
  };
}
