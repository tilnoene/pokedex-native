import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../styles';

export default function ViewPokemon() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ainda não há nada{'\n'} para ser feito aqui :(</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Barlow_700Bold',
        color: Colors.gray300,
        fontSize: 22,
        textAlign: 'center',
        marginTop: -4,
    },
});