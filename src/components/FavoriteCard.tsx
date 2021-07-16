import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { BorderlessButton } from 'react-native-gesture-handler';
import TypeIcon from './TypeIcon';
import { Colors, Sizing } from '../styles';
import { capitalize } from '../utils';

type FavoriteProps = {
  pokemon: Pokemon;
  onRemove: () => void;
};

function FavoriteCard({ pokemon, onRemove }: FavoriteProps) {
  return (
        <View style={styles.card}>
            <Image source={{ uri: pokemon.image_url }} style={styles.image} />

            <View style={styles.content}>
                <View>
                    <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                    <Text style={styles.number}>#{pokemon.number}</Text>
                </View>

                <View style={styles.types}>
                    {pokemon.kind.split(';').map(type => (
                        <TypeIcon key={type} type={type} />
                    ))}
                </View>
            </View>

            <BorderlessButton style={styles.trash} onPress={onRemove}>
                <MaterialIcons name='delete-outline' size={Sizing.x30} color={Colors.gray500} />
            </BorderlessButton>
        </View>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: Sizing.x10,
        flexDirection: 'row',
    
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
  
        elevation: 5,
        margin: Sizing.x20,
    },
    image: {
        width: 96,
        height: 96,
    }, 
    content: {
        width: '60%',
        justifyContent: 'center',
    }, 
    number: {
        color: Colors.gray100,
        fontFamily: 'Barlow_300Light_Italic',
        fontSize: Sizing.x20,
    }, 
    name: {
        color: Colors.gray100,
        fontFamily: 'Barlow_700Bold',
        fontSize: Sizing.x20,
    }, 
    types: {
        flexDirection: 'row',
        marginTop: Sizing.x05,
        marginLeft: -Sizing.x05,
    }, 
    trash: {
        position: 'absolute',
        alignSelf: 'center',
        right: Sizing.x10,
    }
});

export default memo(FavoriteCard);