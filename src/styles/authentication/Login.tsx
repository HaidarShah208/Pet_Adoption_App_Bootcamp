import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts/AllFonts";
 


export const styles = StyleSheet.create({
    flexContainer: {
      backgroundColor:'white',
      height: '100%',
         paddingHorizontal: 25,
      color:'black',
      fontFamily:'Monsterrat'
    },
    heading: {
      color:'black',
      fontSize: 40,
      marginTop:108,
   fontWeight:'bold',
   fontFamily:FONTS.BOLD

    },
    mail:{
      fontSize:21,
      color:'black',
      marginTop:50,    
   fontFamily:FONTS.BOLD

      
    }, input: {
      height: 40,
      color:'black',
      fontSize: 16,
      borderBottomWidth:2,
      minWidth:302,
      minHeight:40
    },forgot:{
      color:'black',
      marginLeft:'auto',
      paddingRight:8,
      marginTop:20
    },button:{
      backgroundColor:'black',
      color:'white',
      width:150,
    borderRadius:30,
  lineHeight:70,
   alignItems:'center',
   textAlign:'center',
      height:70,
      fontSize:20
    },navigate:{
      color:'black',
      textAlign:'center',
      paddingTop:20,
      fontSize:18,
      fontWeight:'bold'
    },
    recovery:{
      color:'black',
      paddingTop:5,
      fontWeight:'bold',
      textAlign:'center',
      letterSpacing:0.8,
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
      paddingLeft:5,
      paddingTop:10,
      fontWeight:'bold',
      color: 'black',
    },LinkContainer:{
      paddingLeft:12,
      color: 'black',
    },imageContainer:{
      marginBottom:5
    }
  })