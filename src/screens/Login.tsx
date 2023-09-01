import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ToastAndroid,
} from 'react-native';
import { images } from '../images';
import { color } from '../theme/fonts/colors';
import { SignInWithEmailAndPassword } from '../utilities/Auth';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const layout = Dimensions.get('window');
// @ts-ignore
export default function Login({ navigation }: any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const [showErrors, setShowErrors] = useState(false)
    const [errors, setErrors] = useState<any>({})

    const [hidePassword, setHidePassword] = useState(true)

    // @ts-ignore
    const getErrors = (email, password) => {
        const errors : any = {}
        if (!email) {
            // @ts-ignore
            errors.email = 'Please enter your email';
        } else if (!email.includes('@') || !email.includes('.com')) {
            // @ts-ignore
            errors.email = 'Please valid email'
        }

        if (!password) {
            // @ts-ignore
            errors.password = 'Please enter your password'
        } else if (password.length < 6) {
            // @ts-ignore
            errors.password = 'Password must be more than 6 characters'
        }

        return errors;
    }

    const handleRegister = () => {
        const errors = getErrors(email, password);

        if (Object.keys(errors).length > 0) {
            setShowErrors(true);
            setErrors(showErrors && errors);
            console.log(errors);
        } else {
            setErrors({});
            setShowErrors(false);
            handleSignIn({email: email, password: password});
        }
    }

    const handleSignIn = ({email, password}) => {
        SignInWithEmailAndPassword({ email, password })
            .then(() => {
                navigation.navigate('HomeAuth'),
                    ToastAndroid.show('Logged In', ToastAndroid.SHORT)
            })
            .catch(error => {
                console.log(error);
                if (error.code === 'auth/user-not-found') {
                    setErrors({ email: 'user not found' });
                    return;
                }
                if (error.code === 'auth/wrong-password') {
                    setErrors({ password: 'wrong password' });
                    return;
                }
            });
    }


    // const login = (email: string, password: string) => {
    //     SignInWithEmailAndPassword({ email, password })
    //         .then(() => {
    //             navigation.navigate('HomeNon'),
    //                 ToastAndroid.show('Logged In', ToastAndroid.SHORT)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             if (error.code === 'auth/user-not-found') {
    //                 // return setErrorEmail({ email: 'user not found' });
    //                 console.log('====================================');
    //                 console.log('email already in use');
    //                 console.log('====================================');
    //             }
    //             if (error.code === 'auth/wrong-password') {
    //                 // return setErrorPassword({ password: 'wrong password' });
    //             }
    //         });

    // };

    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={images.logo} resizeMode="contain" style={styles.logo_style} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    value={email}
                    style={styles.inputText}
                    placeholder="Enter your email"
                    placeholderTextColor="#AFAFAF"
                    onChangeText={email => setEmail(email)}
                />
            </View>

            {errors.email && (
                <Text style={styles.warning}>
                    {errors.email}
                </Text>)
            }

            <View style={styles.inputView}>
                <TextInput
                    value={password}
                    style={styles.inputText}
                    secureTextEntry = {hidePassword ? true : false}
                    placeholder="Enter your password"
                    placeholderTextColor="#AFAFAF"
                    onChangeText={password => setPassword(password)}
                />
                {password.length > 0 && (
                    <TouchableOpacity
                    onPress={() => { setHidePassword(!hidePassword)}}
                    activeOpacity={0.9}
                    style={{paddingHorizontal: 10, paddingRight: 14}}
                    >
                        <FontAwesomeIcon name={hidePassword ? 'eye-slash' : 'eye'} size={20} color={color.Grey} />
                    </TouchableOpacity>
                )}
            </View>

            {errors.password && (
                <Text style={styles.warning}>
                    {errors.password}
                </Text>)
            }
            
            <TouchableOpacity style={styles.loginBtn}
                onPress={() =>
                    // login(email, password)
                    handleRegister()
                }>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.actions}>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Register')
                }}>
                    <Text style={styles.singUp}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.default_background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40,
    },
    inputView: {
        flexDirection: 'row',
        width: layout.width * 0.8,
        backgroundColor: '#EAEAEA',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    warning: {
        color: color.angry,
        fontWeight: '700',
        padding: 10,
    },
    inputText: {
        flex: 1,
        height: 50,
        color: '#777777',
        fontWeight: '800',
        alignItems: 'flex-start',
        left: 10,
        right: 10,
    },
    singUp: {
        color: '#39B54A',
        fontWeight: '500',
    },
    loginBtn: {
        width: layout.width * 0.8,
        backgroundColor: '#39B54A',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    loginText: {
        color: '#ffffff',
        fontWeight: '800',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    logoView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        marginTop: 0,
    },
    logo_style: {
        marginBottom: 25,
        width: layout.width * 0.5,
        height: layout.height * 0.2,
    },
    forgot: {
        color: color.white,
    }
});