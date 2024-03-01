import { useState } from "react";
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
 
 
export default function useForgotPassword() {
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
    {handleSubmit,email,setEmail,}
  )
}