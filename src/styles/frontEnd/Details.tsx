import { StyleSheet } from "react-native";

export const DetialsStyle=StyleSheet.create({
    MainConaier:{
display:'flex',
alignItems:'center',
justifyContent: 'center',
    },ImgView:{
        alignSelf: 'stretch',
    },
    bgIMG:{
        height:410
    },InfoContainer:{
        width:375,
        height:392,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        zIndex:1,
    },InfoHeading:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
    },InfoText:{
        color:'black',
        fontSize:24,
        fontWeight:'bold'
    },InfoSub:{
        color:'black',
    },Price:{
        fontSize:24,
        color:'#F6A530',
        fontFamily:'Monster',
        fontWeight:'bold'
    }
})