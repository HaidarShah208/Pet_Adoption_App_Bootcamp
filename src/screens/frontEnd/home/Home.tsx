import {View,Text,Image,TouchableOpacity,ScrollView, ImageBackground
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styleHome} from '../../../styles/frontEnd/Home';
import {DrawerActions, useIsFocused, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useAuthContext} from '../../../context/AuthContext';
import {HOME, IMAGES} from '../../../constants/assessts/AllAssessts';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RootTabParamsList} from '../../../navigation/tabNavigation/Navigator';
import Input from '../../../components/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { fetchDonationData } from '../../../redux/donationSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsDetailsList } from '../../../navigation/tabNavigation/DetailsNavigation';


interface  HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'home'>;
}

export default function Home({navigation}: HomeScreenProps) {
  const navigations = useNavigation();
  const {user} = useAuthContext();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const donationData = useSelector(
    (state: RootState) => state.donation.donationData,
  );
  const loading = useSelector((state: RootState) => state.donation.loading);
  useEffect(() => {
    if (isFocused) {
      dispatch(fetchDonationData() as any);
    }
  }, [dispatch, isFocused]);

  const currentUser = auth().currentUser;
  useEffect(() => {
    if (user.photoURL) {
      setProfileImage(user.photoURL);
    }
  }, [user.photoURL]);

 
  const openDrawer = () => {
    navigations.dispatch(DrawerActions.openDrawer());
  };


  const handleMainContainerClick = (donationItem: any) => {
    navigation.navigate('details', {donationData: donationItem});
  };
  // console.log('donatinDAta is here',donationItem)
  return (
    <View>
      <View style={styleHome.header}>
        <TouchableOpacity onPress={openDrawer}>
          <HOME.NavImg />
        </TouchableOpacity>
        {currentUser && currentUser.photoURL ? (
          <Image source={{uri:currentUser.photoURL}} style={styleHome.userImage}/>
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
              {loading ? (
          <Text>Loading...</Text>
        ) : (
          donationData?.donations.map((donationItem: any, index: number) => (
       <TouchableOpacity    key={index}  onPress={() => handleMainContainerClick(donationItem)}>
           <View style={{marginHorizontal: 4}}>
             <Image source={{uri:donationItem.imageURL}} style={styleHome.imageSize}/>
            <Text style={styleHome.tsxt}>{donationItem.petType}</Text>
          </View>
       </TouchableOpacity>
          ))
          )}
        </ScrollView>
      </View>
      <View>
        <Text style={styleHome.homeHeading}>For You</Text>
      </View>
      <ScrollView>
      {loading ? (
          <Text>Loading...</Text>
        ) : (
          donationData?.donations.map((donationItem: any, index: number) => (
    <TouchableOpacity 
    key={index}
    onPress={() => handleMainContainerClick(donationItem)}>
          <ImageBackground source={{uri:donationItem.imageURL}} style={styleHome.largeImages} >
        <View style={{paddingStart:15,paddingTop:10}} >
      <Text style={styleHome.Imagetext}>{donationItem.petBreed}</Text>
      <Text style={styleHome.Imagetext}>{donationItem.petType}</Text>
      <Text style={styleHome.imageAmount}>{donationItem.amount}</Text>
    </View>
        </ImageBackground>
    </TouchableOpacity>
         ))
         )}
      </ScrollView>
    </View>
  );
}
