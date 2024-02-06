import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamsList } from '../../../navigation/tabNavigation/Navigator';
import { searchSt } from '../../../styles/frontEnd/Search';
import { SrchIMAGES } from '../../../constants/assessts/NavigationAssessts';
// import Logo from '../../../assests/Rectangle 24.svg'

interface SearchScreenProps {
  navigation: StackNavigationProp<RootTabParamsList, 'search'>;
}

const Search = ({ navigation }: SearchScreenProps) => {
  const datas = Array.from({ length: 42 }, (_, index) => ({ key: index.toString(), text: 'Dogs' ,unfocus:'cats'}));

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item: any) => {
    setSelectedItem(item.key === selectedItem ? null : item.key);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput placeholder="pet search" style={searchSt.input} />
        <TouchableOpacity onPress={() => console.log('Button pressed')}>
          <View style={searchSt.searchB}>
            <Image source={require('../../../assests/focusSearch.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <ScrollView horizontal={true} contentContainerStyle={searchSt.scrollImage} showsHorizontalScrollIndicator={false}>
          {datas.map((item) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => handleItemClick(item)}
            >
              <View style={[searchSt.mar, selectedItem === item.key ? searchSt.focusSlider : searchSt.unFocus ]}>
                <Text style={[searchSt.co,  selectedItem === item.key ? searchSt.focusText : searchSt.unFocusText]}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View>
      <SrchIMAGES.Rectangle />
      </View>
    </View>
  );
};

export default Search;
