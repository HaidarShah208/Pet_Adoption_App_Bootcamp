import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {RootTabParamsList} from '../../navigation/tabNavigation/Navigator';
import {IMAGES} from '../../constants/assessts/AllAssets';
import {userStyle} from './ProfileStyle';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/button/Button';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import useProfile from './useProfile';

interface userScreenProps {
  navigation: BottomTabNavigationProp<RootTabParamsList, 'user'>;
}

export default function Profile({navigation}: userScreenProps) {
  const {
    currentUser,
    name,
    email,
    setName,
    handleSubmit,
    loading,
    handlePicture,
    imageUploading
  } = useProfile();

  return (
    <View style={userStyle.mainContainer}>
      <View style={userStyle.main}>
        <Text style={userStyle.heading}>Profile Setting</Text>
        <View>
          {currentUser.photoURL == null ? (
            <View style={{borderRadius: 90, overflow: 'hidden'}}>
              <IMAGES.Defaults height={120} width={120} />
            </View>
          ) : (
            <Image
              source={{uri: currentUser.photoURL}}
              style={userStyle.profile}
            />
          )}
          <TouchableOpacity onPress={handlePicture}>
            <View style={userStyle.profileEdit}>
              <IMAGES.Pencil height={20} width={20} />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={userStyle.mail}>Username</Text>
        <TextInput
          style={userStyle.input}
          value={name}
          onChangeText={name => setName(name)}
        />
        <Text style={userStyle.mail}>Email</Text>
        <TextInput style={userStyle.input} value={email} />
      </View>
      <View style={userStyle.btnsContainer}>
        <Button
          title={
    imageUploading || loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              'Update profile'
            )
          }
          buttonStyle={userStyle.btnsContainer}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}
