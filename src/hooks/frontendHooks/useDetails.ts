import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../../store/slice/authSlice';

export default function useDetails({ route }: any) {
  const [userData, setUserData] = useState<{
    username?: string;
    photoURL?: string;
    uid: string;
  } | null>(null);
  const currentUser = auth().currentUser;
  const { donationData } = route.params;
  const user = useSelector(selectAuthState);

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
            const { username, photoURL, uid } = userDataFromFirestore;
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

  const handleAdoptNow = async () => {
    if (!auth().currentUser) {
      Alert.alert('Authentication Error', 'Please log in to adopt.');
      return;
    }

    const currentUser = auth().currentUser;
    const userEmail = currentUser?.email;
    const userName = userData?.username || ''; // Get the username from userData
    const uid = currentUser?.uid;
    const userPhotoURL = currentUser?.photoURL || ''; // Get the photo URL from currentUser
    const owneruid = userData?.uid;

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
        'There was an error submitting the adoption request. Please try again.'
      );
    }
  };

  return { userData, setUserData, currentUser, donationData, handleAdoptNow };
}
