// AuthContextProvider.ts
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/authSlice';
import { AuthContextProps, AuthState, FirebaseUser, UserProfileData } from '../constants/allTypes/AllTypes';

const AuthContext = createContext({} as AuthContextProps);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state: { auth: AuthState }) => state.auth);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        readUserProfile(authUser);
      } else {
        setIsAppLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const readUserProfile = (authUser: FirebaseUser) => {
    firestore()
      .collection('users')
      .doc(authUser.uid)
      .onSnapshot((documentSnapshot) => {
        const userData: UserProfileData | undefined = documentSnapshot.data() as UserProfileData;
        dispatch(login(userData));
      });

    setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
  };

  const handleLogout = () => {
    auth().signOut();
    dispatch(logout());
  };

  const contextValue: AuthContextProps = {
    isAuth,
    user,
    dispatch,
    logout: handleLogout,
    isAppLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
