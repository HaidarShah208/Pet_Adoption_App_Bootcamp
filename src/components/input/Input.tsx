import {View,  TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {HOME} from '../../constants/assets/images';
import { styleInput } from './style';

interface InputProps {
  onInputChange?: (text: any) => void;
}
const Input: React.FC<InputProps> = ({onInputChange}) => {
  const [inputText, setInputText] = useState('');

  const handleChangeText = (text: React.SetStateAction<string>) => {
    setInputText(text);
    if (onInputChange) {
      onInputChange(text);
    }
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        placeholder="pet search"
        style={styleInput.input}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity>
        <View style={styleInput.searchB}>
          <HOME.FocusImg />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Input;

