import { Text,  TouchableOpacity} from 'react-native';
import React from 'react';
import { ButtonProps } from '../../constants/allTypes/allTypes';
import { styles } from './style';



const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};



export default Button;
