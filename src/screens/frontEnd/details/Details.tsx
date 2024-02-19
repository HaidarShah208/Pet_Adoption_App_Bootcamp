import { View, Text, Image } from 'react-native'
import React from 'react'
import { DETAILS } from '../../../constants/assessts/AllAssessts'
import { DetialsStyle } from '../../../styles/frontEnd/Details'
import Button from '../../../components/button/Button'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsDetailsList } from '../../../navigation/detailNavigation/DetailNavigation'

interface DetailsProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'details'>;
  route:any
}
export default function Details({ navigation, route }: DetailsProps) {
  const { donationData } = route.params;
  console.log('donationAllData',donationData)
  return (
    <View style={DetialsStyle.MainConaier}>
     <View style={DetialsStyle.ImgView}>
    <Image source={{uri:donationData.imageURL}} style={{width:370,height:370}}/>
     </View>
      <View style={DetialsStyle.InfoContainer}>
        <View style={DetialsStyle.InfoHeading}>
          <View >
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
          <Text style={DetialsStyle.inerTxts}>{donationData.a}</Text>
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
          <DETAILS.User/>
          <View style={DetialsStyle.NameInfo}>
            <Text style={DetialsStyle.Name}>Shin Ryin</Text>
            <Text style={DetialsStyle.owner}>Owner</Text>
          </View>
        </View>
        <View style={DetialsStyle.locaiton}>
          <Text style={DetialsStyle.loc}>{donationData.petLocation}</Text>
          <DETAILS.Location width={11} height={17}/>
        </View>
      </View>

      <View style={DetialsStyle.DisContainer}>
        <Text style={DetialsStyle.discription} > {donationData.description}...<Text style={DetialsStyle.readMore}>Read more</Text></Text>
      </View >
<View style={DetialsStyle.btnsContainer}>
<Button title={'Adopt Now'} buttonStyle={DetialsStyle.buttonStyle} onPress={()=>console.log('click')}/>
</View>
      </View>
    </View>
  )
}
