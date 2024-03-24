import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../../screens/search/Search';
import Details from '../../screens/details/Details';
import Favourite from '../../screens/favourite/Favourite';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';

export type RootStackParamsDetailsList = {
  search: undefined;
  details: undefined;
  favourite: undefined;
  home: undefined;
  user:undefined
};

const Stack = createStackNavigator<RootStackParamsDetailsList>();
export default function DetailsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="search"
        component={Search}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="details"
        component={Details}
      />
    </Stack.Navigator>
  );
}

export const DetailsNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="favourite"
        component={Favourite}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="details"
        component={Details}
      />
    </Stack.Navigator>
  );
};
export const HomeDetailsNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="details"
        component={Details}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="user"
        component={Profile}
      />
    </Stack.Navigator>
  );
};
