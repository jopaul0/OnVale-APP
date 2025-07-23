//REACT
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

//THEME
import useTheme from './Themes';

//TYPES
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

//FUNCTIONS
export function SuccessModal({ visible, onClose, message }: BaseModalProps) {
    const { colors } = useTheme();
    //JSX
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.overlay}>
                <TouchableWithoutFeedback>
                    <View style={[styles.modalBox, styles.success, { backgroundColor: colors.background2 }]}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Feather name="x" size={24} color={colors.text} />
                        </TouchableOpacity>
                        <Text style={[styles.title, { color: colors.text }]}>Sucesso</Text>
                        <Text style={[styles.message, { color: colors.text }]}>{message || 'Operação realizada com sucesso!'}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
}

export function ErrorModal({ visible, onClose, message }: BaseModalProps) {
    const { colors } = useTheme();
    //JSX
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.overlay}>
                <TouchableWithoutFeedback>
                    <View style={[styles.modalBox, styles.error, { backgroundColor: colors.background2 }]}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Feather name="x" size={24} color={colors.text} />
                        </TouchableOpacity>
                        <Text style={[styles.title, { color: colors.text }]}>Erro</Text>
                        <Text style={[styles.message, { color: colors.text }]}>{message || 'Algo deu errado!'}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
}

export function CustomModal({ visible, onClose, children }: CustomModalProps) {
    const { colors } = useTheme();
    //JSX
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.overlay}>
                <TouchableWithoutFeedback>
                    <View style={[styles.modalBox, { backgroundColor: colors.background2 }]}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Feather name="x" size={24} color={colors.text} />
                        </TouchableOpacity>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
}

export function BlockingModal({ visible, children }: { visible: boolean; children: React.ReactNode }) {
    const { colors } = useTheme();
    //JSX
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <View style={styles.overlay}>
                <View style={[styles.modalBox, { backgroundColor: colors.background2 }]}>
                    {children}
                </View>
            </View>
        </Modal>
    );
}

//STYLE
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
        marginBottom: 8,
    },
    message: {
        fontSize: 16,
    },
});
