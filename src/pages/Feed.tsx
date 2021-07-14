import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import api from '../services/api';

import Card from '../components/Card';
import { Sizing, Colors } from '../styles';

export default function Feed() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    const fetchPokemons = async () => {
        if (loading || page === null) return;

        setLoading(true);

        await api.get(`/pokemons?page=${page}`)
                .then(response => {
                    setPokemons([...pokemons, ...response.data.data]);
                    setPage(response.data.next_page);
                });
        
        setLoading(false);
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList 
                contentContainerStyle={styles.contentContainer}
                numColumns={2}
                data={pokemons}
                renderItem={({ item }) => <Card pokemon={item} />}
                keyExtractor={pokemon => pokemon.id.toString()}
                onEndReached={fetchPokemons}
                onEndReachedThreshold={0.1} // 10% finais carrega novos pokémon
                ListFooterComponent={() => 
                    loading ? (
                        <ActivityIndicator size={Sizing.x30} color={Colors.primary} />
                    ) : (
                        <View style={{ height: Sizing.x30 }} />
                    )
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    contentContainer: {
        alignItems: 'center',
    }
});