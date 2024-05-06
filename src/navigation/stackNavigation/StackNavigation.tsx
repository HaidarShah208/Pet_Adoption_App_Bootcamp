import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AUTH_STACK_NAVIGATION_SCREEN} from '../../constants/navigationScreens/NavigationScreens';

export type RootStackParamsList = {
  SIGNUP: undefined;
  LOGIN: undefined;
  FORGOT_PASSWORD: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();
export default function StackNavigation() {
  return (
    <Stack.Navigator>
      {AUTH_STACK_NAVIGATION_SCREEN.map((item, index) => {
        const navigationOptions = {
          title: '',
          headerShown: false,
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
