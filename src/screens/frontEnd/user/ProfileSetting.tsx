import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootTabParamsList} from '../../../navigation/tabNavigation/Navigator';
import {HOME, IMAGES} from '../../../constants/assessts/AllAssessts';
import {userStyle} from '../../../styles/frontEnd/User';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../../components/button/Button';
import Toast from 'react-native-toast-message';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useAuthContext} from '../../../context/AuthContext';
import auth from '@react-native-firebase/auth';
import ImagePicker, {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

interface userScreenProps {
  navigation: BottomTabNavigationProp<RootTabParamsList, 'user'>;
}

interface Resource {
  uri?: string;
  data?: string;
}
export default function User({navigation}: userScreenProps) {
  const {user} = useAuthContext();
  const [email, setEmai] = useState(user.email);
  const [name, setName] = useState(user.username);
  const [resource, setResource] = useState<Resource>({});
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const currentUser = auth().currentUser;
  useEffect(() => {
    if (user.photoURL) {
      setProfileImage(user.photoURL);
    }
  }, [user.photoURL]);
  if (!currentUser) {
    Alert.alert('Error', 'User not logged in');
    return;
  }

  const handleSubmit = () => {
    currentUser.updateProfile({
      displayName: name,
    });
    const userDocRef = firestore().collection('users').doc(user.uid);
    userDocRef
      .update({
        username: name,
        email: email,
      })
      .then(() => {
        Alert.alert('Success', 'Profile updated successfully');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  // image picker
  const updateUserProfile = () => {
    currentUser.updateProfile({
      displayName: name,
    });
    const userDocRef = firestore().collection('users').doc(user.uid);
    userDocRef
      .update({
        username: name,
        // status: status,
      })
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'profile updated',
        });
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  const handlePicture = async () => {
    const options: ImagePicker.ImageLibraryOptions & {
      title: string;
      customButtons: {};
      storageOptions: {};
    } = {
      title: 'Select Image',
      mediaType: 'photo' as ImagePicker.MediaType,
      customButtons: [
        {name: 'customOptionKey', title: 'Choose File from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    try {
      const res: ImagePickerResponse = await launchImageLibrary(options);

      console.log('response', res.assets);
      const resp = res.assets as ImagePicker.Asset[];
      const uri: string | undefined = resp[0].uri;
      setResource({
        uri: res.uri,
        data: res.data,
      });
      if (uri !== undefined && uri !== null) {
        console.log('uri before', uri);
        uploadImageToFirebaseStorage(uri);
      }
      if (res.didCancel) {
        console.log('res.uri', res.uri);
        console.log('res.data', res.data);
      } else {
        console.log('User cancelled image picker');
      }
    } catch (err) {
      console.error('ImagePicker error:', err);
    }
  };
  const uploadImageToFirebaseStorage = async (uri: string) => {
    try {
      const imageName = uri.substring(uri.lastIndexOf('/') + 1);
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = storage().ref().child(`profileImages/${imageName}`);
      await ref.put(blob);
      const downloadURL = await ref.getDownloadURL();
      const userDocRef = firestore().collection('users').doc(user.uid);
      userDocRef
        .update({
          photoURL: downloadURL,
        })
        .then(() => {
          Alert.alert('Success', 'Profile updated successfully');
          setProfileImage(downloadURL);
        })
        .catch(error => {
          Alert.alert('Error', error.message);
        });

      currentUser.updateProfile({
        photoURL: downloadURL,
      });
    } catch (error) {
      console.error('Error uploading image to Firebase Storage:', error);
    }
  };
  return (
    <View style={userStyle.mainContainer}>
      <View style={userStyle.main}>
        <Text style={userStyle.heading}>Profile Setting</Text>
        <View>
          {currentUser.photoURL == null ? (
            <View style={{borderRadius: 90, overflow: 'hidden'}}>
              <HOME.HomeUser height={120} width={120} />
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
        <TextInput
          style={userStyle.input}
          value={email}
          onChangeText={email => setEmai(email)}
        />
      </View>
      <View style={userStyle.btnsContainer}>
        <Button
          title={'Update profile'}
          buttonStyle={userStyle.btnsContainer}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}
