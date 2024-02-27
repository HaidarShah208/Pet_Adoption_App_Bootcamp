// MyDonation.tsx
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { FAVOURITE, SrchIMAGES } from '../../../constants/assessts/AllAssessts';
import { searchSt } from '../../../styles/frontEnd/Favourite';
import { RootStackParamsDetailsList } from '../../../navigation/detailNavigation/DetailNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunk, RootState } from '../../../redux/store';
import { deleteDonation, fetchUserDonations } from '../../../redux/donationSlice';
import { useIsFocused } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

interface DonationScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'mydonation'>;
}

const MyDonation: React.FC<DonationScreenProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const donationData = useSelector((state: RootState) => state.donation.donationData);
  const loading = useSelector((state: RootState) => state.donation.loading);

  const handleMainContainerClick = (donationItem: any) => {
    navigation.navigate('details', { donationData: donationItem });
  };

  const handleAddImageClick = () => {
    navigation.navigate('donate');
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
          <Text>Loading...</Text>
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
