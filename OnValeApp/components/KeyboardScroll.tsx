import React, {
    FC,
    ReactNode
} from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';

const KeyboardScroll: FC<{ children: ReactNode }> = ({ children }) => (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.wrapper}
        keyboardVerticalOffset={60}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
                contentContainerStyle={styles.wrapper}
                keyboardShouldPersistTaps="handled"
            >
                {children}
            </ScrollView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);
export default KeyboardScroll;

const styles = StyleSheet.create({
    wrapper: { flex: 1 }
});