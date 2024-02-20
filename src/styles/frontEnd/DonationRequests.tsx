import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts/AllFonts";

export const requesStyles=StyleSheet.create({
    container:{
    
        justifyContent:'center',
        alignItems:'center'
    },card:{
        display:'flex',
        flexDirection:'row',
width:330,
height:184,
backgroundColor:'#FFFFFF',
        shadowColor:'#101C1D',
        borderRadius:20,
        shadowOpacity:2,
    },
    heading:{
        color:'#101C1D',
        fontFamily:FONTS.SemiBold,
        fontSize:24,
        marginBottom:20,
        alignSelf:'flex-start'
    },img:{
marginStart:20,
marginRight:15,
marginTop:30,
    },InfoContiaenr:{
marginTop:20
    },
    furthurInfo:{
        fontFamily:FONTS.SemiBold,
        fontSize:18,
        color:'#101C1D',   
    },smallText:{
        paddingTop:5,
        fontFamily:FONTS.REGULER,
        fontSize:14,
        color:'#101C1D',
    },small:{
        fontFamily:FONTS.REGULER,
        fontSize:14,
        color:'#101C1D',
    },button:{
        marginTop:0,
        height:36,
        width:225,
        padding:0,
        justifyContent:'center',
        alignItems:'center'
    }
})