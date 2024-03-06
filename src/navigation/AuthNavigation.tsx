import {View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import TabNavigator from './tabNavigation/Navigator';
import Navigator from './stackNavigation/Navigator';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootDrawerParamsList} from './drawerNavigation/DrawerNavigator';
import {useSelector} from 'react-redux';
import {login, selectAuthState} from '../store/slice/authSlice';
import {FirebaseUser, UserProfileData} from '../constants/allTypes/AllTypes';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useAppDispatch} from '../store/store';

const convertFirebaseUserToUserProfileData = (
  firebaseUser: FirebaseAuthTypes.User,
): UserProfileData => {
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email || '',
  };
};

export default function AuthNavigation() {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const isAuth = useSelector(selectAuthState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth().onAuthStateChanged((user: FirebaseUser | null) => {
      if (user) {
        readUserProfile(user);
      } else {
        setIsAppLoading(false);
      }
    });
  }, [auth]);

  const readUserProfile = (user: FirebaseUser) => {
    firestore()
      .collection('users')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        const userDataFromFirebase: FirebaseAuthTypes.User =
          documentSnapshot.data() as FirebaseAuthTypes.User;
        const userProfileData: UserProfileData =
          convertFirebaseUserToUserProfileData(userDataFromFirebase);
        dispatch(login(userProfileData));
      });
    setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
  };
  return (
    <>
      {isAuth.isAuth ? (
        <TabNavigator
          navigation={
            undefined as unknown as DrawerNavigationProp<
              RootDrawerParamsList,
              'tabNavigator'
            >
          }
        />
      ) : (
        <Navigator />
      )}
    </>
  );
}
