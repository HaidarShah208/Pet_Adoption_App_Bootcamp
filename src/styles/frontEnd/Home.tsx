import {StyleSheet} from 'react-native';

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
    color: 'black',
    fontWeight: '800',
    fontSize: 36,
    paddingHorizontal: 22,
    lineHeight: 40,
    top: 30,
  },
  input: {
    marginTop: 60,
    width: 270,
    marginLeft: 22,
    height: 48,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    position: 'absolute',
  },
  searchB: {
    position: 'relative',
    width: 80,
    height: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    left: 260,
    top: 52,
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
    color: 'black',
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 14,
  },
  ImageText: {
    display: 'flex',
    flexDirection: 'column',
  },
  homeHeading:{
    paddingLeft:22,
    fontSize:18,
    color:'black',
    fontWeight:'bold'
  },
  largeImages:{
    // marginHorizontal:22,
    alignItems:'center',
    justifyContent:'center',
     marginTop:20,
    //  paddingBottom:90
    //  height:'auto',
    // overflow: 'scroll',
    // display:'flex',
    // flexDirection:'column'

   
  }
});
