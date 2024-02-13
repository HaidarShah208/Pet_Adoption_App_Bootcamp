import React, {useContext, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthContextProvider, { useAuthContext } from './src/context/AuthContext';
import Details from './src/screens/frontEnd/details/Details';
import UpdateProfile from './src/screens/frontEnd/updatePassword/UpdatePassword';
import UpdatePassword from './src/screens/frontEnd/updatePassword/UpdatePassword';
import { NavigationContainer } from '@react-navigation/native';
import DonateScreen from './src/screens/frontEnd/donate/DonateScreen';
import AuthNavigation from './src/navigation/AuthNavigation';
import Navigator from './src/navigation/stackNavigation/Navigator';
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

  return (
    <AuthContextProvider>
      <GestureHandlerRootView style={{flex: 1}}>
           <NavigationContainer> 
        {/* <DonateScreen/> */}
        <AuthNavigation/>
        {/* <Details/> */}
        {/* <Navigator/> */}
        {/* <DonateScreen/> */}
        {/* <UpdatePassword/> */}
        <Toast />
           </NavigationContainer> 
   </GestureHandlerRootView>
    </AuthContextProvider>
     
 
  );
}

        