import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {fetchDonationData} from '../../redux/getDonationSlice';
import auth from '@react-native-firebase/auth';
import { selectAuthState } from '../../redux/authSlice';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';


export default function useHome() {
    const navigations = useNavigation();
    const user=useSelector(selectAuthState)
    const [profileImage, setProfileImage] = useState<string | null>(user?.photoURL || null);
  
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
  
    const currentUser = auth().currentUser;
    useEffect(() => {
      if (user && user.photoURL) {
        setProfileImage(user.photoURL);
      }
    }, [user]);
  return (
 {navigations,profileImage,donationData,loading, currentUser}
  )
}