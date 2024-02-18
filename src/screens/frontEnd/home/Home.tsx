import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,ScrollView,
  Dimensions,TextInput
} from 'react-native';
import React, { useEffect, useState } from 'react';
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
  const {user} = useAuthContext();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const currentUser = auth().currentUser;
  useEffect(() => {
    if (user.photoURL) {
      setProfileImage(user.photoURL);
    }
  }, [user.photoURL]);
  const openDrawer = () => {
    navigations.dispatch(DrawerActions.openDrawer());
  };

 

  return (
    <View>
      <View style={styleHome.header}>
        <TouchableOpacity onPress={openDrawer}>
          <HOME.NavImg />
        </TouchableOpacity>
        {currentUser && currentUser.photoURL ? (
          <Image source={{ uri: currentUser.photoURL }} style={styleHome.userImage}/>
        ) : (
          <HOME.HomeUser height={48} width={48} style={{borderRadius:30}}/>
        )}
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
