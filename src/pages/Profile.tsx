import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext';

import { Sizing, Colors } from '../styles';

export default function Favorites() {
    const { user } = useUser();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profilePicture} />
                <Text style={styles.username}>{user && user.user.username}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
    },
    header: {
        width: '100%',
        height: 110,
        backgroundColor: 'blue',
        marginBottom: 55,
    },
    profilePicture: {
        width: 110,
        height: 110,
        borderRadius: 60,
        marginTop: 55,
        marginLeft: 10,
        backgroundColor: Colors.primary,
    },
    username: {
        color: Colors.gray500,
        backgroundColor: 'orange',
    }
});