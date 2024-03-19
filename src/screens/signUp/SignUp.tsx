import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {styles} from './SignUpStyle';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../navigation/stackNavigation/Navigator';
import {IMAGES} from '../../constants/assessts/AllAssets';
import Button from '../../components/button/Button';
import {UserData} from '../../constants/allTypes/AllTypes';
import useSignUp from './useSignUp';

interface SignupScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'SIGNUP'>;
}

export default function SignUp({navigation}: SignupScreenProps) {
  const {loading, handleRegister, handleChange, state} = useSignUp();
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
        secureTextEntry={true}
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
        <Button
          title={
            loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              'Sign Up'
            )
          }
          onPress={handleRegister}
        />
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
