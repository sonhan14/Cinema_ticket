import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import { HomeScreenNon } from '../screens/home/home-nonauth';



const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="HomeNon" component={HomeScreenNon} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
