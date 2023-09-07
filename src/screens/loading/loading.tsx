import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { color } from '../../theme/fonts/colors';
import { useEffect } from 'react';
import { StackActions } from '@react-navigation/native';


const LoadingScreen = ({route, navigation} : any) => {
    const screen = route.params.screen;
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                StackActions.replace(screen)
            );
        }, 1000)
    }, []);
    return (
        <View style={styles.container}>
            <ActivityIndicator size={50} color={color.text_session} />
        </View>
    );
};

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.default_background,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
