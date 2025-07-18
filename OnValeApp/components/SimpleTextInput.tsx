import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

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
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={[
            styles.container,
            { backgroundColor, borderColor }
        ]}>
            <TextInput
                style={[styles.input, { color: textColor }]}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={onChange}
                secureTextEntry={isPassword && !showPassword}
                autoCapitalize="none"
                cursorColor={textColor}
            />
            {isPassword && (
                <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                    <Feather
                        name={showPassword ? 'eye' : 'eye-off'}
                        size={20}
                        color={placeholderTextColor}
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
