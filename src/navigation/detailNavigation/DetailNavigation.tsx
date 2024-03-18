import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyDonation from '../../screens/myDonation/MyDonation';
import Details from '../../screens/details/Details';
import DonateScreen from '../../screens/donateScreen/DonateScreen';

export type RootStackParamsDetailsList = {
  mydonation: undefined;
  details: undefined;
  Add_Pet: undefined;
};
const Stack = createStackNavigator<RootStackParamsDetailsList>();

export default function DetailNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="mydonation"
        component={MyDonation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="details"
        component={Details}
      />
    </Stack.Navigator>
  );
}

export const AddPet = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Add_Pet"
        component={DonateScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="details"
        component={Details}
      />
    </Stack.Navigator>
  );
};
