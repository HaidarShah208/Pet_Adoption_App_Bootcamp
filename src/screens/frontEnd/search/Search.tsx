import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamsList } from '../../../navigation/tabNavigation/Navigator';
import { searchSt } from '../../../styles/frontEnd/Search';
import { IMAGES, SrchIMAGES } from '../../../constants/assessts/AllAssessts';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

interface SearchScreenProps {
  navigation: BottomTabNavigationProp<RootTabParamsList, 'search'>;
}

const Search = ({ navigation }: SearchScreenProps) => {
  const datas = Array.from({ length: 42 }, (_, index) => ({
    key: index.toString(),
    text: 'Dogs',
    unfocus: 'cats',
  }));

  const [selectedItem, setSelectedItem] = useState(datas[0]?.key);

  const handleItemClick = (item: any) => {
    setSelectedItem(item.key);
  };


  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput placeholder="pet search" style={searchSt.input} />
        <TouchableOpacity onPress={() => console.log('Button pressed')}>
          <View style={searchSt.searchB}>
            <IMAGES.focusSearch />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={searchSt.scrollImage}
          showsHorizontalScrollIndicator={false}>
          {datas.map(item => (
            <TouchableOpacity
              key={item.key}
              onPress={() => handleItemClick(item)}>
              <View
                style={[
                  searchSt.mar,
                  selectedItem === item.key
                    ? searchSt.focusSlider
                    : searchSt.unFocus,
                ]}>
                <Text
                  style={[
                    searchSt.co,
                    selectedItem === item.key
                      ? searchSt.focusText
                      : searchSt.unFocusText,
                  ]}>
                  {item.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        <View>
          <View style={searchSt.MainContainer}>
            <SrchIMAGES.Rectangle style={searchSt.mainImg} />
            <View style={searchSt.data}>
              <Text style={searchSt.heding}>Bobtail</Text>
              <Text style={{ color: '#101C1D' }}>age 9 month</Text>
              <View style={searchSt.locator}>
                <Text style={{ color: '#101C1D' }}>fsd</Text>
                <SrchIMAGES.Location style={searchSt.locatorImg} />
              </View>
              <View style={searchSt.heartSty}>
                <Text style={{ color: '#101C1D' }}>Male</Text>
                <SrchIMAGES.Heart />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
