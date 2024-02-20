import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';
import {FAVOURITE, SrchIMAGES} from '../../../constants/assessts/AllAssessts';
import {searchSt} from '../../../styles/frontEnd/Favourite';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { RootStackParamsDetailsList } from '../../../navigation/detailNavigation/DetailNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { fetchDonationData, setDonationData } from '../../../redux/donationSlice';

 
interface DonationScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'mydonation'>;
}

export default function MyDonation({navigation}:DonationScreenProps) {
  // const [donationData, setDonationData] = useState<any>(null);

  const handleMainContainerClick = () => {
    navigation.navigate('details', {donationData:donationData});
  }
  
  const dispatch = useDispatch();
  const donationData = useSelector((state: RootState) => state.donation.donationData);
  const loading = useSelector((state: RootState) => state.donation.loading);

  useEffect(() => {
    dispatch(fetchDonationData() as any);
  }, [dispatch]);

  const handleAddImageClick = () => {
    navigation.navigate('donate');
  };

  const handleDeleteImageClick = async () => {
    const userUID = auth().currentUser?.uid;

    if (userUID) {
      try {
        await firestore().collection('userDonation').doc(userUID).delete();
        console.log('Document successfully deleted.');
        setDonationData(null);  
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    }
  }
  return (
    <View>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>My Donation</Text>
        <FAVOURITE.ADD onPress={handleAddImageClick}/>
      </View>
      <ScrollView >
        <TouchableOpacity onPress={handleMainContainerClick}>
          <View style={searchSt.MainContainer}>
            {donationData ? (
              <View>
                <Image source={{uri:donationData.imageURL}} style={searchSt.mainImg}/>
              <View style={searchSt.data}>
                <Text style={searchSt.heding}>{donationData.petType}</Text>
                {/* <Text style={searchSt.discription}>{donationData.description}</Text> */}
                <View style={searchSt.locator}>
                  <Text style={searchSt.discription}>{donationData.petLocation}</Text>

                  <SrchIMAGES.Location style={searchSt.locatorImg} />
                </View>
                <View style={searchSt.heartSty}>
                  <Text>{donationData.gender}</Text>
                  <TouchableOpacity onPress={handleDeleteImageClick}>
                    <FAVOURITE.Delete />
                  </TouchableOpacity>
                </View>
              </View>
              </View>
            ) : (
              <Text >Loading...</Text>
            )}
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}

