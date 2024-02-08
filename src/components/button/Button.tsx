import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: object;  
  textStyle?: object; 
}

const Button: React.FC<ButtonProps> = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default Button;
