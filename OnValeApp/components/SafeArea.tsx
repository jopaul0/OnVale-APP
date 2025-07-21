// components/SafeArea.tsx
import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeArea: FC<{ children: ReactNode }> = ({ children }) => (
    // edges controla quais lados devem ganhar padding
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {children}
    </SafeAreaView>
);

export default SafeArea;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
});
