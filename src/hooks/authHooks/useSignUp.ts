import {useState} from 'react';
import {useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {login} from '../../redux/authSlice';
import {UserData} from '../../constants/allTypes/AllTypes';

const initialState = {
  username: '',
  email: '',
  password: '',
};
export default function useSignUp() {
  const dispatch = useDispatch();
  const [loading, setisloading] = useState(false);
  const [state, setState] = useState(initialState);

  const handleChange = (name: string, value: string): void => {
    setState((prev: any) => ({...prev, [name]: value}));
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
            dispatch(login(userData));
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
  return {handleRegister, loading, handleChange, state};
}