import { View, Text } from 'react-native'
import React from 'react'
import { RootTabParamsList } from '../../../navigation/tabNavigation/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';


interface favrouriteScreenProps {
  navigation: StackNavigationProp<RootTabParamsList, 'favourite'>;
}
 
 
export default function Favourite({navigation}:favrouriteScreenProps) {
  return (
    <View>
      <Text>Favourite</Text>
    </View>
  )
}