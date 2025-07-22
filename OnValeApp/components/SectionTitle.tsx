import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const SectionTitle = ({ title }: { title: string }) => (
  <View style={styles.wrap}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrap: { marginTop: 24, marginBottom: 8, paddingHorizontal: 16 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
});
