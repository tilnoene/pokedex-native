import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Feed from './Feed';

export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Feed' component={Feed} />
        </Stack.Navigator>
    );
}