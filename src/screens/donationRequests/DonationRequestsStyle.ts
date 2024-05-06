import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/fonts';

export const requesStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    justifyContent: 'center',
    marginBottom: 10,
    width: 330,
    height: 194,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    elevation: 2,
  },
  heading: {
    marginTop: 35,
    paddingStart: 35,
    color: '#101C1D',
    fontFamily: FONTS.SemiBold,
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  img: {
    marginStart: 20,
    marginRight: 15,
    marginTop: 15,
    width: 72,
    height: 72,
    borderRadius: 50,
    overflow:'hidden'
  },
  InfoContiaenr: {
    marginTop: 10,
  },
  furthurInfo: {
    fontFamily: FONTS.SemiBold,
    fontSize: 18,
    color: '#101C1D',
  },
  smallText: {
    paddingTop: 5,
    fontFamily: FONTS.REGULER,
    fontSize: 14,
    color: '#101C1D',
  },
  small: {
    fontFamily: FONTS.REGULER,
    fontSize: 14,
    color: '#101C1D',
  },
  button: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#101C1D',
    textAlign: 'center',
    color: 'white',
    fontFamily: FONTS.SemiBold,
    height: 36,
    borderRadius: 20,
    width: 225,
    paddingTop: 5,
  },
  loader:{
    flex:1,justifyContent:'center',alignItems:'center'
  },
  flex:{
    display:'flex',
    flexDirection:'row'
  },
  dash:{
    marginHorizontal:5,fontWeight:'900',
    paddingTop:5
  },


});
