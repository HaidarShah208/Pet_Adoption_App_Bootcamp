import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {DETAILS, SrchIMAGES} from '../../../constants/assessts/AllAssessts';
import {requesStyles} from '../../../styles/frontEnd/DonationRequests';
import Button from '../../../components/button/Button';

export default function DonationRequests() {
  const handlepress = () => {
    console.log('press');
  };
  return (
    <ScrollView>
      <View style={requesStyles.container}>
        <Text style={requesStyles.heading}>Donation Requests</Text>
        <View style={requesStyles.card}>
          <View>
            <DETAILS.User style={requesStyles.img} />
          </View>
          <View style={requesStyles.InfoContiaenr}>
            <Text style={requesStyles.furthurInfo}>user Nmae</Text>
            <Text style={requesStyles.furthurInfo}>pet type</Text>
            <Text style={requesStyles.smallText}>ali@gmail.com</Text>
            <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
              <SrchIMAGES.Location style={{marginEnd: 5}} />
              <Text style={requesStyles.small}>pakistan</Text>
            </View>
            <Text>Date</Text>
            <View style={{marginBottom: 80}}>
              <Button
                title={'Contact '}
                buttonStyle={requesStyles.button}
                onPress={handlepress}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
