import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';
import {FAVOURITE, SrchIMAGES} from '../../../constants/assessts/AllAssessts';
import {searchSt} from '../../../styles/frontEnd/Favourite';
import {RootStackParamsDetailsList} from '../../../navigation/detailNavigation/DetailNavigation';
import {YourState} from '../../../constants/allTypes/AllTypes';
import useMyDonation from '../../../hooks/frontendHooks/useMyDonation';

interface DonationScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'mydonation'>;
}

const MyDonation: React.FC<DonationScreenProps> = ({
  navigation,
}: DonationScreenProps) => {
  const handleMainContainerClick = (donationItem: YourState) => {
    navigation.navigate('details', {donationData: donationItem} as any);
  };

  const {handleDeleteClick, donationData, loading} = useMyDonation();
  return (
    <View style={searchSt.container}>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>My Donation</Text>
        <FAVOURITE.ADD onPress={() => navigation.navigate('Add_Pet')} />
      </View>
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          donationData?.donations.map((donationItem: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleMainContainerClick(donationItem)}>
              <View style={searchSt.MainContainer}>
                <Image
                  source={{uri: donationItem.imageURL}}
                  style={searchSt.mainImg}
                />
                <View style={searchSt.data}>
                  <Text style={searchSt.heding}>{donationItem.petBreed}</Text>
                  <View style={searchSt.locator}>
                    <Text style={searchSt.discription}>Age: </Text>
                    <Text style={searchSt.discription}>
                      {donationItem.petAge}
                    </Text>
                  </View>
                  <View style={searchSt.locator}>
                    <Text style={searchSt.discription}>
                      {donationItem.petLocation}
                    </Text>
                    <SrchIMAGES.Location style={searchSt.locatorImg} />
                  </View>
                  <View style={searchSt.heartSty}>
                    <Text style={searchSt.discription}>
                      {donationItem.gender}
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleDeleteClick(donationItem)}>
                      <FAVOURITE.Delete style={{marginTop: 8}} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default MyDonation;
