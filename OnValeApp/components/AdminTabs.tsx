//REACT
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import useTheme from './Themes';

type Props = {
    activeTab: 'companies' | 'admins';
    onChangeTab: (tab: 'companies' | 'admins') => void;
};

//FUNCTION
export default function AdminTabs({ activeTab, onChangeTab }: Props) {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        tabContainer: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        tabButton: {
            paddingVertical: 10,
            paddingHorizontal: 24,
            borderRadius: 8,
            marginHorizontal: 4,
        },
        tabText: {
            fontSize: 16,
            fontWeight: 'bold',
        },
    });

    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity
                onPress={() => onChangeTab('companies')}
                style={[
                    styles.tabButton,
                    { backgroundColor: activeTab === 'companies' ? '#9B1A1E' : colors.background2 },
                ]}
            >
                <Text
                    style={[
                        styles.tabText,
                        { color: activeTab === 'companies' ? '#f6f6f6' : colors.text },
                    ]}
                >
                    Empresa
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onChangeTab('admins')}
                style={[
                    styles.tabButton,
                    { backgroundColor: activeTab === 'admins' ? '#9B1A1E' : colors.background2 },
                ]}
            >
                <Text
                    style={[
                        styles.tabText,
                        { color: activeTab === 'admins' ? '#f6f6f6' : colors.text },
                    ]}
                >
                    Admin
                </Text>
            </TouchableOpacity>
        </View>
    );
}
