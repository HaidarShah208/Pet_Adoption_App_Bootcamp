import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootTabParamsList} from '../../../navigation/tabNavigation/Navigator';
import {searchSt} from '../../../styles/frontEnd/Favourite';
import {ScrollView} from 'react-native-gesture-handler';
import {
  FAVOURITE,
  IMAGES,
  SrchIMAGES,
} from '../../../constants/assessts/AllAssessts';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {fetchFavoriteDonations} from '../../../redux/donationSlice';
import {useIsFocused} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsDetailsList } from '../../../navigation/tabNavigation/DetailsNavigation';

interface  FavrouriteScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'search'>;
}
export default function Favourite({navigation}: FavrouriteScreenProps) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const favoriteDonations = useSelector((state: RootState) => state.donation.favoriteDonations,);
  
  useEffect(() => {
    if (isFocused) {
      dispatch(fetchFavoriteDonations() as any);
    }
  }, [dispatch, isFocused]);

  const moveToFav = () => {
    navigation.navigate('search');
  };

  const handleMainContainerClick = (donationItem: any) => {
    navigation.navigate('details', {donationData: donationItem});
  };
  return (
    <View>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>Favourite</Text>
        <FAVOURITE.ADD onPress={moveToFav} />
      </View>
      <ScrollView>
        {favoriteDonations.map((donationItem: any, index: number) => (
          <TouchableOpacity 
          key={index}
          onPress={() => handleMainContainerClick(donationItem)}
>
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
    </View>
  );
}

function setImageUrl(url: string) {
  throw new Error('Function not implemented.');
}
