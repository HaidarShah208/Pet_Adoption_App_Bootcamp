import {View, Text, TextInput} from 'react-native';
import React, { useState } from 'react';
import {styles} from '../../../styles/authentication/Login';
import {RootStackParamsList} from '../../../navigation/stackNavigation/Navigator';
import {StackNavigationProp} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import Button from '../../../components/button/Button';

interface ForgotScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'forgot'>;
}
export default function ForgetPassword({navigation}: ForgotScreenProps) {
  const [email, setEmail] = useState('');


    // firebasAuth
    const handleSubmit = () => {
      console.log('submit');
      if(!email.trim()){
        Toast.show({
          type:'error',
          text1:'enter your email'
        })
        console.log('enter email')
        return;
      }
      auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Toast.show({
          type:'success',
          text1:'link sent successfully'
        })
        console.log('link sent successfully')
      setEmail('')
      })
      .catch(error => {
        Toast.show({
          type:'error',
          text1:'server error'
        })
        console.log('server error')
        console.error(error);
      });
    };
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.heading}>Recover {'\n'}Password</Text>
      <Text style={styles.mail}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={email => setEmail(email)} />  
      <Text style={styles.recovery}>Put your email above to get recovery URL</Text>
      <Button title={'Log in'} onPress={handleSubmit}/>
    </View>
  );
}
