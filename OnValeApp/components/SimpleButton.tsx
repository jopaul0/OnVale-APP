import {
    Text,
    TouchableOpacity,
    StyleSheet,
    GestureResponderEvent,
} from 'react-native';
import useTheme from './Themes';

type SimpleButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    backgroundColor?: string;
    textColor?: string;
};

export default function SimpleButton({
    title,
    onPress,
    backgroundColor,
    textColor,
}: SimpleButtonProps) {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: backgroundColor ?? colors.background2 }]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: textColor ?? colors.text }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
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
