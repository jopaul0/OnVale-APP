//REACT
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import useTheme from './Themes';

type Props = {
    activeTab: 'company' | 'admin';
    onChangeTab: (tab: 'company' | 'admin') => void;
};

//FUNCTION
export default function AdminTabs({ activeTab, onChangeTab }: Props) {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        tabContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 24,
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
                onPress={() => onChangeTab('company')}
                style={[
                    styles.tabButton,
                    { backgroundColor: activeTab === 'company' ? '#9B1A1E' : colors.background2 },
                ]}
            >
                <Text
                    style={[
                        styles.tabText,
                        { color: activeTab === 'company' ? '#f6f6f6' : colors.text },
                    ]}
                >
                    Empresa
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onChangeTab('admin')}
                style={[
                    styles.tabButton,
                    { backgroundColor: activeTab === 'admin' ? '#9B1A1E' : colors.background2 },
                ]}
            >
                <Text
                    style={[
                        styles.tabText,
                        { color: activeTab === 'admin' ? '#f6f6f6' : colors.text },
                    ]}
                >
                    Admin
                </Text>
            </TouchableOpacity>
        </View>
    );
}
