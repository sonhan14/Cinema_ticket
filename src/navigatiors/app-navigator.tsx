import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import HomeScreenNon from '../screens/home/home-nonauth';
import MovieCard from '../../components/MovieCard';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="HomeNon" >
                <Stack.Screen name="Login" component={MovieCard} />
                <Stack.Screen name="HomeNon" component={HomeScreenNon} />
                <Stack.Screen name="MovieCard" component={MovieCard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
