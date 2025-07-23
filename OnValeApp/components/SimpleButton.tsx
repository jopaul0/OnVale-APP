//REACT
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    GestureResponderEvent,
} from 'react-native';

//THEME
import useTheme from './Themes';

//TYPE
type SimpleButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    backgroundColor?: string;
    textColor?: string;
};

//FUNCTION
export default function SimpleButton({
    title,
    onPress,
    backgroundColor,
    textColor,
}: SimpleButtonProps) {
    
    //STYLE
    const { colors } = useTheme();
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

    //JSX
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
