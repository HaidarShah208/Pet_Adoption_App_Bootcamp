import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { userStyle } from '../../../styles/frontEnd/User'
import { IMAGES } from '../../../constants/assessts/AllAssessts'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../../../components/button/Button'
import Toast from 'react-native-toast-message'
import { useAuthContext } from '../../../context/AuthContext'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export default function UpdatePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const {user}=useAuthContext()

    console.log('user.password', user.password);
    console.log('user.confirmPassword', user.confirmPassword);
  
    const currentUser = auth().currentUser;
    console.log('currentUser', currentUser);
    const handleSubmit = () => {


      if (!currentUser) {
        Alert.alert('Error', 'User not logged in');
        return;
      }
  
      if (newPassword !== confirmPassword) {
        Alert.alert('Error', 'New password and confirm password do not match');
        return;
      }
  
      const userEmail = currentUser.email;
  
      if (!userEmail) {
        Alert.alert('Error', 'User email not available');
        return;
      }
  
      const credential = auth.EmailAuthProvider.credential(
        userEmail,
        currentPassword,
      );
  
      currentUser
        .reauthenticateWithCredential(credential)
        .then(() => {
          currentUser
            .updatePassword(newPassword)
            .then(() => {
              const userDocRef = firestore().collection('users').doc(user.uid);
              userDocRef
                .update({
                  password: newPassword,
                  confirmPassword: confirmPassword,
                })
                .then(() => {
                  Alert.alert('Success', 'Password updated successfully');
                  setCurrentPassword('');
                  setNewPassword('');
                  setConfirmPassword('');
                })
                .catch(error => {
                  Alert.alert('Firestore Error', error.message);
                });
            })
            .catch(error => {
              Alert.alert('Error', error.message);
            });
        })
        .catch(error => {
          Alert.alert('Error', error.message);
        });
    };

  return (
    <View style={userStyle.mainContainer}>
    <View style={userStyle.main}>
      <Text style={userStyle.heading}>Update Password</Text>
      <Text style={userStyle.mail}>Current Password</Text>
      <TextInput
        style={userStyle.input}
        secureTextEntry={true}
        value={currentPassword}
        onChangeText={currentPassword => setCurrentPassword(currentPassword)}
      />
      <Text style={userStyle.mail}>New Password</Text>
      <TextInput
        style={userStyle.input}
        value={newPassword}
        secureTextEntry={true}
        onChangeText={newPassword => setNewPassword(newPassword)}
      />
      <Text style={userStyle.mail}>Confirm Password</Text>
      <TextInput
        style={userStyle.input}
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
      />
    </View>
    <View style={userStyle.btnsContainer}>
      <Button
        title={'Update Password'}
        buttonStyle={userStyle.btnsContainer}
        onPress={handleSubmit}
      />
    </View>
  </View>
  )
}