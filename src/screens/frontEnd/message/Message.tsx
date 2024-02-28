import { View, Text } from 'react-native'
import React from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamsList } from '../../../navigation/drawerNavigation/DrawerNavigator';


interface  DonationScreenProps {
    navigation: DrawerNavigationProp<RootDrawerParamsList, 'messsage'>;
  }
export default function Message({navigation}:DonationScreenProps) {
  return (
    <View>
      <Text>Message</Text>
    </View>
  )
}