import React, { FC, ReactNode } from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const KeyboardScroll: FC<{ children: ReactNode }> = ({ children }) => (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
        style={styles.wrapper}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.fillSpace}>{children}</View>
            </ScrollView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);

export default KeyboardScroll;

const styles = StyleSheet.create({
    wrapper: { flex: 1 },
    scrollContent: {
        flexGrow: 1,
    },
    fillSpace: {
        flex: 1, // garante que o conteúdo preencha o restante da tela
    },
});
