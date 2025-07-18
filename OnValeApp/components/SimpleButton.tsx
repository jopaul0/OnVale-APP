import {
    Text,
    TouchableOpacity,
    StyleSheet,
    GestureResponderEvent,
} from 'react-native';

type SimpleButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    backgroundColor?: string;
    textColor?: string;
};

export default function SimpleButton({
    title,
    onPress,
    backgroundColor = '#f6f6f6',
    textColor = '#1e1e1e',
}: SimpleButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginTop: 8,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
