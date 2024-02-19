import React, {useContext, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthContextProvider from './src/context/AuthContext';
import Details from './src/screens/frontEnd/details/Details';
import UpdatePassword from './src/screens/frontEnd/updatePassword/UpdatePassword';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/navigation/AuthNavigation';
import MyDonation from './src/screens/frontEnd/myDonation/MyDonation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
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
    <Provider store={store}>

    <AuthContextProvider>
      <GestureHandlerRootView style={{flex: 1}}>
           <NavigationContainer> 
        <AuthNavigation/>
        {/* <Details/> */}
        {/* <UpdatePassword/> */}
        {/* <MyDonation/> */}
        <Toast />
           </NavigationContainer> 
   </GestureHandlerRootView>
    </AuthContextProvider>
    </Provider>
 
  );
}

        