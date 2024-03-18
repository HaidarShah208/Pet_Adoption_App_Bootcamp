import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchUserDonations } from '../../store/slice/getDonationSlice';
import { Linking } from 'react-native';
import Toast from 'react-native-toast-message';

export default function useDonationRequest() {
    const dispatch = useDispatch();
    const {donations, loadingDonations} = useSelector(
      (state: RootState) => state.request,
    );
  
  
    useEffect(() => {
      dispatch(fetchUserDonations() as any);
    }, [dispatch]);
  
    const handleContactPress = (email: any) => {
      const emailLink = `mailto:${email}`;
  
      Linking.openURL(emailLink).catch(() =>
        Toast.show({
          type: 'error',
          text1: 'Error opening email app:',
        }),
      );
    };
  return (
   {donations,loadingDonations,handleContactPress}
  )
}
