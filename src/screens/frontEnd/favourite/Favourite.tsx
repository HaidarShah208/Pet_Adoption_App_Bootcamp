import { View, Text } from 'react-native'
import React from 'react'
import { RootTabParamsList } from '../../../navigation/tabNavigation/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { searchSt } from '../../../styles/frontEnd/Favourite';
import { ScrollView } from 'react-native-gesture-handler';
import { FAVOURITE, IMAGES, SrchIMAGES } from '../../../constants/assessts/NavigationAssessts';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


interface favrouriteScreenProps {
  navigation:  BottomTabNavigationProp<RootTabParamsList, 'favourite'>;
}
 
 
export default function Favourite({navigation}:favrouriteScreenProps) {
  return (
    <View>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>Favourite</Text>
        <FAVOURITE.ADD/>
      </View>
         <ScrollView>
        <View>
          <View style={searchSt.MainContainer}>
            <SrchIMAGES.Rectangle width={194} height={141} style={searchSt.mainImg} />
            <View style={searchSt.data}>
              <Text style={searchSt.heding}>Bobtail</Text>
              <Text>faislabad city</Text>
              <View style={searchSt.locator}>
                <Text>fsd</Text>
                <SrchIMAGES.Location style={searchSt.locatorImg} />
              </View>
              <View style={searchSt.heartSty}>
                <Text>Male</Text>
                <SrchIMAGES.Heart />
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={searchSt.MainContainer}>
            <SrchIMAGES.Rectangle width={194} height={141} style={searchSt.mainImg} />
            <View style={searchSt.data}>
              <Text style={searchSt.heding}>Bobtail</Text>
              <Text>faislabad city</Text>
              <View style={searchSt.locator}>
                <Text>fsd</Text>
                <SrchIMAGES.Location style={searchSt.locatorImg} />
              </View>
              <View style={searchSt.heartSty}>
                <Text>Male</Text>
                <SrchIMAGES.Heart />
              </View>
            </View>
          </View>
        </View>
        <View>
      
        </View>
      </ScrollView>
    </View>
  )
}