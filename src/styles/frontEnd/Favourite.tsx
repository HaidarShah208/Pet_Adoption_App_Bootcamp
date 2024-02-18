import {StyleSheet} from 'react-native';
import { FONTS } from '../../constants/fonts/AllFonts';
import { COLOR } from '../../constants/Colors/Colors';

export const searchSt = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 40,
    flexDirection: 'row',
  },
  heading: {
    fontSize: 24,
    fontFamily:FONTS.BOLD,
    color: 'black',
    // fontWeight: 'bold',
  },
  MainContainer: {
    marginTop: 30,
    marginRight: 80,
    display: 'flex',
    flexDirection: 'row',
  },
  mainImg: {
    position: 'relative',
    left: 20,
    zIndex: 1,
    width:194,
    height:141,
    borderRadius:25
  },

  data: {
    position: 'absolute',
    left: 160,
    top: 8,
    paddingLeft: 60,
    width: 206,
    height: 126,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  heding: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 5,
    color:'black'
  },

  locator: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  locatorImg: {
    paddingLeft: 40,
  },
  heartSty: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 22,
  },Color:{
    color: 'black',

  }
});
