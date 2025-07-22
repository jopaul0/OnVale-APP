import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  icon: string;
  label: string;
  value: string;
  onPress?: () => void;
  url?: string;
};

export const ContactCard = ({ icon, label, value, url, onPress }: Props) => {
  const handlePress = () => {
    if (onPress) onPress();
    else if (url) Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Feather name={icon as any} size={22} color="#9B1A1E" style={{ marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#ccc" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection:'row',
    alignItems:'center',
    padding:16,
    marginHorizontal:16,
    marginVertical:6,
    backgroundColor:'#fff',
    borderRadius:12,
    elevation:2,
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowRadius:4,
    shadowOffset:{ width:0, height:2 }
  },
  label:{ fontSize:14, color:'#666' },
  value:{ fontSize:16, color:'#333', fontWeight:'600' }
});
