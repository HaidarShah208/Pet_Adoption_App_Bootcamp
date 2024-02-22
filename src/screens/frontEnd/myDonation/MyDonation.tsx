import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';
import {FAVOURITE, SrchIMAGES} from '../../../constants/assessts/AllAssessts';
import {searchSt} from '../../../styles/frontEnd/Favourite';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {RootStackParamsDetailsList} from '../../../navigation/detailNavigation/DetailNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {fetchDonationData, setDonationData} from '../../../redux/donationSlice';
import {useIsFocused} from '@react-navigation/native';

interface DonationScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'mydonation'>;
}

const MyDonation: React.FC<DonationScreenProps> = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const donationData = useSelector(
    (state: RootState) => state.donation.donationData,
  );
  const loading = useSelector((state: RootState) => state.donation.loading);

  const handleMainContainerClick = (donationItem: any) => {
    navigation.navigate('details', {donationData: donationItem});
  };

  const handleAddImageClick = () => {
    navigation.navigate('donate');
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchDonationData() as any);
    }
  }, [dispatch, isFocused]);

  const handleDeleteImageClick = async (donationId: string) => {
    const userUID = auth().currentUser?.uid;

    if (userUID) {
      try {
        await firestore()
          .collection('userDonation')
          .doc(userUID)
          .collection('donations')
          .doc(donationId)
          .delete();

        dispatch(fetchDonationData() as any);
      } catch (error) {
        console.error('Error deleting donation:', error);
      }
    }
  };
  return (
    <View>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>My Donation</Text>
        <FAVOURITE.ADD onPress={handleAddImageClick} />
      </View>
      <ScrollView>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          donationData?.donations.map((donationItem: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleMainContainerClick(donationItem)}>
              <View style={searchSt.MainContainer}>
                <Image
                  source={{uri:donationItem.imageURL}}
                  style={searchSt.mainImg}
                />
                <View style={searchSt.data}>
                  <Text style={searchSt.heding}>{donationItem.petType}</Text>
                  <View style={searchSt.locator}>
                    <Text style={searchSt.discription}>
                      {donationItem.petLocation}
                    </Text>
                    <SrchIMAGES.Location style={searchSt.locatorImg} />
                  </View>
                  <View style={searchSt.heartSty}>
                    <Text>{donationItem.gender}</Text>
                    <TouchableOpacity
                      onPress={() => handleDeleteImageClick(donationItem.id)}>
                      <FAVOURITE.Delete />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default MyDonation;
