import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/Authentication/SignUp/SignUp';
import Login from '../screens/Authentication/Login/Login';
import ForgetPassword from '../screens/Authentication/ForgotPassword/ForgetPossword';

export type RootStackParamsList={
    signup:undefined,
    login:undefined,
    forgot:undefined
}

const Stack = createStackNavigator<RootStackParamsList>();
export default function Navigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator >
<Stack.Screen options={{ headerShown: false }} name='login' component={Login}/>
<Stack.Screen options={{ headerShown: false }} name='signup' component={SignUp}/>
<Stack.Screen name='forgot' component={ForgetPassword}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}