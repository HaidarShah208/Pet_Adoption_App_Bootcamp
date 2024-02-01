import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../styles/Authentication/SignUp';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../Navigation/Navigator';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

interface SignupScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'signup'>;
}
export default function SignUp({navigation}: SignupScreenProps) {
  const [email, setEmail] = useState('');
  const [passowrd, setPassword] = useState('');
  const [username, setUserName] = useState('');

  // firebasAuth

  const handleSubmit = () => {
    console.log('submit');
    if (!email.trim() || !passowrd.trim()) {
      Toast.show({
        type: 'error',
        text1: 'enter email or passowrd',
      });
      console.log('enter email and password');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, passowrd)
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'accout created successfully',
        });
        console.log('User account created');
        setEmail('');
        setPassword('');
        setUserName('');
      })

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: 'error',
            text1: 'user already exist',
          });
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: 'error',
            text1: 'invalid email or password',
          });
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.mail}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={username => setUserName(username)}
      />
      <Text style={styles.mail}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <Text style={styles.mail}>Password</Text>
      <TextInput
        style={styles.input}
        value={passowrd}
        onChangeText={passowrd => setPassword(passowrd)}
      />
      <View style={styles.privacyText}>
        <Image  source={require('../../../assests/tick.png')} style={styles.imageContainer} />
        <Text style={styles.LinkContainer}>
          I agree to the<View >
            <Text style={styles.linkText}>Terms of service</Text>
          </View>
          and
          <View>
            <Text style={styles.linkText}>Privacy policy</Text>
          </View>
        </Text>
      </View>

      <TouchableOpacity
        style={{marginTop: 30, alignItems: 'center'}}
        onPress={() => {
          handleSubmit();
        }}>
        <Text style={styles.button}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('login');
        }}>
        <Text style={styles.navigate}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}
