import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../login/LoginStyle';
import {RootStackParamsList} from '../../navigation/stackNavigation/StackNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '../../components/button/Button';
import {IMAGES} from '../../constants/assets/images';
import useForgotPassword from './useForgotPassword';

interface ForgotScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'FORGOT_PASSWORD'>;
}
export default function ForgetPassword({navigation}: ForgotScreenProps) {
  const {handleSubmit, email, setEmail} = useForgotPassword();

  return (
    <View style={styles.flexContainer}>
      <IMAGES.RecoverBack style={{marginTop: 30}} onPress={()=>navigation.goBack()} />
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
