//REACT
import React, { FC, ReactNode } from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    StyleSheet,
    Dimensions,
    ViewStyle
} from 'react-native';

//THEME
import useTheme from './Themes';

//TYPE
type props = {
    children: ReactNode,
    style?: ViewStyle,
    wrapperStyle?: ViewStyle
}

//FUNCTION
export default function KeyboardScroll ({ children, style, wrapperStyle } : props) {
    //STYLE
    const { height } = Dimensions.get('window');
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        wrapper: { flex: 1, backgroundColor: colors.background2},
        scrollContent: {
            minHeight: height,
            flexGrow: 1,
        },
    });
    //JSX
    return (
        <KeyboardAvoidingView
            style={[styles.wrapper, wrapperStyle]}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={[styles.scrollContent, style]}
                keyboardShouldPersistTaps="handled"
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}


