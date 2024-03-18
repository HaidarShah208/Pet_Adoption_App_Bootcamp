import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { SrchIMAGES} from '../../constants/assessts/AllAssets';
import {requesStyles} from './DonationRequests';
import { styleHome } from '../home/Home';
import useDonationRequest from './useDonationRequest'

export default function DonationRequests() {
 const {donations,loadingDonations,handleContactPress}=useDonationRequest()
  return (
    <ScrollView>
      <View style={requesStyles.container}>
        <Text style={requesStyles.heading}>Donation Requests</Text>
        {loadingDonations ? (
          <ActivityIndicator size="large" color="black" />
          ) : donations.length === 0 ? (
            <Text style={styleHome.notAvail}>Your request list is empty &#128529;</Text>
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
                  <Text style={{color:"black"}}>
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
