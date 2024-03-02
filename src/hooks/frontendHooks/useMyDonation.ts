import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {deleteDonation, fetchUserDonations} from '../../redux/getDonationSlice';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';

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
      console.error('Donation ID not found in the donationItem');
    }
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchUserDonations() as any);
    }
  }, [dispatch, isFocused]);
  return {handleDeleteClick,donationData,loading};
}