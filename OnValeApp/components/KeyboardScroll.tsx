import React, { FC, ReactNode } from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native';

const KeyboardScroll: FC<{ children: ReactNode }> = ({ children }) => (
    <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
        >
            {children}
        </ScrollView>
    </KeyboardAvoidingView>
);

export default KeyboardScroll;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: { flex: 1 },
    scrollContent: {
        minHeight: height,
        flexGrow: 1,       
    },
});
