//REACT
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

//THEME
import useTheme from './Themes';

//TYPE
type Props = {
  icon: string;
  label: string;
  value: string;
  onPress?: () => void;
  url?: string;
};

//FUNCTION
export const ContactCard = ({
  icon,
  label,
  value,
  url,
  onPress
}: Props) => {
  //STYLE
  const { colors } = useTheme();
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

  //HANDLE
  const handlePress = () => {
    if (onPress) onPress();
    else if (url) Linking.openURL(url);
  };

  //JSX
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.background, shadowColor: '#000' }]}
      onPress={handlePress}
    >
      <Feather name={icon as any} size={22} color='#9B1A1E' style={{ marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
        <Text style={[styles.value, { color: colors.text }]}>{value}</Text>
      </View>
      <Feather name="chevron-right" size={20} color={colors.text} />
    </TouchableOpacity>
  );
};

