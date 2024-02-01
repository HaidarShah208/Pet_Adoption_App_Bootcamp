import {StyleSheet} from 'react-native';

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
    marginTop: 100,
    fontWeight: 'bold',
  },
  mail: {
    fontSize: 21,
    
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
  button: {
    backgroundColor: 'black',
    color: 'white',
    width: 150,
    borderRadius: 30,
    lineHeight: 60,
    textAlign: 'center',
    
    height: 60,
    fontSize: 20,
  },navigate:{
    color:'black',
    textAlign:'center',
    paddingTop:20,
    fontSize:18,
    fontWeight:'bold'
  },
    linkText: {
      color: 'black',
      borderBottomColor:'black',
      borderBottomWidth:1,
      marginBottom:-5,
      marginHorizontal:6,
      lineHeight:21
    },
    privacyText: {
      flexDirection: 'row',  
      alignItems: 'center',  
      paddingTop:10,
      fontWeight:'bold',
      paddingLeft:5,
      color: 'black',
    },LinkContainer:{
      paddingLeft:12,
      color: 'black',
    },imageContainer:{
      marginBottom:5
    }


  
});
