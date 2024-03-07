import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styleHome} from '../../../styles/frontEnd/Home';
import {DrawerActions} from '@react-navigation/native';
import {HOME} from '../../../constants/assessts/AllAssessts';
import Input from '../../../components/input/Input';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../../navigation/tabNavigation/DetailsNavigation';
import {YourState} from '../../../constants/allTypes/AllTypes';
import useHome from '../../../hooks/frontendHooks/useHome';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'home'>;
}

export default function Home({navigation}: HomeScreenProps) {
  const {
    navigations,
    donationDataHorizontal,
    donationDataVertical,
    loading,
    currentUser,
    setSearchInput,
  } = useHome();

  const handleMainContainerClick = (donationItem: YourState) => {
    navigation.navigate('details', {donationData: donationItem} as any);
  };
  return (
    <>
      <View style={styleHome.header}>
        <TouchableOpacity
          onPress={() => navigations.dispatch(DrawerActions.openDrawer())}>
          <HOME.NavImg />
        </TouchableOpacity>
        {currentUser && currentUser.photoURL ? (
          <Image
            source={{uri: currentUser.photoURL}}
            style={styleHome.userImage}
          />
        ) : (
          <HOME.DefaultHome height={48} width={48} style={{borderRadius: 30}} />
        )}
      </View>
      <Text style={styleHome.tesxt}>{`Find an \nAwesome \npets for you`}</Text>
      <Input
        onInputChange={(text: React.SetStateAction<string>) =>
          setSearchInput(text)
        }
      />
      <View style={{flexDirection: 'row'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styleHome.scrollImage}>
          {loading ? (
            <ActivityIndicator size="large" color="black" />
          ) : donationDataHorizontal?.length === 0 ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styleHome.notAvail}>This Pet is not available</Text>
            </View>
          ) : (
            donationDataHorizontal?.map((donationItem: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleMainContainerClick(donationItem)}>
                <View style={{marginHorizontal: 4}}>
                  <Image
                    source={{uri: donationItem.imageURL}}
                    style={styleHome.imageSize}
                  />
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center'}}>
          {loading ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            donationDataVertical?.map((donationItem: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleMainContainerClick(donationItem)}>
                <ImageBackground
                  source={{uri: donationItem.imageURL}}
                  style={styleHome.largeImages}>
                  <View style={{paddingStart: 15, paddingTop: 10}}>
                    <Text style={styleHome.Imagetext}>
                      {donationItem.petBreed}
                    </Text>
                    <Text style={styleHome.Imagetext}>
                      {donationItem.petType}
                    </Text>
                 <View style={{flexDirection:'row'}}>
                  <Text style={styleHome.imageAmount}>$ </Text>
                 <Text style={styleHome.imageAmount}>
                      {donationItem.amount}
                    </Text>
                 </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
}
