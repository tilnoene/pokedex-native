import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Info from './Info';

type ModalViewProps = {
    visible: boolean;
    closeModal: () => void;
    name: string;
};

export default function ModalView({ visible, closeModal, name, ...props }: ModalViewProps) {
    return (
        <Modal 
            visible={visible}
            animationType='slide'
            transparent={true}
            onRequestClose={closeModal}
            {...props}
        >
            <TouchableOpacity 
                style={styles.container}
                activeOpacity={1}
                onPressOut={closeModal}
            >
                <Info name={name} />
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    }
});