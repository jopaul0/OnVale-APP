import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import useTheme from './Themes'; // importa o hook do tema

type Props = {
  icon: string;
  label: string;
  value: string;
  onPress?: () => void;
  url?: string;
};

export const ContactCard = ({ icon, label, value, url, onPress }: Props) => {
  const { colors } = useTheme(); // pega as cores do tema

  const handlePress = () => {
    if (onPress) onPress();
    else if (url) Linking.openURL(url);
  };

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.background, shadowColor: '#000' }]}
      onPress={handlePress}
    >
      <Feather name={icon as any} size={22} color='#9B1A1E'style={{ marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
        <Text style={[styles.value, { color: colors.text }]}>{value}</Text>
      </View>
      <Feather name="chevron-right" size={20} color={colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
  },
});
