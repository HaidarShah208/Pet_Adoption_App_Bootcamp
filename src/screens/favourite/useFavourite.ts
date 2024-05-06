import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {fetchFavoriteDonations} from '../../store/slice/getDonationSlice';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';

export default function useFavourite() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const favoriteDonations = useSelector(
    (state: RootState) => state.donation.favoriteDonations,
  );
  const loading = useSelector((state: RootState) => state.donation.loading);

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchFavoriteDonations() as any);
    }
  }, [dispatch, isFocused]);

  return {favoriteDonations, loading};
}
