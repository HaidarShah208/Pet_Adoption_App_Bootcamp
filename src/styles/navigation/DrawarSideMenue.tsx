import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts/AllFonts";

export const drawarSide=StyleSheet.create({
    img:{
        marginLeft:23,
        marginTop:30
    } , input: {
        marginTop: 40,
        width: 203,
        marginLeft: 22,
        height: 44,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#F2F3FA',
        position: 'absolute',
  
      },
      searchB: {
        position: 'relative',
        width: 70,
        height: 54,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        left: 190,
        top: 33,
      },Items:{
     color:'black',
     fontFamily:FONTS.SemiBold,
     fontSize:18,
        
      },Lgout:{
        marginBottom:20,
          fontSize:18,
          marginLeft:20,
          color:'red',
          fontFamily:FONTS.SemiBold,
        }
})