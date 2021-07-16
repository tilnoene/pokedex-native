import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
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
            {...props}
        >
            <Info name={name} />
        </Modal>
    );
}