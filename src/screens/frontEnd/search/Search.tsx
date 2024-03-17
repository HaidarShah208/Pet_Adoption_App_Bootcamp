import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {searchSt} from '../../../styles/frontEnd/Search';
import {HOME, SrchIMAGES} from '../../../constants/assessts/AllAssessts';

import {RootStackParamsDetailsList} from '../../../navigation/tabNavigation/DetailsNavigation';
import {YourState} from '../../../constants/allTypes/AllTypes';
import useSearch from '../../../hooks/frontendHooks/useSearch';
import {TextInput} from 'react-native-gesture-handler';
import {styleHome} from '../../../styles/frontEnd/Home';

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
    uniquePetTypes
  } = useSearch();

  return (
    <View style={{marginBottom:200}}>
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
          {uniquePetTypes.map((petType, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemClick(petType)}>
              <View
                style={[
                  searchSt.mar,
                  selectedItem === petType
                    ? searchSt.focusSlider
                    : searchSt.unFocus,
                ]}>
                <Text
                  style={[
                    searchSt.co,
                    selectedItem ===petType
                      ? searchSt.focusText
                      : searchSt.unFocusText,
                  ]}>
                  {petType}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="black" />
          ) : donationData?.donations && donationData.donations.length > 0 ? (
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
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={searchSt.MainContainer}>
                    <Image
                      source={{uri: donationItem.imageURL}}
                      style={searchSt.mainImg}
                    />
                    <View style={searchSt.data}>
                      <Text style={searchSt.heding}>
                        {donationItem.petType}
                      </Text>
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
                </View>
              </TouchableOpacity>
            ))
        ) : (
          <Text style={styleHome.notAvail}>This pet isn't available &#128529;</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
