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
  },imageSize:{
width:72,
height:72,
borderRadius:50
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
    alignSelf: 'center',
     marginTop:20,
     width:321,
     height:161,
     borderRadius: 20 , overflow: 'hidden',
  },Imagetext:{
    fontSize:25,
color:'#FFFFFF',
paddingBottom:1,
fontFamily:FONTS.BOLD,
  },imageAmount:{
    fontSize:25,
 color:'#101C1D',
fontFamily:FONTS.BOLD,
  },userImage:{
 width:46,
 height:46,
    borderRadius:23
  }
});
