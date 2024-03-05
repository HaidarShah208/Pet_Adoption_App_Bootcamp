import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/AllFonts';

export const userStyle = StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginBottom: 20,
    alignItems: 'center',
    padding: 30,
  },
  main: {
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    color: 'black',
    paddingVertical: 20,
    fontSize: 24,
    fontFamily: FONTS.BOLD,
  },
  mail: {
    fontSize: 21,
    color: 'black',
    marginTop: 50,
    fontWeight: '600',
    alignSelf: 'flex-start',
    fontFamily: FONTS.SemiBold,
  },
  input: {
    height: 40,
    color: '#101C1D',
    fontSize: 16,
    borderBottomWidth: 2,
    minWidth: 302,
    minHeight: 40,
    fontFamily: FONTS.SemiBold,
  },
  btnsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.BOLD,
    width: 321,
    height: 74,
  },
  profile: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  profileEdit: {
    position: 'relative',
    left: 89,
    bottom: 22,
  },
});
