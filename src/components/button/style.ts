import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts/fonts";

export const styles = StyleSheet.create({
    button: {
      backgroundColor: 'black',
      borderRadius: 30,
      alignItems: 'center',
      height: 79,
      width: 185,
      marginTop: 30,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      lineHeight: 70,
      textAlign: 'center',
      fontFamily: FONTS.SemiBold,
    },
  });