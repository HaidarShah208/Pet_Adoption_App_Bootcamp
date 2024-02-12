import React, {useContext, useEffect} from 'react';
import Navigator from './src/navigation/stackNavigation/Navigator';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from './src/navigation/tabNavigation/Navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DrawerNavigator, { RootDrawerParamsList } from './src/navigation/drawerNavigation/DrawerNavigator';
import AuthContextProvider, { useAuthContext } from './src/context/AuthContext';
import Details from './src/screens/frontEnd/details/Details';
import UpdateProfile from './src/screens/frontEnd/updatePassword/UpdatePassword';
import UpdatePassword from './src/screens/frontEnd/updatePassword/UpdatePassword';
import Parent from './src/navigation/parentNavigator/Parent';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Screen } from 'react-native-screens';
import DonateScreen from './src/screens/frontEnd/donate/DonateScreen';
export default function App() {
  useEffect(() => {
    const hideSplashScreen = () => {
      if (SplashScreen) {
        SplashScreen.hide();
      }
    };
    const timeoutId = setTimeout(hideSplashScreen, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const {isAuth}=useAuthContext()
  return (
    
      <GestureHandlerRootView style={{flex: 1}}>
           <NavigationContainer> 
        {/* {user ? <TabNavigator /> : <Navigator />} */}
        <TabNavigator  navigation={undefined as unknown as DrawerNavigationProp<RootDrawerParamsList, "tabNavigator">}/>
        {/* <Parent/> */}
        {/* <DonateScreen/> */}
        {/* <Navigator/> */}
        {/* <Details/> */}
        {/* <DonateScreen/> */}
        {/* <UpdatePassword/> */}
    {/* <DrawerNavigator /> */}
        <Toast />
           </NavigationContainer> 
   </GestureHandlerRootView>
     
 
  );
}

        