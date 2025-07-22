import React from 'react';
import {
    Modal,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

type BaseModalProps = {
    visible: boolean;
    onClose: () => void;
    message?: string;
};

type CustomModalProps = {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export function SuccessModal({ visible, onClose, message }: BaseModalProps) {
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.overlay}>
                <TouchableWithoutFeedback>
                    <View style={[styles.modalBox, styles.success]}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Feather name="x" size={24} color="#333" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Sucesso</Text>
                        <Text style={styles.message}>{message || 'Operação realizada com sucesso!'}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
}

export function ErrorModal({ visible, onClose, message }: BaseModalProps) {
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.overlay}>
                <TouchableWithoutFeedback>
                    <View style={[styles.modalBox, styles.error]}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Feather name="x" size={24} color="#333" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Erro</Text>
                        <Text style={styles.message}>{message || 'Algo deu errado!'}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
}

export function CustomModal({ visible, onClose, children }: CustomModalProps) {
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.overlay}>
                <TouchableWithoutFeedback>
                    <View style={styles.modalBox}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Feather name="x" size={24} color="#333" />
                        </TouchableOpacity>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
}

export function BlockingModal({ visible, children }: { visible: boolean; children: React.ReactNode }) {
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <View style={styles.overlay}>
                <View style={styles.modalBox}>
                    {/* sem botão de fechar */}
                    {children}
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#00000088',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: '85%',
        borderRadius: 12,
        padding: 20,
        backgroundColor: '#f6f6f6',
        position: 'relative',
    },
    success: {
        borderLeftWidth: 6,
        borderLeftColor: '#2e7d32',
    },
    error: {
        borderLeftWidth: 6,
        borderLeftColor: '#c62828',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    message: {
        fontSize: 16,
        color: '#333',
    },
});
