import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RootTabParamsList } from '../../../navigation/tabNavigation/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { searchSt } from '../../../styles/frontEnd/Favourite';
import { ScrollView } from 'react-native-gesture-handler';
import { FAVOURITE, IMAGES, SrchIMAGES } from '../../../constants/assessts/AllAssessts';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import storage from '@react-native-firebase/storage';


interface favrouriteScreenProps {
  navigation:  BottomTabNavigationProp<RootTabParamsList, 'favourite'>;
}

export default function Favourite({navigation}:favrouriteScreenProps) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImageURLs = async () => {
      let imageType= __filename.split("/").pop();
      console.log(imageType)
  let id = Math.random().toString(36).slice(2);
      const imagePaths = [`images/${id}"."${imageType}`];
      const imageURLs = await Promise.all(
        imagePaths.map(path => storage().ref(path).getDownloadURL())
      );
      setImageUrls(imageURLs);
    };
    fetchImageURLs();
  }, []);

  return (
    <View>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>Favourite</Text>
        <FAVOURITE.ADD/>
      </View>
         <ScrollView>
        <View>
          <View style={searchSt.MainContainer}>
            <Image source={{uri:imageUrls[0]}} style={searchSt.mainImg} />
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
        <View>
        </View>
      </ScrollView>
    </View>
  )
}

function setImageUrl(url: string) {
  throw new Error('Function not implemented.');
}
