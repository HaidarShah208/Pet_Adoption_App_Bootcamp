import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IMAGES} from '../../constants/assessts/AllAssessts';
import {navs} from '../../styles/navigation/TabNavigation';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import DrawerNavigator, {
  RootDrawerParamsList,
} from '../drawerNavigation/DrawerNavigator';
import DetailsNavigation, {DetailsNavigations} from './DetailsNavigation';
import Profile from '../../screens/frontEnd/profile/Profile';

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
const Tab = createBottomTabNavigator<RootTabParamsList>();
export default function TabNavigator({navigation}: DonationScreenProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: navs.navigation,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="drawar"
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                navs.tabIconContainer,
                focused ? navs.tabIconFocused : navs.tabIconUnfocused,
              ]}>
              {focused ? <IMAGES.focusHome /> : <IMAGES.homeBottom />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={DetailsNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                navs.tabIconContainer,
                focused ? navs.tabIconFocused : navs.tabIconUnfocused,
              ]}>
              {focused ? <IMAGES.focusSearch /> : <IMAGES.searchBottom />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="favourite"
        component={DetailsNavigations}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                navs.tabIconContainer,
                focused ? navs.tabIconFocused : navs.tabIconUnfocused,
              ]}>
              {focused ? <IMAGES.focusHeart /> : <IMAGES.favouriteBottom />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                navs.tabIconContainer,
                focused ? navs.tabIconFocused : navs.tabIconUnfocused,
              ]}>
              {focused ? <IMAGES.focusProfile /> : <IMAGES.userBottom />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
