import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,ScrollView,
  Dimensions,TextInput
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../navigation/stackNavigation/Navigator';
import {styleHome} from '../../../styles/frontEnd/Home';
import { } from 'react-native-gesture-handler';
import DrawerNavigator, {
  RootDrawerParamsList,
} from '../../../navigation/drawerNavigation/DrawerNavigator';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import {useAuthContext} from '../../../context/AuthContext';
import Toast from 'react-native-toast-message';
import {HOME, IMAGES} from '../../../constants/assessts/AllAssessts';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RootTabParamsList} from '../../../navigation/tabNavigation/Navigator';
import Input from '../../../components/input/Input';

interface HomeScreenProps {
  navigation: BottomTabNavigationProp<RootTabParamsList, 'home'>;
}

export default function Home({navigation}: HomeScreenProps) {
  const navigations = useNavigation();
  const {user}=useAuthContext()
  const openDrawer = () => {
    navigations.dispatch(DrawerActions.openDrawer());
  };

  const {dispatch} = useAuthContext();

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

  return (
    <View>
      <View style={styleHome.header}>
        <TouchableOpacity onPress={openDrawer}>
          <HOME.NavImg />
        </TouchableOpacity>
        {
        user.photoURL == null ? (
          <HOME.Profile />
        ):(
          <Image source={{uri:user.photoURL}} />
        )
      }
      </View>
      <Text style={styleHome.tesxt}>{`Find an \nAwesome \npets for you`}</Text>
      <Input/>
      
      <View style={{flexDirection: 'row'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styleHome.scrollImage}>
          <View style={{marginHorizontal: 4}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <HOME.ScrlImage />
            <Text style={styleHome.tsxt}>cats</Text>
          </View>
        </ScrollView>
      </View>
      <View>
        <Text style={styleHome.homeHeading}>For You</Text>
      </View>
      <ScrollView>
      <View  style={styleHome.largeImages}>
      <View style={{marginVertical: 10}}>
          <HOME.LargeImg />
        </View>
        <View style={{marginVertical: 10}}>
          <HOME.LargeImg />
        </View>
        <View style={{marginVertical: 10}}>
          <HOME.LargeImg />
        </View>
        <View style={{marginVertical: 10}}>
          <HOME.LargeImg />
        </View>
        <View style={{marginVertical: 10}}>
          <HOME.LargeImg />
        </View>
      </View>
      </ScrollView>
    </View>
  );
}
