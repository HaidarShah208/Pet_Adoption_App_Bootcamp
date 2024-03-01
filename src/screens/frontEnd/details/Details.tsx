import {View, Text, Image} from 'react-native';
import React from 'react';
import {DETAILS, HOME, IMAGES} from '../../../constants/assessts/AllAssessts';
import {DetialsStyle} from '../../../styles/frontEnd/Details';
import Button from '../../../components/button/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../../navigation/detailNavigation/DetailNavigation';
import {styleHome} from '../../../styles/frontEnd/Home';
import useDetails from '../../../hooks/frontendHooks/useDetails';
import {RouteProp} from '@react-navigation/native';

interface DetailsProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'details'>;
  route: RouteProp<RootStackParamsDetailsList, 'details'>;
}
export default function Details({navigation, route}: DetailsProps) {
  const {userData, donationData} = useDetails({route});

  console.log('donationsData', donationData.userId);
  return (
    <View style={DetialsStyle.MainConaier}>
      <View style={DetialsStyle.ImgView}>
        <Image
          source={{uri: donationData.imageURL}}
          style={{width: 400, height: 380}}
        />
        <IMAGES.DetailBack
          style={{
            position: 'absolute',
            top: 60,
            width: 20,
            height: 20,
            left: 20,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={DetialsStyle.InfoContainer}>
        <View style={DetialsStyle.InfoHeading}>
          <View>
            <Text style={DetialsStyle.InfoText}>{donationData.petBreed}</Text>
            <Text style={DetialsStyle.InfoSub}>{donationData.petType}</Text>
          </View>
          <View>
            <Text style={DetialsStyle.Price}>{donationData.amount}</Text>
          </View>
        </View>
        <View style={DetialsStyle.furthurConainer}>
          <View style={DetialsStyle.furthurInfo}>
            <Text style={DetialsStyle.inerTxt}>Age</Text>
            <Text style={DetialsStyle.inerTxts}>{donationData.age}</Text>
          </View>
          <View style={DetialsStyle.furthurInfo}>
            <Text style={DetialsStyle.inerTxt}>Gender</Text>
            <Text style={DetialsStyle.inerTxts}>{donationData.gender}</Text>
          </View>
          <View style={DetialsStyle.furthurInfo}>
            <Text style={DetialsStyle.inerTxt}>Weight</Text>
            <Text style={DetialsStyle.inerTxts}>{donationData.petWeight}</Text>
          </View>
          <View style={DetialsStyle.furthurInfo}>
            <Text style={DetialsStyle.inerTxt}>Vaccine</Text>
            <Text style={DetialsStyle.inerTxts}>{donationData.vaccinated}</Text>
          </View>
        </View>

        <View style={DetialsStyle.MainInfo}>
          <View style={DetialsStyle.detailsInfo}>
            {userData && userData.photoURL ? (
              <Image
                source={{uri: userData.photoURL}}
                style={styleHome.userImage}
              />
            ) : (
              <HOME.DefaultHome
                height={48}
                width={48}
                style={{borderRadius: 30}}
              />
            )}
            <View style={DetialsStyle.NameInfo}>
              <Text style={DetialsStyle.Name}>
                {userData ? userData.username : 'unknown'}
              </Text>
              <Text style={DetialsStyle.owner}>Owner</Text>
            </View>
          </View>
          <View style={DetialsStyle.locaiton}>
            <Text style={DetialsStyle.loc}>{donationData.petLocation}</Text>
            <DETAILS.Location width={11} height={17} />
          </View>
        </View>

        <View style={DetialsStyle.DisContainer}>
          <Text style={DetialsStyle.discription}>
            {' '}
            {donationData.description}...
            <Text style={DetialsStyle.readMore}>Read more</Text>
          </Text>
        </View>
        <View style={DetialsStyle.btnsContainer}>
          <Button
            title={'Adopt Now'}
            buttonStyle={DetialsStyle.buttonStyle}
            onPress={() => console.log('click')}
          />
        </View>
      </View>
    </View>
  );
}
