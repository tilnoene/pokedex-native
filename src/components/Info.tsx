import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    ActivityIndicator,
} from 'react-native';

import { capitalize } from '../utils';
import { useUser } from '../context/UserContext';
import api from '../services/api';

import TypeIcon from './TypeIcon';

import { Colors, Sizing } from '../styles';
import { AntDesign } from '@expo/vector-icons';

type InfoProps = {
    name: string;
};

export default function Info({ name }: InfoProps) {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const { user, setUser } = useUser();
    const isFavorite = user?.pokemons.some((pokemon) => pokemon.name === name);

    useEffect(() => {
        api.get(`pokemons/${name}`).then((response) => setPokemon(response.data));
    }, []);

    if (user == null) return null;

    if (pokemon == null)
        return (
            <>
                <View style={styles.header}>
                    <ActivityIndicator
                        style={styles.image}
                        size={Sizing.x40}
                        color={Colors.gray500}
                    />
                </View>
                <View style={styles.content} />
            </>
        );

    const toggleFavorite = async () => {
        if (isFavorite) {
            await api.delete(`users/${user.user.username}/starred/${name}`);
                setUser({
                    ...user,
                    pokemons: user.pokemons.filter((pokemon) => pokemon.name !== name),
                });
        } else {
            await api.post(`users/${user.user.username}/starred/${name}`);
            setUser({ ...user, pokemons: [...user.pokemons, pokemon] });
        }
    };

    return (
        <>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                    <Text style={styles.number}>#{pokemon.number}</Text>
                </View>

                <Image style={styles.image} source={{ uri: pokemon.image_url }} />
                
                <View style={styles.heart}>
                    <Pressable onPress={toggleFavorite}>
                        <AntDesign
                            name={isFavorite ? 'heart' : 'hearto'}
                            size={Sizing.x40}
                            color={Colors.white}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.stats}>
                    <View style={styles.stat}>
                        <Text style={styles.statName}>Altura</Text>
                        <Text style={styles.statValue}>{pokemon.height}</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statName}>Peso</Text>
                        <Text style={styles.statValue}>{pokemon.weight}</Text>
                    </View>
                </View>
                <View style={styles.types}>
                    {pokemon.kind.split(';').map((type) => (
                        <View key={type} style={styles.type}>
                            <TypeIcon type={type} size='big' />
                            <Text style={styles.typeName}>{capitalize(type)}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        borderTopRightRadius: Sizing.x40,
        borderTopLeftRadius: Sizing.x40,
        alignItems: 'center',
        height: 120,
        zIndex: 1,
    }, 
    image: {
        width: 160,
        height: 160,
        position: 'absolute',
        bottom: -80,
    }, 
    heart: {
        position: 'absolute',
        right: Sizing.x30,
        top: Sizing.x30,
    },
    title: {
        position: 'absolute',
        left: Sizing.x30,
        top: Sizing.x20,
    },
    name: {
        color: Colors.white,
        fontFamily: 'Barlow_700Bold',
        fontSize: 20,
    },
    number: {
        color: Colors.white,
        fontFamily: 'Barlow_300Light_Italic',
        fontSize: 16,
    },
    content: {
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: Sizing.x30,
        height: 260,
    },
    stats: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-around',
        marginBottom: Sizing.x10,
    },
    stat: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    statName: {
        fontFamily: 'Inter_400Regular',
        fontSize: Sizing.x20,
        color: Colors.gray300,
    },
    statValue: {
        fontFamily: 'Inter_500Medium',
        fontSize: Sizing.x40,
        color: Colors.gray300,
    },
    types: {
        flexDirection: 'row',
        justifyContent: 'center',
    }, 
    type: {
        paddingLeft: Sizing.x10,
        paddingRight: Sizing.x10,
    },
    typeName: {
        textAlign: 'center',
        color: Colors.gray100,
        fontFamily: 'Barlow_500Medium',
        fontSize: 14,
        paddingTop: Sizing.x05,
    },
});