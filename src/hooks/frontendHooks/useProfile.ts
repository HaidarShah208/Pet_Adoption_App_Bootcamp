import auth from '@react-native-firebase/auth';
import ImagePicker, {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {Resource} from '../../constants/allTypes/AllTypes';
import {useSelector} from 'react-redux';
import {selectAuthState} from '../../redux/authSlice';
import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import { Alert } from 'react-native';

export default function useProfile() {
    const user = useSelector(selectAuthState);
  const [email, setEmail] = useState(user?.user.email || '');
  const [name, setName] = useState(user?.user.username || '');
  const [loading, setLoading] = useState(false);
  const [resource, setResource] = useState<Resource>({});
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const currentUser = auth().currentUser;

  useEffect(() => {
    if (user?.photoURL) {
      setProfileImage(user.photoURL);
    }
  
  }, [user?.photoURL]);

  useEffect(() => {
    if (currentUser) {
      fetchUserData(currentUser.uid); // Fetch user data from Firestore when component mounts
    }
  }, [currentUser]);

  if (!currentUser) {
    Alert.alert('Error', 'User not logged in');
    return null;
  }

  const fetchUserData = async (uid: string) => {
    try {
      const userDoc = await firestore().collection('users').doc(uid).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        if (userData) {
          setName(userData.username || '');
          setEmail(userData.email || '');
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      currentUser?.updateProfile({
        displayName: name,
      });

      const userDocRef = firestore().collection('users').doc(user?.user.uid);
      await userDocRef.update({
        username: name,
        email: email,
      });

      setLoading(false);
      Toast.show({
        type: 'success',
        text1: 'Profile updated',
      });
    } catch (error) {
      if (error instanceof Error) {
        setLoading(false);
        Alert.alert('Error', error.message);
      } else {
        console.error(error);
      }
    }
  };

  // image picker
  const updateUserProfile = () => {
    currentUser.updateProfile({
      displayName: name,
    });
    const userDocRef = firestore().collection('users').doc(user?.user.uid);
    userDocRef
      .update({
        username: name,
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
      Toast.show({
        type: 'error',
        text1: 'Not selected',
      });
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
      const userDocRef = firestore().collection('users').doc(user?.user.uid);
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
    {currentUser,name,setName,email,setEmail,loading,handleSubmit,handlePicture}
  )
}