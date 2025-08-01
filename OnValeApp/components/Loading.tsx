//REACT
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';

//TYPE
type LoadingOverlayProps = {
    visible: boolean;
};

//FUNCTION
export default function Loading({ visible }: LoadingOverlayProps) {
    //STYLE
    const styles = StyleSheet.create({
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(32, 4, 5, 0.27)',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    //JSX
    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
            onRequestClose={() => { }}
        >
            <View style={styles.overlay}>
                <ActivityIndicator size="large" color="#9B1A1E" />
            </View>
        </Modal>
    );
}

