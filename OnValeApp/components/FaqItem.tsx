import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Feather } from '@expo/vector-icons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = { question: string; answer: string };
export const FaqItem = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(o => !o);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggle}>
        <Text style={styles.question}>{question}</Text>
        <Feather name={open ? 'chevron-up' : 'chevron-down'} size={20} color="#333" />
      </TouchableOpacity>
      {open && <Text style={styles.answer}>{answer}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal:16, paddingVertical:12, borderBottomWidth:1, borderBottomColor:'#eee' },
  header: { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
  question: { fontSize:16, fontWeight:'600', color:'#333', flex:1, marginRight:12 },
  answer: { marginTop:8, color:'#555', lineHeight:20, fontSize:14 },
});
