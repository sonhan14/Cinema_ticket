import auth from '@react-native-firebase/auth';

import { useEffect, useState, ToastAndroid } from 'react';


export const CreateAccountWithEmailAndPassword = ({email, password}) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const SignOutUser = () => {
    
  return auth().signOut().then(()=>{
  
    ToastAndroid.show('Logged In', ToastAndroid.SHORT)
  }).catch(
    (error)=>{
        console.log('====================================');
        console.log('error',error);
        console.log('====================================');
      }
  );
};

export const SignInWithEmailAndPassword = ({email, password}) => {
  return auth().signInWithEmailAndPassword(email, password);
};

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(authenticatedUser => {
      setUser(authenticatedUser);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  return user;
};

export default useAuth;
