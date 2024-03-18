import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import {login} from '../../store/slice/authSlice';
import {FirebaseUser, UserProfileData} from '../../constants/allTypes/AllTypes';
import auth from '@react-native-firebase/auth';

export default function useLogIn() {
  const [email, setEmail] = useState('');
  const [passowrd, setPassword] = useState('');
  const [loading, setisloading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!email.trim() || !passowrd.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Enter Email or Passowrd',
      });
      return;
    }
    let userData = {email, passowrd};
    setisloading(true);

    auth()
      .signInWithEmailAndPassword(userData.email, userData.passowrd)
      .then(userCredential => {
        const user: FirebaseUser | null = userCredential.user;
        if (user) {
          const userEmail: string | undefined = user.email || undefined;
          const userData: UserProfileData = {
            email: userEmail,
          };
          dispatch({type: 'Login', payload: {userData}});
        }
        Toast.show({
          type: 'success',
          text1: 'Signed In Successfully',
        });
        dispatch(login(userData) as any);
        setEmail('');
        setPassword('');
        setisloading(false);
      })
      .catch(error => {
        setisloading(false);
        Toast.show({
          type: 'error',
          text1: 'User is not exist',
        });
      });
  };
  return {handleSubmit, loading, setEmail, setPassword, email, passowrd};
}
