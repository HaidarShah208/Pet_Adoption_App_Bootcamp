import   {useState} from 'react';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import {login} from '../../store/slice/authSlice';
import auth from '@react-native-firebase/auth';

export default function useLogin() {
  const [email, setEmail] = useState('');
  const [passowrd, setPassword] = useState('');
  const [loading, setisloading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
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
      try{
        const userCredential = await auth().signInWithEmailAndPassword(email, passowrd);
        const user= userCredential.user;
        if (user) {
          const userData = {
            uid: user.uid,
            email: user.email,
            username: user.displayName || '',  
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
      }
      catch (error){
        setisloading(false);
        Toast.show({
          type: 'error',
          text1: 'User is not exist',
        });
      };
  };
  return {handleSubmit, loading, setEmail, setPassword, email, passowrd};
}
