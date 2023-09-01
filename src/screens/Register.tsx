import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Alert,
    ToastAndroid
} from 'react-native';
import { images } from '../images';
import { color } from '../theme/fonts/colors';
import { CreateAccountWithEmailAndPassword } from '../utilities/Auth';


const layout = Dimensions.get('window');


const Register = ({ navigation }: any) => {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [retypePassword, setRetypePassword] = useState('')

    const [showErrors, setShowErrors] = useState(false)
    const [errors, setErrors] = useState<any>({})

    // @ts-ignore
    const getErrors = (email, password, retypePassword) => {
        const errors = {}
        if(!email) {
            // @ts-ignore
            errors.email = 'Please enter your email';
        } else if (!email.includes('@') || !email.includes('.com')){
            // @ts-ignore
            errors.email = 'Please valid email'
        }

        if(!password){
            // @ts-ignore
            errors.password = 'Please enter your password'
        } else if (password.length < 6){
            // @ts-ignore
            errors.password = 'Password must be more than 6 characters'
        }

        if(!retypePassword){
            // @ts-ignore
            errors.retypePassword = 'Please re-type your password'
        } else if (password !== retypePassword){
            // @ts-ignore
            errors.retypePassword = 'Password not correct'
        }
        return errors;
    }

    const handleRegister = () => {
        const errors: any = getErrors(email, password, retypePassword);

        if(Object.keys(errors).length > 0) {
            setShowErrors(true);
            setErrors(showErrors && errors);
            console.log(errors);
        } else {
            setErrors({});
            setShowErrors(false);
            handleSignUp(email,password);
        }
    }

    const handleSignUp = (email: string, password: string) => {
        CreateAccountWithEmailAndPassword({email, password}).then(() => {
			navigation.navigate('Login')
			ToastAndroid.show('Account Created', ToastAndroid.SHORT)
		}).catch(error=>{
			if(error.code === 'auth/email-already-in-use'){
				return setErrors({email: 'email already in use'});
			}
            if (error.code === 'auth/invalid-email'){
                return setErrors({email: 'Email is invalid'});
            }
            setErrors({});
            setShowErrors(false);
			console.log('error');
		})
    }

    return (
        <View style={styles.container}>
            <View style={{
			justifyContent: 'space-around',
			alignSelf: 'center',
			flexDirection: 'row',
			padding: 20,
		}}>
			<Text style={styles.textStyle}>
				Here's your first step with us!
			</Text>
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
                placeholder="Enter your password"
                placeholderTextColor="#AFAFAF"
                onChangeText={password => setPassword(password)}
            />
        </View>
        
        {errors.password && (
            <Text style={styles.warning}>
                {errors.password}
            </Text>)
        }

        <View style={styles.inputView}>
            <TextInput
                value={retypePassword}
                style={styles.inputText}
                placeholder="Re-type your password"
                placeholderTextColor="#AFAFAF"
                onChangeText={retypePassword => setRetypePassword(retypePassword)}
            />
        </View>
        
        {errors.retypePassword && (
            <Text style={styles.warning}>
                {errors.retypePassword}
            </Text>)
        }

        <TouchableOpacity style={styles.loginBtn}
            onPress={() => { 
            // Register(email, password)
            handleRegister()
            }}>
            <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>
    </View>
    );
};

export default Register;

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
    warning: {
        color: color.angry,
		fontWeight: '700',
		padding: 10,
    },
    textStyle: {
		color: '#ffffff',
		fontWeight: '700',
		padding: 10,
        width: '50%',
		alignSelf: 'center',
	},
    inputView: {
        width: layout.width * 0.8,
        backgroundColor: '#EAEAEA',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: '#777777',
        fontWeight: '800',
    },
    singUp: {
        color: '#39B54A',
        fontWeight: '500',
    },
    loginBtn: {
        width: layout.width * 0.4,
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
        flexDirection: 'column',
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
