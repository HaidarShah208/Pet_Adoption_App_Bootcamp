import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Toast from 'react-native-toast-message';

export default function useDetails({route}: any) {
  const [userData, setUserData] = useState<{
    username?: string;
    photoURL?: string;
    uid: string;
  } | null>(null);
  const currentUser = auth().currentUser;
  const {donationData} = route.params;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await firestore()
          .collection('users')
          .doc(donationData.userId)
          .get();
        if (userDoc.exists && userDoc.data()) {
          setUserData(userDoc.data() as any);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
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
    const userName = currentUser?.displayName;
    const uid = currentUser?.uid;
    console.log('currentUser', currentUser);
    const userPhotoURL = currentUser?.photoURL;
    const owneruid = userData?.uid;
    console.log('userData', userData);

    try {
      const timestamp = new Date().getDate();

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
        text1: 'Request send successfully',
      });
    } catch (error) {
      console.error('Error submitting adoption request:', error);
      Alert.alert(
        'Error',
        'There was an error submitting the adoption request. Please try again.',
      );
    }
  };

  return {userData, setUserData, currentUser, donationData, handleAdoptNow};
}
