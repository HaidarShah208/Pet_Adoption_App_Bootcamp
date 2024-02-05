
export interface AuthContextProps {
    isAuth: boolean;
    user: Record<string, any>;
    dispatch: React.Dispatch<AuthAction>;
    isAppLoading:boolean
  }
  
  
  
  export interface FirebaseUser {
    uid: string;
    displayName?: string | null;
    email?: string | null;
    // Add any additional properties you need
  }
  export interface UserProfileData {
    confirmPassword?: string ;
    email?: string;
    password?: string ;
    role?: string ;
    status?: string ;
    uid?: string;
    username?: string ;
    
  }
  
  export interface AuthState {
    isAuth: boolean;
    user: UserProfileData;
  }
  
  export type AuthAction =
    | { type: "Login"; payload: { userData?: UserProfileData } }
    | { type: "Logout" };
  