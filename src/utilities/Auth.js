import auth from '@react-native-firebase/auth';


export const CreateAccountWithEmailAndPassword = ({email, password}) => {
    return auth().createUserWithEmailAndPassword(email, password)
}

export const SignOutUser = () => {
    return auth().signOut();
}

export const SignInWithEmailAndPassword = ({email, password}) => {
    return auth().signInWithEmailAndPassword(email, password)
}