import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useUser } from '../context/UserContext';
import api from '../services/api';

import Button from '../components/Button';
import LinkButton from '../components/LinkButton';

import { Sizing, Colors } from '../styles';

export default function Login() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const { setUser } = useUser();
    const { navigate } = useNavigation();

    const handleLogin = () => {
        api.get(`/users/${username}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                setError('Esse usuário não existe!');
            });
    }

    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../assets/illustrations/latias-illustration.png')}
                />
                <Text style={styles.title}>
                    Explore e descubra{'\n'} 
                    o maravilhoso{'\n'} 
                    mundo Pokémon
                </Text>
                <Text style={styles.subtitle}>Temos que pegar!</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do treinador'
                    value={username}
                    onChangeText={setUsername}
                />
                {!!error && <Text style={styles.errorMessage}>{error}</Text>}
                <Button onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </Button>
                
                <LinkButton text='Criar conta' onPress={() => navigate('SignUp')} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: Colors.white,
        paddingHorizontal: Sizing.x50,
        paddingVertical: Sizing.x40,
        justifyContent: 'center',
        flex: 1,
    },
    container: {},
    image: {
        height: 260,
        width: '100%',
        resizeMode: 'contain',
    },
    title: {
        fontFamily: 'Barlow_700Bold',
        color: Colors.gray300,
        fontSize: 28,
        textAlign: 'center',
        marginTop: -10,
    },
    subtitle: {
        fontFamily: 'Barlow_500Medium',
        color: Colors.gray500,
        fontSize: 17,
        textAlign: 'center',
        marginBottom: Sizing.x20,
    },
    input: {
        backgroundColor: Colors.gray700,
        borderRadius: Sizing.x10,
        fontFamily: 'Barlow_500Medium',
        color: Colors.gray500,
        fontSize: 16,
        paddingVertical: Sizing.x20,
        paddingHorizontal: Sizing.x30,
        marginBottom: 16,
    },
    errorMessage: {
        fontFamily: 'Barlow_400Regular',
        color: Colors.primary,
        fontSize: 14,
        marginLeft: Sizing.x10,
        marginTop: -Sizing.x20,
        marginBottom: Sizing.x05,
    },
    buttonText: {
        fontFamily: 'Barlow_600SemiBold',
        color: Colors.white,
        fontSize: 18,
    }
});