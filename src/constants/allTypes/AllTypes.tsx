
export interface AuthContextProps {
    isAuth: boolean;
    user: Record<string, any>;
    dispatch: React.Dispatch<AuthAction>;
    isAppLoading:boolean
    logout:()=>void
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

   export type Resource ={
      uri?: string;
      data?: string;
    }
    
 export interface YourState {
      petType: string;
      petBreed: string;
      amount: string;
      vaccinated: string;
      gender: string;
      petWeight: string;
      petLocation: string;
      description: string;
    }

export type UserData = {
      username: string;
      email: string;
      password: string;
      uid?: string;
      photoURL?: string | null;
      creationTime?: string;
      status?: string;
    };

    export type AuthStates= {
      username: string;
      email: string;
      photoURL: null;
      isAuth: boolean;
      user: UserProfileData;
      isAppLoading: boolean;
    }

 

