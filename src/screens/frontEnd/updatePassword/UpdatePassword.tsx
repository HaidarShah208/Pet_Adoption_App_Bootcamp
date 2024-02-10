import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { userStyle } from '../../../styles/frontEnd/User'
import { IMAGES } from '../../../constants/assessts/NavigationAssessts'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../../../components/button/Button'
import Toast from 'react-native-toast-message'

export default function UpdatePassword() {
    const [passowrd, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = () => {
      console.log('submit');
      if(!passowrd.trim() || !newPassword.trim()){
        Toast.show({
          type:'error',
          text1:'Enter Current or New Password'
        })
        console.log('Enter Current or New Password')
        return;
      }
    }
  return (
    <View style={userStyle.mainContainer}>
    <View style={userStyle.main}>
      <Text style={userStyle.heading}>Update Password</Text>
      <Text style={userStyle.mail}>Current Password</Text>
      <TextInput
        style={userStyle.input}
        value={passowrd}
        onChangeText={passowrd => setPassword(passowrd)}
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
        value={newPassword}
        secureTextEntry={true}
        onChangeText={newPassword => setNewPassword(newPassword)}
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