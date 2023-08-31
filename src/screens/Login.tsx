import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { images } from '../images';
import { color } from '../theme/fonts/colors';

const layout = Dimensions.get('window');
// @ts-ignore
export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={images.logo} resizeMode="contain" style={styles.logo_style} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    value={email}
                    style={styles.inputText}
                    placeholder="+2340899004909"
                    placeholderTextColor="#AFAFAF"
                    onChangeText={email => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    value={password}
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#AFAFAF"
                    onChangeText={password => setPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => navigation.navigate('HomeNon')}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.actions}>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
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