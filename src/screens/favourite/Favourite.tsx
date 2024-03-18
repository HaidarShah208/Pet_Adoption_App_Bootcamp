import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {searchSt} from './Favourite';
import {ScrollView} from 'react-native-gesture-handler';
import {FAVOURITE, SrchIMAGES} from '../../constants/assessts/AllAssets';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../navigation/tabNavigation/DetailsNavigation';
import {YourState} from '../../constants/allTypes/AllTypes';
import useFavourite from './useFavourite';

interface FavrouriteScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'search'>;
}
export default function Favourite({navigation}: FavrouriteScreenProps) {
  const handleMainContainerClick = (donationItem: YourState) => {
    navigation.navigate('details', {donationData: donationItem} as any);
  };

  const {favoriteDonations, loading} = useFavourite();
  return (
    <View style={searchSt.container}>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>Favourite</Text>
        <FAVOURITE.ADD onPress={() => navigation.navigate('search')} />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <ScrollView>
          {favoriteDonations.length === 0 ? (
            <Text style={searchSt.emptText}>
              Your favorite list is empty &#128529;
            </Text>
          ) : (
            favoriteDonations.map((donationItem: any, index: number) => (
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
                      <Text style={{color: '#101C1D'}}>
                        {donationItem.gender}
                      </Text>
                      <SrchIMAGES.Heart />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}

function setImageUrl(url: string) {
  throw new Error('Function not implemented.');
}
