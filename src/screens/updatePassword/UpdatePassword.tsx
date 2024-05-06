import {View, Text} from 'react-native';
import React from 'react';
import {userStyle} from '../profile/ProfileStyle';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/button/Button';
import useUpdatePassword from './useUpdatePassword';

export default function UpdatePassword() {
  const {
    setConfirmPassword,
    confirmPassword,
    setCurrentPassword,
    currentPassword,
    handleSubmit,
    setNewPassword,
    newPassword,
  } = useUpdatePassword();
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
  );
}
