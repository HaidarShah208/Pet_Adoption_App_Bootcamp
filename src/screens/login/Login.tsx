import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {styles} from './LoginStyle';
import {RootStackParamsList} from '../../navigation/stackNavigation/StackNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {IMAGES} from '../../constants/assets/images';
import Button from '../../components/button/Button';
import useSignIn from './useLogin';

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'LOGIN'>;
}
export default function Login({navigation}: LoginScreenProps) {
  const {handleSubmit, loading, setEmail, setPassword, email, passowrd} =
    useSignIn();

  return (
    <View style={styles.flexContainer}>
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.mail}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <Text style={styles.mail}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={passowrd}
        onChangeText={passowrd => setPassword(passowrd)}
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('FORGOT_PASSWORD');
        }}>
        <Text style={styles.forgot}>Forgot Passowrd ?</Text>

        <View style={styles.privacyText}>
          <IMAGES.Tick />
          <Text style={styles.LinkContainer}>
            I agree to the
            <View>
              <Text style={styles.linkText}>Terms of service</Text>
            </View>
            and
            <View>
              <Text style={styles.linkText}>Privacy policy</Text>
            </View>
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonStyle}>
        <Button
          title={
            loading ? <ActivityIndicator size="large" color="white" /> : 'Login'
          }
          onPress={handleSubmit}
        />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('SIGNUP');
        }}>
        <Text style={styles.navigate}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

function setisloading(arg0: boolean) {
  throw new Error('Function not implemented.');
}
