import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {searchSt} from '../../../styles/frontEnd/Search';
import {IMAGES, SrchIMAGES} from '../../../constants/assessts/AllAssessts';

import {RootStackParamsDetailsList} from '../../../navigation/tabNavigation/DetailsNavigation';
import {YourState} from '../../../constants/allTypes/AllTypes';
import useSearch from '../../../hooks/frontendHooks/useSearch';

interface SearchScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'search'>;
}

const Search = ({navigation}: SearchScreenProps) => {
  const handleMainContainerClick = (donationItem: YourState) => {
    navigation.navigate('details', {donationData: donationItem} as any);
  };

  const {
    donationData,
    handleItemClick,
    selectedItem,
    loading,
    handleFavoriteClick,
  } = useSearch();
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder="pet search" style={searchSt.input} />
        <TouchableOpacity onPress={() => console.log('Button pressed')}>
          <View style={searchSt.searchB}>
            <IMAGES.focusSearch />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'column'}}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={searchSt.scrollImage}
          showsHorizontalScrollIndicator={false}>
          {donationData?.donations?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemClick(item.petType)}>
              <View
                style={[
                  searchSt.mar,
                  selectedItem === item.petType
                    ? searchSt.focusSlider
                    : searchSt.unFocus,
                ]}>
                <Text
                  style={[
                    searchSt.co,
                    selectedItem === item.petType
                      ? searchSt.focusText
                      : searchSt.unFocusText,
                  ]}>
                  {item.petType}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          donationData?.donations
            .filter(donationItem => donationItem.petType === selectedItem)
            .map((donationItem: any, index: number) => (
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
                    <Text style={{color: '#101C1D'}}>age 9 month</Text>
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
                      <TouchableOpacity
                        onPress={() => handleFavoriteClick(donationItem)}>
                        <SrchIMAGES.EmptyHeart />
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

export default Search;
