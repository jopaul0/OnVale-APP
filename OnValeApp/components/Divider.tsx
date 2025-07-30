//REACT
import React from 'react';
import { View, StyleSheet } from 'react-native';

import useTheme from './Themes';

//FUNCTION
export default function Divider() {
    //STYLE
    const { colors } = useTheme()
    const styles = StyleSheet.create({
        divider: { height: 1, backgroundColor: colors.border, marginVertical: 12 }
    });
    //JSX
    return <View style={styles.divider} />;
}


