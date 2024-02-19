import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RootTabParamsList } from '../../../navigation/tabNavigation/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { searchSt } from '../../../styles/frontEnd/Favourite';
import { ScrollView } from 'react-native-gesture-handler';
import { FAVOURITE, IMAGES, SrchIMAGES } from '../../../constants/assessts/AllAssessts';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import storage from '@react-native-firebase/storage';
import { DrawerNavigationProp } from '@react-navigation/drawer';


 

export default function Favourite() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

 

  return (
    <View>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>Favourite</Text>
        <FAVOURITE.ADD/>
      </View>
         <ScrollView>
        <View>
          <View style={searchSt.MainContainer}>
            <FAVOURITE.FavRec style={searchSt.mainImg}/>
            <View style={searchSt.data}>
              <Text style={searchSt.heding}>Bobtail</Text>
              <Text style={{color:'#101C1D'}}>age 2 month</Text>
              <View style={searchSt.locator}>
                <Text style={{color:'#101C1D'}}>fsd</Text>
                <SrchIMAGES.Location style={searchSt.locatorImg} />
              </View>
              <View style={searchSt.heartSty}>
                <Text style={{color:'#101C1D'}}>Male</Text>
                <SrchIMAGES.Heart />
              </View>
            </View>
          </View>
        </View>
        <View>
        </View>
        <View>
        </View>
      </ScrollView>
    </View>
  )
}

function setImageUrl(url: string) {
  throw new Error('Function not implemented.');
}
