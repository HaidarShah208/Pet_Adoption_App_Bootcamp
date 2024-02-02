import { View, Text } from 'react-native'
import React from 'react'
import { RootTabParamsList } from '../../../navigation/tabNavigation/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';

interface userScreenProps {
    navigation: StackNavigationProp<RootTabParamsList, 'user'>;
  }
export default function User({navigation}:userScreenProps) {
  return (
    <View>
      <Text>User</Text>
    </View>
  )
}