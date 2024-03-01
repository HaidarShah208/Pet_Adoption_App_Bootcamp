import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

export default function useDetails({route}: UseDetailsProps) {
  const [userData, setUserData] = useState<{
    username?: string;
    photoURL?: string;
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

  return {userData, setUserData, currentUser, donationData};
}
