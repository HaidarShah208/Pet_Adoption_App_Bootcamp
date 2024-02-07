import React, {useContext, useEffect} from 'react';
import Navigator from './src/navigation/stackNavigation/Navigator';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from './src/navigation/tabNavigation/Navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/drawerNavigation/DrawerNavigator';
import AuthContextProvider, { useAuthContext } from './src/context/AuthContext';
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
    <AuthContextProvider>

      <GestureHandlerRootView style={{flex: 1}}>
        {/* {user ? <TabNavigator /> : <Navigator />} */}
        <TabNavigator/>
        {/* <DrawerNavigator/> */}
        {/* <Navigator/> */}
        <Toast />
      </GestureHandlerRootView>
    </AuthContextProvider>
  );
}
