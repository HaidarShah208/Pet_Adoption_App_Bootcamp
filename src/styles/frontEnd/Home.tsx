import {StyleSheet} from 'react-native';
import { FONTS } from '../../constants/fonts/AllFonts';

export const styleHome = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    marginTop: 10,
    
  },
  tesxt: {
    color: '#101C1D',
    fontWeight: '800',
    fontSize: 36,
    paddingHorizontal: 22,
    lineHeight: 40,
    top: 30,
    fontFamily:FONTS.SemiBold
  },
  scrollImage: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'scroll',
    paddingLeft:22,
    height:190
    
  },
  tsxt: {
    color: '#101C1D',
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 14,
    fontFamily:FONTS.SemiBold
  },
  ImageText: {
    display: 'flex',
    flexDirection: 'column',
  },
  homeHeading:{
    paddingLeft:22,
    fontSize:18,
    color:'black',
    fontFamily:FONTS.SemiBold

  },
  largeImages:{
    // marginHorizontal:22,
    alignItems:'center',
    justifyContent:'center',
     marginTop:20,
  }
});
