//REACT
import React from 'react';
import { View, StyleSheet } from 'react-native';

//FUNCTION
export default function Divider() {
    //STYLE
    const styles = StyleSheet.create({
        divider: { height: 1, backgroundColor: '#333', marginVertical: 12 }
    });
    //JSX
    return <View style={styles.divider} />;
}


