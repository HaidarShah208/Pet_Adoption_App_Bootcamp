import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/frontEnd/home/Home';
import SignUp from '../../screens/authentication/signUp/SignUp';
import Login from '../../screens/authentication/login/Login';
import ForgetPassword from '../../screens/authentication/forgotPassword/ForgetPossword';
import Details from '../../screens/frontEnd/details/Details';
import {AUTH_STACK_NAVIGATION_SCREEN} from '../../constants/navigationScreens/NavigationScreens';

export type RootStackParamsList = {
  SIGNUP: undefined;
  LOGIN: undefined;
  FORGOT_PASSWORD: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();
export default function Navigator() {
  return (
    <Stack.Navigator>
      {AUTH_STACK_NAVIGATION_SCREEN.map((item, index) => {
        const navigationOptions = {
          title: '',
          headerShown: false
        };
        return (
          <Stack.Screen
            key={index}
            name={item.name as keyof RootStackParamsList}
            component={item.component}
            options={navigationOptions}
          />
        );
      })}
    </Stack.Navigator>
  );
}
