import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/AllFonts';

export const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 25,
    color: 'black',
    fontFamily: 'Monsterrat',
  },
  heading: {
    color: 'black',
    fontSize: 40,
    marginTop: 108,
    fontFamily: FONTS.BOLD,
  },
  mail: {
    fontSize: 21,
    color: 'black',
    marginTop: 50,
    fontFamily: FONTS.SemiBold,
  },
  input: {
    height: 40,
    color: 'black',
    fontSize: 16,
    borderBottomWidth: 2,
    minWidth: 302,
    minHeight: 40,
    fontFamily: FONTS.SemiBold,
  },
  forgot: {
    color: 'black',
    marginLeft: 'auto',
    paddingRight: 8,
    marginTop: 20,
    fontFamily: FONTS.SemiBold,
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
  recovery: {
    color: 'black',
    paddingTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.8,
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
    paddingLeft: 5,
    paddingTop: 10,
    fontFamily: FONTS.SemiBold,
    color: 'black',
  },
  LinkContainer: {
    paddingLeft: 12,
    fontFamily: FONTS.SemiBold,
    color: 'black',
  },
  imageContainer: {
    marginBottom: 5,
  },
});
