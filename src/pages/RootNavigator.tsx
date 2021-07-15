import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { useUser } from '../context/UserContext';

import Login from './Login';
import Home from './Home';

export default function RootNavigator() {
    const { user } = useUser();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            { user ? (
                <Stack.Screen name='Home' component={Home} />
            ) : (
                <Stack.Screen name='Login' component={Login} />
            )}
        </Stack.Navigator>
    );
}