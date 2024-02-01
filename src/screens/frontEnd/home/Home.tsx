import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../navigation/stackNavigation/Navigator';
import {styleHome} from '../../../styles/frontEnd/Home';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Navigator from '../../../navigation/tabNavigation/Navigator';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'home'>;
}
export default function Home({navigation}: HomeScreenProps) {
  return (
    <View>
      <View style={styleHome.header}>
        <Image source={require('../../../assests/nav.png')} />
        <Image source={require('../../../assests/user.png')} />
      </View>
      <Text style={styleHome.tesxt}>
        Find an {'\n'}Awesome {'\n'}pets for you{' '}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder="pet search" style={styleHome.input} />
        <TouchableOpacity onPress={() => console.log('Button pressed')}>
          <View style={styleHome.searchB}>
            <Image source={require('../../../assests/search.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true} // Enable horizontal scrolling
        contentContainerStyle={styleHome.scrollImage}>
        <View>
          <Image
            source={require('../../../assests/scrlImage.png')}
          />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
      </ScrollView>
<View >
<Text style={styleHome.homeHeading}>For You</Text>
</View>
      <ScrollView contentContainerStyle={styleHome.largeImages}>
        <View >
          <Image source={require('../../../assests/largeImage.png')} />
        </View>
        <View >
          <Image source={require('../../../assests/largeImage.png')} />
        </View>
        <View >
          <Image source={require('../../../assests/largeImage.png')} />
        </View>
        <View >
          <Image source={require('../../../assests/largeImage.png')} />
        </View>
        <View >
          <Image source={require('../../../assests/largeImage.png')} />
        </View>
      </ScrollView>
    </View>
  );
}
