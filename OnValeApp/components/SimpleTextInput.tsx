import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import useTheme from './Themes';

type SimpleTextInputProps = {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  value: string;
  onChange: (text: string) => void;
  isPassword?: boolean;
};

export default function SimpleTextInput({
  backgroundColor,
  borderColor,
  textColor,
  placeholder = 'Digite aqui...',
  placeholderTextColor,
  value,
  onChange,
  isPassword = false,
}: SimpleTextInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor ?? colors.background2,
          borderColor: borderColor ?? colors.border,
        }
      ]}
    >
      <TextInput
        style={[styles.input, { color: textColor ?? colors.text }]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor ?? '#aaa'}
        value={value}
        onChangeText={onChange}
        secureTextEntry={isPassword && !showPassword}
        autoCapitalize="none"
        cursorColor={textColor ?? colors.text}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
          <Feather
            name={showPassword ? 'eye' : 'eye-off'}
            size={20}
            color={placeholderTextColor ?? '#aaa'}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    marginLeft: 8,
  },
});
