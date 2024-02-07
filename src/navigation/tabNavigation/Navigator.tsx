import {View, Text,} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../../screens/frontEnd/search/Search';
import Favourite from '../../screens/frontEnd/favourite/Favourite';
import Home from '../../screens/frontEnd/home/Home';
import {IMAGES} from '../../constants/assessts/NavigationAssessts';
import User from '../../screens/frontEnd/user/User';
import { navs, tabBarIconStyles } from '../../styles/navigation/TabNavigation';
import { Svg } from 'react-native-svg';
import Details from '../../screens/frontEnd/details/Details';

export type RootTabParamsList = {
  search: undefined;
  favourite: undefined;
  home: undefined;
  user: undefined;
};
const Tab = createBottomTabNavigator<RootTabParamsList>();
export default function TabNavigator() {
  return (

<NavigationContainer >
      <Tab.Navigator 
        screenOptions={{tabBarShowLabel: false, headerShown: false,tabBarStyle:navs.navigation}}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={[navs.tabIconContainer, focused ? navs.tabIconFocused : navs.tabIconUnfocused]}>
                {focused ?<IMAGES.focusHome/>:<IMAGES.homeBottom/>}
            </View>
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={[navs.tabIconContainer, focused ? navs.tabIconFocused : navs.tabIconUnfocused]}>
              
               {focused ? <IMAGES.focusSearch/>:<IMAGES.searchBottom/>}
              
            </View>
            ),
          }}
        />
        <Tab.Screen
          name="favourite"
          component={Favourite}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={[navs.tabIconContainer, focused ? navs.tabIconFocused : navs.tabIconUnfocused]}>
              {focused ? <IMAGES.focusHeart/>:<IMAGES.favouriteBottom/>}
              
            </View>
            ),
          }}
        />
        <Tab.Screen
          name="user"
          component={Details}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={[navs.tabIconContainer, focused ? navs.tabIconFocused : navs.tabIconUnfocused]}>
               {focused ? <IMAGES.focusProfile/>:<IMAGES.userBottom/>}
            </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
 
  );
}
