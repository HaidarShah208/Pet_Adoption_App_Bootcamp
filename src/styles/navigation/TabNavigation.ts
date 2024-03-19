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
  },

  tabIconContainer: {
    width: 68,
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
