import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../login/Login';
import {RootStackParamsList} from '../../navigation/stackNavigation/Navigator';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '../../components/button/Button';
import {IMAGES} from '../../constants/assessts/AllAssets';
import useForgotPassword from './useForgotPassword';

interface ForgotScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'FORGOT_PASSWORD'>;
}
export default function ForgetPassword({navigation}: ForgotScreenProps) {
  const {handleSubmit, email, setEmail} = useForgotPassword();

  const backMove = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.flexContainer}>
      <IMAGES.RecoverBack style={{marginTop: 30}} onPress={backMove} />
      <Text style={styles.heading}>Recover {'\n'}Password</Text>
      <Text style={styles.mail}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <Text style={styles.recovery}>
        Put your email above to get recovery URL
      </Text>
      <Button title={'Recover'} onPress={handleSubmit} />
    </View>
  );
}
