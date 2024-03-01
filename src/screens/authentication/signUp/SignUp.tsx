import {View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../styles/authentication/SignUp';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../navigation/stackNavigation/Navigator';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {IMAGES} from '../../../constants/assessts/AllAssessts';
import Button from '../../../components/button/Button';
import {useAuthContext} from '../../../context/AuthContext';
import firestore from '@react-native-firebase/firestore';
import { UserData } from '../../../constants/allTypes/AllTypes';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/authSlice';

interface SignupScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'SIGNUP'>;
}

const initialState = {
  username: '',
  email: '',
  password: '',
};

export default function SignUp({navigation}: SignupScreenProps) {
  // const {dispatch} = useAuthContext();
  const dispatch=useDispatch()
  const [loading, setisloading] = useState(false);
  const [state, setState] = useState(initialState);

  const handleChange = (name: string, value: string): void => {
    setState(prev => ({...prev, [name]: value}));
  };

  // firebasAuth

  const handleRegister = () => {
    const {username, email, password} = state;
    if (!username.trim() || !email.trim() || !password.trim()) {
      return Toast.show({
        type: 'error',
        text1: 'Enter UserName or Email or Passowrd',
      });
    }
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (username.length < 3) {
      return Toast.show({
        type: 'error',
        text1: 'User name at least 3 characters',
      });
    }
    if (!email) {
      return Toast.show({
        type: 'error',
        text1: 'Email format is xyz@gmail.com',
      });
    }
    if (!validRegex.test(email)) {
      return Toast.show({
        type: 'error',
        text1: 'Email format is xyz@gmail.com',
      });
    }

    if (password.length < 6) {
      return Toast.show({
        type: 'error',
        text1: 'Password at least 6 characters required',
      });
    }
    let userData: UserData = {username, email, password};
    setisloading(true);
    createUser(userData);
    setState(initialState);
  };

  const createUser = (userData: UserData): void => {
    auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then(userCredential => {
        const user = userCredential.user;

        userData.uid = user.uid;
        userData.photoURL = user.photoURL;
        userData.creationTime = user.metadata.creationTime;
        userData.status = 'active';
        firestore()
          .collection('users')
          .doc(userData.uid)
          .set(userData)
          .then(() => {
            Toast.show({
              type: 'success',
              text1: 'Sign Up successfully',
            });
dispatch(login(userData))
            setisloading(false);
          })
          .catch((error: any) => {
            console.error('Error adding user data to Firestore: ', error);
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setisloading(false);
          return Toast.show({
            type: 'error',
            text1: 'User already in use',
          });
        }

        if (error.code === 'auth/invalid-email') {
          setisloading(false);
          return console.log('Email|Password Error', 'plz try again', 'error');
        }
        setisloading(false);
        return console.log('Email|Password Error', 'plz try again', 'error');
      });
  };
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.mail}>Username</Text>
      <TextInput
        style={styles.input}
        value={state.username}
        onChangeText={(value: string) => handleChange('username', value)}
      />
      <Text style={styles.mail}>Email</Text>
      <TextInput
        style={styles.input}
        value={state.email}
        onChangeText={(value: string) => handleChange('email', value)}
      />
      <Text style={styles.mail}>Password</Text>
      <TextInput
        style={styles.input}
        value={state.password}
        onChangeText={(value: string) => handleChange('password', value)}
      />
      {/* <Svg /> */}
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
      <View style={styles.buttonStyle}>
        <Button  title={loading ? <ActivityIndicator size="large" color="white" />: 'Sign Up'} onPress={handleRegister} />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('LOGIN');
        }}>
        <Text style={styles.navigate}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}
function createUser(userData: UserData) {
  throw new Error('Function not implemented.');
}
