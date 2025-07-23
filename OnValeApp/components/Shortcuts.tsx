//REACT
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

//TYPE
type Props = {
    onPlus: () => void;
    onHome: () => void;
    onGoBack: () => void;
    onOpenFolderPessoal: () => void;
    onOpenFolderFiscal: () => void;
};

//FUNCTIONs
export default function Shortcuts({
    onPlus,
    onHome,
    onGoBack,
    onOpenFolderPessoal,
    onOpenFolderFiscal,
}: Props) {

    //JSX
    return (
        <View style={styles.bar}>
            <Shortcut icon="arrow-left" onPress={onGoBack} />
            <Shortcut icon="user" onPress={onOpenFolderPessoal} />
            <Shortcut icon="home" onPress={onHome} />
            <Shortcut icon="file" onPress={onOpenFolderFiscal} />
            <Shortcut icon="plus-square" onPress={onPlus} />
        </View>
    );
}

function Shortcut({ icon, onPress }: { icon: any; onPress: () => void }) {
    //JSX
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Feather name={icon} size={24} color="#fff" />
        </TouchableOpacity>
    );
}

//STYLE
const styles = StyleSheet.create({
    bar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,
        backgroundColor: '#9B1A1E',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    item: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
});
