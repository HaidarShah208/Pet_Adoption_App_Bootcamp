import {View, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {searchSt} from '../../../styles/frontEnd/Favourite';
import {ScrollView} from 'react-native-gesture-handler';
import {
  FAVOURITE,
  SrchIMAGES,
} from '../../../constants/assessts/AllAssessts';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {fetchFavoriteDonations} from '../../../redux/getDonationSlice';
import {useIsFocused} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsDetailsList } from '../../../navigation/tabNavigation/DetailsNavigation';
import { YourState } from '../../../constants/allTypes/AllTypes';

interface  FavrouriteScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'search'>;
}
export default function Favourite({navigation}: FavrouriteScreenProps) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const favoriteDonations = useSelector((state: RootState) => state.donation.favoriteDonations,);
  const loading = useSelector((state: RootState) => state.donation.loading);

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchFavoriteDonations() as any);
    }
  }, [dispatch, isFocused]);

  const moveToFav = () => {
    navigation.navigate('search');
  };

  const handleMainContainerClick = (donationItem: YourState) => {
    navigation.navigate('details', {donationData: donationItem} as any);
  };
  return (
    <View>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>Favourite</Text>
        <FAVOURITE.ADD onPress={moveToFav} />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
      <ScrollView>
        {favoriteDonations.map((donationItem: any, index: number) => (
          <TouchableOpacity 
          key={index}
          onPress={() => handleMainContainerClick(donationItem)}>
            <View style={searchSt.MainContainer}>
              <Image
                source={{uri: donationItem.imageURL}}
                style={searchSt.mainImg}
              />
              <View style={searchSt.data}>
                <Text style={searchSt.heding}>{donationItem.petType}</Text>
                <Text style={{color: '#101C1D'}}>age 2 month</Text>
                <View style={searchSt.locator}>
                  <Text style={{color: '#101C1D'}}>
                    {donationItem.petLocation}
                  </Text>
                  <SrchIMAGES.Location style={searchSt.locatorImg} />
                </View>
                <View style={searchSt.heartSty}>
                  <Text style={{color: '#101C1D'}}>{donationItem.gender}</Text>
                  <SrchIMAGES.Heart />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
)}
    </View>
  );
}

function setImageUrl(url: string) {
  throw new Error('Function not implemented.');
}
