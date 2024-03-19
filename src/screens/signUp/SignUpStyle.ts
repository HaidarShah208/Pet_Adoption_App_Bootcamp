import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/AllFonts';

export const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 25,
    color: 'black',
  },
  heading: {
    color: 'black',
    fontSize: 40,
    marginTop: 100,
    fontFamily: FONTS.BOLD,
  },
  mail: {
    fontSize: 21,
    fontFamily: FONTS.SemiBold,
    color: 'black',
    marginTop: 40,
  },
  input: {
    height: 40,
    color: 'black',
    fontSize: 16,
    borderBottomWidth: 2,
    minWidth: 302,
    minHeight: 40,
  },
  forgot: {
    color: 'black',
    marginLeft: 'auto',
    paddingRight: 32,
    marginTop: 20,
  },
  buttonStyle: {
    alignItems: 'center',
  },
  navigate: {
    color: 'black',
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 18,
    fontFamily: FONTS.SemiBold,
  },
  linkText: {
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: -5,
    marginHorizontal: 6,
    lineHeight: 21,
    fontFamily: FONTS.SemiBold,
  },
  privacyText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  LinkContainer: {
    paddingLeft: 12,
    color: 'black',
    fontFamily: FONTS.SemiBold,
  },
  imageContainer: {
    marginBottom: 5,
  },
});
