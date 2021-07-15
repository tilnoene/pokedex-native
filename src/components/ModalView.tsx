import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

type ModalViewProps = {
    visible: boolean;
    closeModal: () => void;
};

export default function ModalView({ visible, closeModal, ...props }: ModalViewProps) {
    return (
        <Modal style={styles.container} visible={visible} {...props}>
            <Text>oi</Text>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    }
});