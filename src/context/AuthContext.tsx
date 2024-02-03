import React, { createContext, ReactNode, useEffect, useState } from 'react';
import auth,{FirebaseAuthTypes } from '@react-native-firebase/auth';

interface AuthContextType {
  isLoggedIn: boolean;
  user?:  FirebaseAuthTypes.User ;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: undefined,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState< FirebaseAuthTypes.User  | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      setIsLoggedIn(!!authUser);
      setUser(authUser);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn,user: user || undefined }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
