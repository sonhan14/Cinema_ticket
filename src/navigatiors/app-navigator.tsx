import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register'
import HomeScreenNon from '../screens/home/home-nonauth';
import MovieCard from '../components/MovieCard';
import { MovieAbout } from '../screens/movie/movie-about';
import HomeScreenAuth from '../screens/home/home-auth';
import auth from '@react-native-firebase/auth';
import ProfileScreen from '../screens/profiles/profile';
import ProfileEmptyScreen from '../screens/profiles/profile_empty';
import SeatBookingScreen from '../screens/seat/SeatBooking';
import TicketScreen from '../screens/pay_ticket/ticket';
import PayScreen from '../screens/pay_ticket/pay';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    const onAuthStateChanged = (user : any) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);



    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'simple_push'
                }}
                initialRouteName="MovieAbout" >
                    
                <Stack.Screen name="Login" component={Login} />

                <Stack.Screen name="Register" component={Register} />

                <Stack.Screen name="HomeNon" component={HomeScreenNon} />

                <Stack.Screen name="HomeAuth" component={HomeScreenAuth} />

                <Stack.Screen name="Profile" component={ProfileScreen} />

                <Stack.Screen name="ProfileEmpty" component={ProfileEmptyScreen} />

                <Stack.Screen name="MovieCard" component={MovieCard} />

                <Stack.Screen name="MovieAbout" component={MovieAbout} />

                <Stack.Screen name="SeatBooking" component={SeatBookingScreen} />

                <Stack.Screen name="Pay" component={PayScreen} />

                <Stack.Screen name="Ticket" component={TicketScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
