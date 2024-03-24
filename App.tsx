import React, {useContext, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/navigation/AuthNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import { StatusBar } from 'react-native';
export default function App() {
  useEffect(() => {
    const hideSplashScreen = () => {
      if (SplashScreen) {
        SplashScreen.hide();
      }
    };
    const timeoutId = setTimeout(hideSplashScreen, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <AuthNavigation />
            <StatusBar backgroundColor={'#eaeaea'} barStyle={'dark-content'} />
            <Toast />
          </NavigationContainer>
        </GestureHandlerRootView>
    </Provider>
  );
}
