import {
  View,
  Text,
  ScrollView,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {requesStyles} from './DonationRequestsStyle';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserDonations} from '../../store/slice/getDonationRequestSlice';
import {RootState} from '../../store/store';
import Toast from 'react-native-toast-message';
import {styleHome} from '../../screens/home/HomeStyle';
import {HOME, IMAGES, SrchIMAGES} from '../../constants/assets/images';

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
        ) : donations.length === 0 ? (
          <Text style={styleHome.notAvail}>
            Your request list is empty &#128529;
          </Text>
        ) : (
          donations.map(donation => (
            <View key={donation.donationId} style={requesStyles.card}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View>
                  {donation && donation.userPhotoURL ? (
                    <Image
                      source={{uri: donation?.userPhotoURL}}
                      style={requesStyles.img}
                    />
                  ) : (
                    <View    style={requesStyles.img}>
                      <IMAGES.Defaults
                        width={72}
                        height={72}
                     
                      />
                    </View>
                  )}
                </View>
                <View style={requesStyles.InfoContiaenr}>
                  <Text style={requesStyles.furthurInfo}>
                    {donation.userName}
                  </Text>
                  <View style={requesStyles.flex}>
                    <Text style={requesStyles.furthurInfo}>
                      {donation.petName}
                    </Text>
                    <Text style={requesStyles.dash}>-</Text>
                    <Text style={requesStyles.furthurInfo}>
                      {donation.petBreed}
                    </Text>
                  </View>
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
                  <Text style={{color: 'black'}}>
                    Date:
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
