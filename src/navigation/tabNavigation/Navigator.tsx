import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import   {
  RootDrawerParamsList,
} from '../drawerNavigation/DrawerNavigator';
import { BOTTOM_TAB_SCREENS_NAVIGATION } from '../../constants/navigationScreens/NavigationScreens';

export type RootTabParamsList = {
  home: undefined;
  search: undefined;
  favourite: undefined;
  user: undefined;
  details: undefined;
  drawar: undefined;
};

interface DonationScreenProps {
  navigation: DrawerNavigationProp<RootDrawerParamsList, 'tabNavigator'>;
}
const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: BOTTOM_TAB_SCREENS_NAVIGATION,
  tabBarHideOnKeyboard: true,
 
  tabBarStyle: {
    height: 70,
    paddingTop: 10,
    paddingBottom: 10,
  },
};
export default function TabNavigator({ navigation }: DonationScreenProps) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {BOTTOM_TAB_SCREENS_NAVIGATION.map(({ name, component, options }, index) => {
        return (
          <Tab.Screen
            key={index}
            name={name}
            component={component}
            options={{
              ...options,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}