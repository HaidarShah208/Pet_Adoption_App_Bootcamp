import { View, Text } from 'react-native'
import React from 'react'
import { DETAILS } from '../../../constants/assessts/NavigationAssessts'
import { DetialsStyle } from '../../../styles/frontEnd/Details'
import Button from '../../../components/button/Button'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '../../../navigation/stackNavigation/Navigator'

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'details'>;
}
export default function Details({navigation}:LoginScreenProps) {
  return (
    <View style={DetialsStyle.MainConaier}>
     <View style={DetialsStyle.ImgView}>
     <DETAILS.MainIMG width={700}  />
     </View>
      <View style={DetialsStyle.InfoContainer}>
        <View style={DetialsStyle.InfoHeading}>
          <View >
            <Text style={DetialsStyle.InfoText}>Cavachon</Text>
            <Text style={DetialsStyle.InfoSub}>Dog</Text>
          </View>
          <View>
            <Text style={DetialsStyle.Price}>$225</Text>
          </View>
        </View>
        <View style={DetialsStyle.furthurConainer}>
        <View style={DetialsStyle.furthurInfo}>
          <Text style={DetialsStyle.inerTxt}>Age</Text>
          <Text style={DetialsStyle.inerTxts}>4</Text>
        </View>
        <View style={DetialsStyle.furthurInfo}>
          <Text style={DetialsStyle.inerTxt}>Age</Text>
          <Text style={DetialsStyle.inerTxts}>4</Text>
        </View>
        <View style={DetialsStyle.furthurInfo}>
          <Text style={DetialsStyle.inerTxt}>Age</Text>
          <Text style={DetialsStyle.inerTxts}>4</Text>
        </View>
        <View style={DetialsStyle.furthurInfo}>
          <Text style={DetialsStyle.inerTxt}>Age</Text>
          <Text style={DetialsStyle.inerTxts}>4</Text>
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
          <Text style={DetialsStyle.loc}>Fsd</Text>
          <DETAILS.Location width={11} height={17}/>
        </View>
      </View>

      <View style={DetialsStyle.DisContainer}>
        <Text style={DetialsStyle.discription} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae, perspiciatis placeat quisquam unde rem sun reo repellat...<Text style={DetialsStyle.readMore}>Read more</Text></Text>
      </View >
<View style={DetialsStyle.btnsContainer}>
<Button title={'Adopt Now'} buttonStyle={DetialsStyle.buttonStyle} onPress={()=>console.log('click')}/>
</View>
      </View>
    </View>
  )
}
