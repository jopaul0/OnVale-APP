//REACT
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//THEME
import useTheme from './Themes';

//FUNCTION
export const SectionTitle = ({ title }: { title: string }) => {

  //STYLE
  const styles = StyleSheet.create({
    wrap: { marginTop: 24, marginBottom: 8, paddingHorizontal: 16 },
    title: { fontSize: 18, fontWeight: 'bold', color: useTheme().colors.text },
  });

  //JSX
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

}


