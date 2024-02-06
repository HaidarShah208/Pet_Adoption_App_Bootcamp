import {View, Text, Image, Button, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../navigation/stackNavigation/Navigator';
import {styleHome} from '../../../styles/frontEnd/Home';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import DrawerNavigator, { RootDrawerParamsList } from '../../../navigation/drawerNavigation/DrawerNavigator';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import { useAuthContext } from '../../../context/AuthContext';
import Toast from 'react-native-toast-message';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'home'>;
}

export default function Home({navigation}: HomeScreenProps) {
  const navigations = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const {dispatch}=useAuthContext()

  // const handleLogout = async () => {
  //   try {
  //     await auth().signOut();
  //     dispatch({ type: 'Logout' }); // Dispatch "Logout" action
  //     Toast.show({
  //       type: 'success',
  //       text1: 'Logged out successfully',
  //     });
  //     navigation.navigate('login'); // Redirect to login screen
  //   } catch (error) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Failed to log out',
  //     });
  //     console.error('Logout error:', error);
  //   }
  // };

  const width=Dimensions.get("window").width
  return (
    <View>
      <View style={styleHome.header}>
      <TouchableOpacity onPress={openDrawer}>
          <Image source={require('../../../assests/nav.png')} />
        </TouchableOpacity>
        <Image source={require('../../../assests/user.png')} />
      </View>
      <Text style={styleHome.tesxt}>
        Find an {'\n'}Awesome {'\n'}pets for you{' '}
      </Text>
      {/* <Button title='lgoout' onPress={handleLogout}/> */}
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder="pet search" style={styleHome.input} />
        <TouchableOpacity onPress={() => console.log('Button pressed')}>
          <View style={styleHome.searchB}>
            <Image source={require('../../../assests/focusSearch.png')} />
          </View>
        </TouchableOpacity>
      </View>
<View style={{flexDirection:'row'}}>
<ScrollView 
        horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={styleHome.scrollImage}>
        <View style={{marginHorizontal:4}}>
          <Image
            source={require('../../../assests/scrlImage.png')}
          />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View style={{marginHorizontal:3}}>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View style={{marginHorizontal:3}}>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View style={{marginHorizontal:3}}>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View style={{marginHorizontal:3}}>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View style={{marginHorizontal:3}}>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View style={{marginHorizontal:3}}>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View >
        <View style={{marginHorizontal:3}}>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View style={{marginHorizontal:3}}>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View style={{marginHorizontal:3}}>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
        <View style={{marginHorizontal:3}}>
          <Image source={require('../../../assests/scrlImage.png')} />
          <Text style={styleHome.tsxt}>cats</Text>
        </View>
      </ScrollView>
</View>
<View >
<Text style={styleHome.homeHeading}>For You</Text>
</View>
    <ScrollView contentContainerStyle={styleHome.largeImages}>
        <View >
          <Image source={require('../../../assests/largeImage.png')} />
        </View>
        <View >
          <Image source={require('../../../assests/largeImage.png')} />
        </View >
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
