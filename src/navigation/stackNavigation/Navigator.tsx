import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/frontEnd/home/Home';
import SignUp from '../../screens/authentication/signUp/SignUp';
import Login from '../../screens/authentication/login/Login';
import ForgetPassword from '../../screens/authentication/forgotPassword/ForgetPossword';
import Details from '../../screens/frontEnd/details/Details';

export type RootStackParamsList={
    signup:undefined,
    login:undefined,
    forgot:undefined
    details: { item: any };
}

const Stack = createStackNavigator<RootStackParamsList>();
export default function Navigator() {
  return (
    // <NavigationContainer>
    <Stack.Navigator >
<Stack.Screen options={{ headerShown: false }} name='signup' component={SignUp}/>
<Stack.Screen options={{ headerShown: false }} name='login' component={Login}/>
<Stack.Screen name='details' component={Details}/>
<Stack.Screen name='forgot' component={ForgetPassword} options={{ headerTitle: '' }} />
    </Stack.Navigator>
  // </NavigationContainer>
  )
}