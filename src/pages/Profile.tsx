import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Pressable, FlatList } from 'react-native';

import api from '../services/api';
import { useUser } from '../context/UserContext';

import ModalView from '../components/ModalView';
import FavoriteCard from '../components/FavoriteCard';

import { Sizing, Colors } from '../styles';
import { Feather } from '@expo/vector-icons';

export default function Profile() {
    const [showModal, setShowModal] = useState(false);
    const { user, setUser } = useUser();
    
    if (user == null) return null;

    const removeFavorite = async (name: string) => {
        await api.delete(`/users/${user.user.username}/starred/${name}`);
            setUser({
                ...user,
                pokemons: user.pokemons.filter(pokemon => pokemon.name !== name),
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerProfilePicture}>
                    <Image source={require('../../assets/images/default-user-image.png')} style={styles.profilePicture} />
                </View>
                
                <View style={styles.containerRight}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.username}>{user && user.user.username}</Text>
                        <Text style={styles.subtitle}>{user?.pokemons.length} Favorito{user?.pokemons.length !== 1 && 's'}</Text>
                    </View>

                    <Pressable onPress={() => setUser()}>
                        <Feather style={styles.containerLogout} name='log-out' color={Colors.white} size={Sizing.x30} />
                    </Pressable>
                </View>
            </View>

            {user?.pokemons.length === 0 ? 
                <View style={styles.containerPokemons}>
                    <Image style={styles.image} source={require('../../assets/illustrations/magikarp-illustration.png')} />
                    <Text style={styles.title}>
                        Você ainda não favoritou{'\n'} 
                        nenhum Pokémon!
                    </Text>
                </View>
            : 
                <View style={styles.containerPokemons}>
                    <FlatList
                        contentContainerStyle={styles.flatList}
                        data={user.pokemons}
                        renderItem={({ item }) => (
                            <FavoriteCard pokemon={item} onRemove={() => removeFavorite(item.name)} />
                        )}
                        keyExtractor={(pokemon) => pokemon.id.toString()}
                    /> 
                </View>
            }

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
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
        alignItems: 'center',
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 60,
    },
    containerRight: {
        width: Dimensions.get('window').width - 120,
        justifyContent: 'flex-end',
    },
    containerTitle: {
        alignSelf: 'flex-start',
        position: 'absolute',
        marginLeft: 10,
        bottom: -19,
    },
    username: {
        color: Colors.white,
        fontFamily: 'Barlow_700Bold',
        fontSize: Sizing.x30,
    },
    subtitle: {
        color: Colors.gray300,
        fontFamily: 'Barlow_300Light_Italic',
        fontSize: Sizing.x20,
    },
    containerLogout: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 15,
        marginBottom: 5,
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'contain',
    },
    title: {
        fontFamily: 'Barlow_700Bold',
        color: Colors.gray300,
        fontSize: 22,
        textAlign: 'center',
        marginTop: -4,
    },
    containerPokemons: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.white,
        justifyContent: 'center',
        marginTop: Sizing.x40,
    },
    flatList: {
        width: '100%',
        paddingBottom: 200,
    }
});