import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {deleteDonation, fetchUserDonations} from '../../store/slice/getDonationSlice';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';
import Toast from 'react-native-toast-message';

export default function useMyDonation() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const donationData = useSelector(
    (state: RootState) => state.donation.donationData,
  );
  const loading = useSelector((state: RootState) => state.donation.loading);

  const handleDeleteClick = (donationItem: any) => {
    const donationId = donationItem.donationId;

    if (donationId) {
      dispatch(deleteDonation(donationId) as any);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Donation Id not found',
      });
    }
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchUserDonations() as any);
    }
  }, [dispatch, isFocused]);
  return {handleDeleteClick, donationData, loading};
}
