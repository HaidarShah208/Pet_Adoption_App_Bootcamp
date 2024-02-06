import { StyleSheet } from "react-native";

export const searchSt=StyleSheet.create({
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
      },  tabIconContainer: {
        
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        display:'flex',
        flexDirection:'row'
      },
      tabIconFocused: {
        backgroundColor: 'black',
      },
      tabIconUnfocused: {
        backgroundColor: 'transparent',
      },          scrollImage: {
        marginTop: 9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        overflow: 'scroll',
        paddingLeft:22,
        height:190
        
      },mar:{
        marginHorizontal:7
      },co:{
        color:'black'
      },  focusSlider: {
        width: 63,
        height: 31,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#F6A530',
        color: 'black',
        borderRadius:13
      },
      unFocus: {
        backgroundColor: 'transparent',
      },
      focusText: {
        color: 'white',
      },
      unFocusText: {
        color: 'black',
      },
      
})