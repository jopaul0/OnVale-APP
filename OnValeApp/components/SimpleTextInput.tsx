import React from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

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
    backgroundColor = '#2e2e2e',
    borderColor = '#555',
    textColor = '#f6f6f6',
    placeholder = 'Digite aqui...',
    placeholderTextColor = '#aaa',
    value,
    onChange,
    isPassword = false,
}: SimpleTextInputProps) {
    return (
        <TextInput
            style={[
                styles.input,
                {
                    backgroundColor,
                    borderColor,
                    color: textColor,
                },
            ]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChange}
            secureTextEntry={isPassword}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
});
