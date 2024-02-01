import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../../screens/Authentication/signUp/SignUp';
import Login from '../../screens/Authentication/login/Login';
import ForgetPassword from '../../screens/Authentication/forgotPassword/ForgetPossword';
import Home from '../../screens/frontEnd/home/Home';

export type RootStackParamsList={
    signup:undefined,
    login:undefined,
    forgot:undefined
    home:undefined
}

const Stack = createStackNavigator<RootStackParamsList>();
export default function Navigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator >

<Stack.Screen options={{ headerShown: false }} name='signup' component={SignUp}/>
<Stack.Screen options={{ headerShown: false }} name='login' component={Login}/>
<Stack.Screen name='home' component={Home}/>
<Stack.Screen name='forgot' component={ForgetPassword}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}