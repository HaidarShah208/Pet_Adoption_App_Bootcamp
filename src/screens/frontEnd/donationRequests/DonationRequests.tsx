import {
  View,
  Text,
  ScrollView,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {IMAGES, SrchIMAGES} from '../../../constants/assessts/AllAssessts';
import {requesStyles} from '../../../styles/frontEnd/DonationRequests';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserDonations} from '../../../store/slice/getDonationRequestSlice';
import {RootState} from '../../../store/store';
import Toast from 'react-native-toast-message';

export default function DonationRequests() {
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
    <ScrollView>
      <View style={requesStyles.container}>
        <Text style={requesStyles.heading}>Donation Requests</Text>
        {loadingDonations ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          donations.map(donation => (
            <View key={donation.donationId} style={requesStyles.card}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View>
                  <Image
                    source={{uri: donation?.userPhotoURL}}
                    style={requesStyles.img}
                  />
                </View>
                <View style={requesStyles.InfoContiaenr}>
                  <Text style={requesStyles.furthurInfo}>
                    {donation.userName}
                  </Text>
                  <Text style={requesStyles.furthurInfo}>
                    {donation.petBreed}
                  </Text>
                  <Text style={requesStyles.smallText}>
                    {donation.userEmail}
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: 5,
                    }}>
                    <SrchIMAGES.Location style={{marginEnd: 5}} />
                    <Text style={requesStyles.small}>
                      {donation.petLocation}
                    </Text>
                  </View>
                  <Text>
                    Date:{' '}
                    {new Date(donation.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={requesStyles.button}
                  onPress={() => handleContactPress(donation.userEmail)}>
                  Contact
                </Text>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}
