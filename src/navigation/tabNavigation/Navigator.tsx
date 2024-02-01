import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../../screens/Authentication/signUp/SignUp';
import Login from '../../screens/Authentication/login/Login';
import ForgetPassword from '../../screens/Authentication/forgotPassword/ForgetPossword';
import Home from '../../screens/frontEnd/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../../screens/frontEnd/search/Search';
import Favourite from '../../screens/frontEnd/favourite/Favourite';


export type RootStackParamsList={
     search:undefined,
     favourite:undefined,
 
}

const Tab= createBottomTabNavigator<RootStackParamsList>();
export default function Navigator() {
  return (
    <NavigationContainer>
    <Tab.Navigator >
    <Tab.Screen  name='search' component={Search}/>
    <Tab.Screen  name='favourite' component={Favourite}/>

    </Tab.Navigator>
  </NavigationContainer>
  )
}