//REACT
import React, { FC, ReactNode } from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native';

//THEME
import useTheme from './Themes';

//TYPE
type props = {
    children: ReactNode
}

//FUNCTION
export default function KeyboardScroll ({ children } : props) {
    //STYLE
    const { height } = Dimensions.get('window');
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        wrapper: { flex: 1, backgroundColor: colors.background},
        scrollContent: {
            minHeight: height,
            flexGrow: 1,
        },
    });
    //JSX
    return (
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
}


