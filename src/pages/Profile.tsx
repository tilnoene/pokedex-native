import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext';

import { Sizing, Colors } from '../styles';
import { Feather } from '@expo/vector-icons';

export default function Favorites() {
    const { user } = useUser();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerProfilePicture}>
                    <Image source={require('../../assets/images/default-user-image.png')} style={styles.profilePicture} />
                </View>
                
                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={styles.username}>{user && user.user.username}</Text>
                </View>

                <View style={styles.containerLogout}>
                    <Feather name='log-out' color={Colors.white} size={Sizing.x30} />
                </View>

                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={styles.subtitle}>{user?.pokemons.length} Favorito{user?.pokemons.length !== 1 && 's'}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    header: {
        width: '100%',
        height: 110,
        backgroundColor: Colors.primary,
        marginBottom: 55,
        flexDirection: 'row',
    },
    containerProfilePicture: {
        width: 110,
        height: 110,
        borderRadius: 60,
        marginTop: 55,
        marginLeft: 10,
        //backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 60,
    },
    username: {
        color: Colors.white,
        fontFamily: 'Barlow_700Bold',
        fontSize: Sizing.x30,
        marginTop: 74,
        marginLeft: 10,
    },
    subtitle: {
        color: Colors.gray300,
        fontFamily: 'Barlow_300Light_Italic',
        fontSize: Sizing.x20,
        marginTop: 112,
        marginLeft: -32,
    },
    containerLogout: {
        backgroundColor: 'blue',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
       
    }
});