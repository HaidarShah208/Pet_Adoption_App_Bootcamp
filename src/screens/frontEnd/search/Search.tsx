import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {searchSt} from '../../../styles/frontEnd/Search';
import {
  HOME,
  IMAGES,
  SrchIMAGES,
} from '../../../constants/assessts/AllAssessts';

import {RootStackParamsDetailsList} from '../../../navigation/tabNavigation/DetailsNavigation';
import {YourState} from '../../../constants/allTypes/AllTypes';
import useSearch from '../../../hooks/frontendHooks/useSearch';
import Input from '../../../components/input/Input';
import {styleHome} from '../../../styles/frontEnd/Home';
import {TextInput} from 'react-native-gesture-handler';

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
    onInputChange,
    searchTerm,
  } = useSearch();

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="Pet search"
          style={searchSt.inputs}
          onChangeText={onInputChange}
          value={searchTerm}
        />
        <TouchableOpacity>
          <View style={searchSt.searchBs}>
            <HOME.FocusImg />
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
        ) : donationData?.donations ? (
          donationData.donations
            .filter(donationItem =>
              donationItem.petType
                .toLowerCase()
                .includes(selectedItem.toLowerCase()),
            )
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
        ) : (
          <Text>No donations available.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
