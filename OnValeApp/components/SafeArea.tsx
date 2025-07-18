import React, {
    FC,
    ReactNode
} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,
} from 'react-native';

const SafeArea: FC<{ children: ReactNode }> = ({ children }) => (
    <SafeAreaView style={styles.safeArea}>
        {children}
    </SafeAreaView>
);
export default SafeArea;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
});