import { View, Text } from 'react-native'
import React from 'react'
import { DETAILS } from '../../../constants/assessts/NavigationAssessts'
import { DetialsStyle } from '../../../styles/frontEnd/Details'

export default function Details() {
  return (
    <View style={DetialsStyle.MainConaier}>
     <View style={DetialsStyle.ImgView}>
     <DETAILS.MainIMG  style={DetialsStyle.bgIMG}  />
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
        {/* Add more content here as needed */}
      </View>
    </View>
  )
}
