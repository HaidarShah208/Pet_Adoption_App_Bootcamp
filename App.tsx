import React, { useEffect } from 'react'
import Navigator from './src/Navigation/Navigator'
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';


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
    <>
  <Navigator/>
  <Toast />
    </>
  )
}