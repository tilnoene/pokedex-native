import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { useUser } from '../context/UserContext';

import Login from './Login';
import Feed from './Feed';

export default function RootNavigator() {
    const { user } = useUser();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            { user ? (
                <Stack.Screen name='Feed' component={Feed} />
            ) : (
                <Stack.Screen name='Login' component={Login} />
            )}
        </Stack.Navigator>
    );
}