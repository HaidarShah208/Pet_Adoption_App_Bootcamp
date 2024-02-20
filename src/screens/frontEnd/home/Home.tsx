import {View,Text,Image,TouchableOpacity,ScrollView, ImageBackground
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styleHome} from '../../../styles/frontEnd/Home';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useAuthContext} from '../../../context/AuthContext';
import Toast from 'react-native-toast-message';
import {HOME, IMAGES} from '../../../constants/assessts/AllAssessts';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RootTabParamsList} from '../../../navigation/tabNavigation/Navigator';
import Input from '../../../components/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { fetchDonationData } from '../../../redux/donationSlice';


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

  const dispatch = useDispatch();
  const donationData = useSelector((state: RootState) => state.donation.donationData);
  const loading = useSelector((state: RootState) => state.donation.loading);

  useEffect(() => {
    dispatch(fetchDonationData() as any);
  }, [dispatch]);
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
             <Image source={{uri:donationData?.imageURL}} style={styleHome.imageSize}/>
            <Text style={styleHome.tsxt}>{donationData?.petType}</Text>
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
      <View>
      <View >
        <ImageBackground source={{uri:donationData?.imageURL}} style={styleHome.largeImages} >
        <View style={{paddingStart:15,paddingTop:10}} >
      <Text style={styleHome.Imagetext}>{donationData?.petBreed}</Text>
      <Text style={styleHome.Imagetext}>{donationData?.petType}</Text>
      <Text style={styleHome.imageAmount}>{donationData?.amount}</Text>
    </View>
        </ImageBackground>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}
