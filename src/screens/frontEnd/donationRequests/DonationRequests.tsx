import {View, Text, ScrollView,Button} from 'react-native';
import React from 'react';
import {
  IMAGES,
  SrchIMAGES,
} from '../../../constants/assessts/AllAssessts';
import {requesStyles} from '../../../styles/frontEnd/DonationRequests';

export default function DonationRequests() {
  const handlepress = () => {
    console.log('press');
  };
  return (
    <ScrollView>
      <View style={requesStyles.container}>
        <Text style={requesStyles.heading}>Donation Requests</Text>
        <View style={requesStyles.card}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View>
              <IMAGES.contact style={requesStyles.img} />
            </View>
            <View style={requesStyles.InfoContiaenr}>
              <Text style={requesStyles.furthurInfo}>user Nmae</Text>
              <Text style={requesStyles.furthurInfo}>pet type</Text>
              <Text style={requesStyles.smallText}>ali@gmail.com</Text>
              <View
                style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                <SrchIMAGES.Location style={{marginEnd: 5}} />
                <Text style={requesStyles.small}>pakistan</Text>
              </View>
              <Text>Date</Text>
            </View>
          </View>
          <View >
           <Text style={requesStyles.button}>Contact</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
