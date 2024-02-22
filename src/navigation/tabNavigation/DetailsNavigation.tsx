import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../../screens/frontEnd/search/Search';
import Details from '../../screens/frontEnd/details/Details';
import Favourite from '../../screens/frontEnd/favourite/Favourite';

export type RootStackParamsDetailsList={
    search:undefined,
    details:undefined,
    favourite:undefined
  
}

const Stack = createStackNavigator<RootStackParamsDetailsList>();
export default function DetailsNavigation() {
  return (
    <Stack.Navigator >
    <Stack.Screen options={{ headerShown: false }} name='search' component={Search}/>
    <Stack.Screen options={{ headerShown: false }} name='details' component={Details}/>
    </Stack.Navigator>
  )
}


export const DetailsNavigations=()=> {
  return (
    <Stack.Navigator >
    <Stack.Screen options={{ headerShown: false }} name='favourite' component={Favourite}/>
    <Stack.Screen options={{ headerShown: false }} name='details' component={Details}/>
    </Stack.Navigator>
  )
} 