import { View, Text } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamsList } from '../../../navigation/tabNavigation/Navigator';

interface searchScreenProps {
  navigation: StackNavigationProp<RootTabParamsList, 'search'>;
}
export default function Search({navigation}: searchScreenProps) {
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}