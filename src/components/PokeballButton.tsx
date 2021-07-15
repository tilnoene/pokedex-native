import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Colors } from '../styles';

export default function PokeballButton({ color }: { color: string }) {
    return (
        <View style={styles.container}>
            <View style={[styles.ball, { backgroundColor: color }]}>
                <View style={styles.centerBall} />
                <View style={styles.centerLine} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 78,
        height: 78,
        borderRadius: 40,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    ball: {
        width: 60,
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerBall: {
        width: 22,
        height: 22,
        borderRadius: 12,
        backgroundColor: Colors.primary,
        position: 'absolute',
        zIndex: 1,
    },
    centerLine: {
        width: 60,
        height: 8,
        backgroundColor: Colors.primary,
        position: 'absolute',
    }
});