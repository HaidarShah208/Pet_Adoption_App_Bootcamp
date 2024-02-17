import {StyleSheet} from 'react-native';

export const tabBarIconStyles = {
  width: 24,
  height: 24,
};

export const navs = StyleSheet.create({
  navigation: {
    backgroundColor: 'white',
    height: 80,
    width: 'auto',
    // top: 0,
    bottom:0,
    position: 'relative',
  },

  tabIconContainer: {
    width: 68, // Set the default background width
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  tabIconFocused: {
    backgroundColor: 'black',
  },
  tabIconUnfocused: {
    backgroundColor: 'transparent',
  },
});
