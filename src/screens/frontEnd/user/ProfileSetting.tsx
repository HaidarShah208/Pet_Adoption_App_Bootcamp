import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {RootTabParamsList} from '../../../navigation/tabNavigation/Navigator';
import {IMAGES} from '../../../constants/assessts/AllAssessts';
import {userStyle} from '../../../styles/frontEnd/User';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../../components/button/Button';
import Toast from 'react-native-toast-message';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useAuthContext} from '../../../context/AuthContext';
import auth from '@react-native-firebase/auth';
import ImagePicker,{ImagePickerResponse, launchCamera, launchImageLibrary} from 'react-native-image-picker';

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

  const currentUser = auth().currentUser;
  // console.log('currentUser',currentUser)

  // const handleSubmit = () => {
  //   console.log('submit');

  //   if(!passowrd.trim() || !name.trim()){
  //     Toast.show({
  //       type:'error',
  //       text1:'Enter Name and Email'
  //     })
  //     console.log('enter email and password')
  //     return;
  //   }
  // }

  if (!currentUser) {
    Alert.alert('user not found');
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
  const [resource, setResource] = useState<Resource>({});

  const selectFile = async () => {
    const options: ImagePicker.ImageLibraryOptions & { title: string ,customButtons:{},storageOptions:{}
} = {
        title: 'Select Image',
        mediaType: 'photo' as ImagePicker.MediaType, // Explicitly set the type
        customButtons: [
          { name: 'customOptionKey', title: 'Choose File from Custom Option' },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
  
    try {
      const res: ImagePickerResponse | undefined = await launchImageLibrary(options);
console.log('res', res.assets)
      if (res.didCancel) {
        setResource({
          uri: res.uri,
          data: res.data,
        });
      } else {
        console.log('User cancelled image picker');
      }
    } catch (err) {
      console.error('ImagePicker error:', err);
    }
  };
  return (
    <View style={userStyle.mainContainer}>
      <View style={userStyle.main}>
        <Text style={userStyle.heading}>Profile Setting</Text>
        <View>
          <View>
            {user.photoURL == null ? (
              <IMAGES.userImg />
            ) : (
              <Image source={{uri: user.photoURL}} />
            )}
          </View>
          <TouchableOpacity style={userStyle.profileEdit} onPress={selectFile}>
            <IMAGES.Pencil />
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
