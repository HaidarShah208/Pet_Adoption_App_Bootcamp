import {View, Text, TextInput, TouchableOpacity, Button, Image} from 'react-native';
import React, { useState } from 'react';
import {styles} from '../../../styles/authentication/Login';
import {RootStackParamsList} from '../../../navigation/stackNavigation/Navigator';
import {StackNavigationProp} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import { FirebaseUser, UserProfileData } from '../../../constants/allTypes/AllTypes';
import { useAuthContext } from '../../../context/AuthContext';
import ss from '../../../assests/sws.svg'

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'login'>;
}
export default function Login({navigation}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [passowrd, setPassword] = useState('');
  const {dispatch}=useAuthContext()

    // firebasAuth
    const handleSubmit = () => {
      console.log('submit');
      if(!email.trim() || !passowrd.trim()){
        Toast.show({
          type:'error',
          text1:'enter email or passowrd'
        })
        console.log('enter email and password')
        return;
      }
      auth()
      .signInWithEmailAndPassword(email, passowrd)
      .then((userCredential) => {
        const user:FirebaseUser | null =userCredential.user
        console.log('user',user)
        if(user){
          const userEmail:string | undefined=user.email ||undefined
          const userData:UserProfileData={
            email:userEmail
          }
          dispatch({type:'Login',payload:{userData}})
          // navigation.navigate('home')
        }
        Toast.show({
          type:'success',
          text1:'signed In successfully'
        })
      setEmail('')
      setPassword('')
      // navigation.navigate('home')
      })
      .catch(error => {
        Toast.show({
          type:'error',
          text1:'user is not existl'
        })
        console.log('user is not exist')
        console.error(error);
      });
    };
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.mail}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={email => setEmail(email)} />
      <Text style={styles.mail}>Password</Text>
      <TextInput style={styles.input} value={passowrd}
        onChangeText={passowrd => setPassword(passowrd)} />
          <TouchableOpacity activeOpacity={1}
        onPress={() => {
          navigation.navigate('forgot');
        }}>
        <Text style={styles.forgot}>Forgot Passowrd ?</Text>

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

      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: 30, alignItems: 'center'}}  onPress={() => {handleSubmit()}}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1}
        onPress={() => {
          navigation.navigate('signup');
        }}>
        <Text style={styles.navigate}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
