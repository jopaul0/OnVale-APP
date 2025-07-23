// REACT
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import useTheme from './Themes';

type Props = { question: string; answer: string };

export const FaqItem = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);
  const [contentH, setContentH] = useState(0);

  const animatedHeight = useSharedValue(0);
  const animatedOpacity = useSharedValue(0);

  const { colors } = useTheme();

  const toggle = () => {
    setOpen(o => !o);
    animatedHeight.value = withTiming(open ? 0 : contentH, { duration: 220 });
    animatedOpacity.value = withTiming(open ? 0 : 1, { duration: 220 });
  };

  const onLayoutAnswer = (e: LayoutChangeEvent) => {
    if (contentH === 0) setContentH(e.nativeEvent.layout.height);
  };

  const styleAnim = useAnimatedStyle(() => ({
    height: animatedHeight.value,
    opacity: animatedOpacity.value,
  }));

  const styles = StyleSheet.create({
    container: { paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, backgroundColor: colors.background, borderBottomColor: colors.background2 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    question: { fontSize: 16, fontWeight: '600', color: colors.text, flex: 1, marginRight: 12 },
    hiddenMeasure: { position: 'absolute', opacity: 0, zIndex: -1, left: 0, right: 0 },
    answerBox: { overflow: 'hidden' },
    answer: { marginTop: 8, color: colors.text, lineHeight: 20, fontSize: 14 },
  });


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggle}>
        <Text style={styles.question}>{question}</Text>
        <Feather name={open ? 'chevron-up' : 'chevron-down'} size={20} color={colors.text} />
      </TouchableOpacity>

      {contentH === 0 && (
        <View style={styles.hiddenMeasure} onLayout={onLayoutAnswer}>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      )}

      <Animated.View style={[styles.answerBox, styleAnim]}>
        <Text style={styles.answer}>{answer}</Text>
      </Animated.View>
    </View>
  );
};

