import ForgetPassword from '../../screens/forgotPassword/ForgetPossword';
import Login from '../../screens/login/Login';
import SignUp from '../../screens/signUp/SignUp';
import {
  AUTH_STACK_SCREEN,
  BOTTOM_TAB_SCREENS,
} from '../navigationScreenNames/NavigationScreenNames';
import { IMAGES } from '../assessts/AllAssets';
import Profile from '../../screens/profile/Profile';
import DrawerNavigator from '../../navigation/drawerNavigation/DrawerNavigator';
import DetailsNavigation, { DetailsNavigations } from '../../navigation/tabNavigation/DetailsNavigation';
import { View } from 'react-native';
import { navs } from '../../styles/navigation/TabNavigation';

export const AUTH_STACK_NAVIGATION_SCREEN = [
  {name: AUTH_STACK_SCREEN.SIGNUP, component: SignUp},
  {name: AUTH_STACK_SCREEN.LOGIN, component: Login},
  {name: AUTH_STACK_SCREEN.FORGOT_PASSWORD, component: ForgetPassword},
];

export const BOTTOM_TAB_SCREENS_NAVIGATION = [
  {
    name: BOTTOM_TAB_SCREENS.HOME,

    component: DrawerNavigator,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) =>
      <View
      style={[
        navs.tabIconContainer,
        focused ? navs.tabIconFocused : navs.tabIconUnfocused,
      ]}>
      {focused ? <IMAGES.focusHome /> : <IMAGES.homeBottom />}
    </View>
    },
  },
  {
    name: BOTTOM_TAB_SCREENS.SEARCH,
    component: DetailsNavigation,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) =>
      <View
      style={[
        navs.tabIconContainer,
        focused ? navs.tabIconFocused : navs.tabIconUnfocused,
      ]}>
      {focused ? <IMAGES.focusSearch /> : <IMAGES.searchBottom />}
    </View>
    },
  },
  {
    name: BOTTOM_TAB_SCREENS.FAVORITE,
    component: DetailsNavigations,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) =>
      <View
      style={[
        navs.tabIconContainer,
        focused ? navs.tabIconFocused : navs.tabIconUnfocused,
      ]}>
      {focused ? <IMAGES.focusHeart /> : <IMAGES.favouriteBottom/>}
    </View>
    },
  },
  {
    name: BOTTOM_TAB_SCREENS.PROFILE,
    component: Profile,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) =>
      <View
      style={[
        navs.tabIconContainer,
        focused ? navs.tabIconFocused : navs.tabIconUnfocused,
      ]}>
      {focused ? <IMAGES.focusProfile/> : <IMAGES.userBottom />}
    </View>
    },
  },
];
