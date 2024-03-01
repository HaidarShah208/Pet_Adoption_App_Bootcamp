// MyDonation.tsx
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { FAVOURITE, SrchIMAGES } from '../../../constants/assessts/AllAssessts';
import { searchSt } from '../../../styles/frontEnd/Favourite';
import { RootStackParamsDetailsList } from '../../../navigation/detailNavigation/DetailNavigation';
import { useDispatch, useSelector } from 'react-redux';
import {  RootState } from '../../../redux/store';
import { deleteDonation, fetchUserDonations } from '../../../redux/getDonationSlice';
import { useIsFocused } from '@react-navigation/native';
import { YourState } from '../../../constants/allTypes/AllTypes';

interface DonationScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'mydonation'>;
}

const MyDonation: React.FC<DonationScreenProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const donationData = useSelector((state: RootState) => state.donation.donationData);
  const loading = useSelector((state: RootState) => state.donation.loading);

  const handleMainContainerClick = (donationItem: YourState) => {
    navigation.navigate('details', { donationData: donationItem } as any);
  };

  const handleAddImageClick = () => {
    navigation.navigate('Add_Pet');
  };

  const handleDeleteClick = (donationItem: any) => {
    const donationId = donationItem.donationId;

    if (donationId) {
      dispatch(deleteDonation(donationId) as any);
    } else {
      console.error("Donation ID not found in the donationItem");
    }
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchUserDonations() as any);
    }
  }, [dispatch, isFocused]);

  return (
    <View>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>My Donation</Text>
        <FAVOURITE.ADD onPress={handleAddImageClick} />
      </View>
      <ScrollView>
        {loading ? (
                       <ActivityIndicator size="large" color="black" />
        ) : (
          donationData?.donations.map((donationItem: any, index: number) => (
            <TouchableOpacity key={index} onPress={() => handleMainContainerClick(donationItem)}>
              <View style={searchSt.MainContainer}>
                <Image source={{ uri: donationItem.imageURL }} style={searchSt.mainImg} />
                <View style={searchSt.data}>
                  <Text style={searchSt.heding}>{donationItem.petType}</Text>
                  <View style={searchSt.locator}>
                    <Text style={searchSt.discription}>{donationItem.petLocation}</Text>
                    <SrchIMAGES.Location style={searchSt.locatorImg} />
                  </View>
                  <View style={searchSt.heartSty}>
                    <Text>{donationItem.gender}</Text>
                    <TouchableOpacity onPress={() => handleDeleteClick(donationItem)}>
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
