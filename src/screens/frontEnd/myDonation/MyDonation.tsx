import { View, Text } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootDrawerParamsList } from '../../../navigation/drawerNavigation/DrawerNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';



interface  DonationScreenProps {
    navigation:  DrawerNavigationProp<RootDrawerParamsList, 'mydonation'>;
  }
export default function MyDonation({navigation}:DonationScreenProps) {
  return (
    <View>
      <Text>MyDonation</Text>
    </View>
  )
}