import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
  iMg: {
    paddingHorizontal: 50,
    marginTop: 30,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 18,
    fontFamily: FONTS.SemiBold,
    color: '#101C1D',
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  dorpdown: {
    fontFamily: FONTS.SemiBold,
    color: 'black',
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderBottomWidth: 2,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  Icon: {
    width: 12,
    height: 12,
  },
  dropdownArea: {
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    alignSelf: 'center',
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    alignSelf: 'center',
    color: '#101C1D',
  },
  Item: {
    width: '85%',
    height: 30,
    marginVertical: 10,
    marginTop: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ItemText: {
    fontFamily: FONTS.SemiBold,
    color: '#101C1D',
  },
  mail: {
    fontSize: 21,
    fontFamily: FONTS.SemiBold,
    color: '#101C1D',
    marginTop: 20,
    alignSelf: 'flex-start',
    marginStart: 0,
  },
  input: {
    height: 40,
    color: 'black',
    fontSize: 16,
    borderBottomWidth: 2,
    width: '100%',
    minHeight: 40,
  },
  img: {
    marginTop: 20,
    marginBottom: 20,
  },
  btns: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    fontFamily: FONTS.BOLD,
    marginTop:15,
    width: 321,
    height: 74,
  },textArea:{
    textAlignVertical: 'top',
    height: 154,
  }
});
