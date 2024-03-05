import ForgetPassword from '../../screens/authentication/forgotPassword/ForgetPossword';
import Login from '../../screens/authentication/login/Login';
import SignUp from '../../screens/authentication/signUp/SignUp';
import Favourite from '../../screens/frontEnd/favourite/Favourite';
import Home from '../../screens/frontEnd/home/Home';
import Search from '../../screens/frontEnd/search/Search';
import User from '../../screens/frontEnd/profile/Profile';
import {
  AUTH_STACK_SCREEN,
  BOTTOM_TAB_SCREENS,
} from '../navigationScreenNames/NavigationScreenNames';

export const AUTH_STACK_NAVIGATION_SCREEN = [
  {name: AUTH_STACK_SCREEN.SIGNUP, component: SignUp},
  {name: AUTH_STACK_SCREEN.LOGIN, component: Login},
  {name: AUTH_STACK_SCREEN.FORGOT_PASSWORD, component: ForgetPassword},
];

export const BOTTOM_TAB_SCREENS_NAVIGATION = [
  {name: BOTTOM_TAB_SCREENS.HOME, component: Home},
  {name: BOTTOM_TAB_SCREENS.SEARCH, component: Search},
  {name: BOTTOM_TAB_SCREENS.FAVORITE, component: Favourite},
  {name: BOTTOM_TAB_SCREENS.PROFILE, component: User},
];
