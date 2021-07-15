import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

//import Header from '../components/Header';
import Feed from './Feed';
import Favorites from './Profile';
import ViewPokemon from './ViewPokemon';
import PokeballButton from '../components/PokeballButton';

import { Colors } from '../styles';
import { Feather } from '@expo/vector-icons';

export default function Home() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: Colors.primary,
                    borderTopColor: 'transparent',
                },
                activeTintColor: Colors.white,
                inactiveTintColor: Colors.red300
            }}
            initialRouteName='Feed'
        >
            <Tab.Screen 
                name='Pokémon' 
                component={ViewPokemon}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='info' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name='Feed' 
                component={Feed}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <PokeballButton color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name='Profile'
                component={Favorites}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='user' size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}