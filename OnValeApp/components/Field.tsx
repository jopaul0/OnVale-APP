//REACT
import { View, Text, StyleSheet } from 'react-native';

//COMPONENTS
import useTheme from './Themes';

export default function Field({ label, value }: { label: string; value: string }) {
    //STYLE
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        label: { fontSize: 12, marginBottom: 4 },
        value: { fontSize: 16, fontWeight: '500' },
    });
    //JSX
    return (
        <View>
            <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
            <Text style={[styles.value, { color: colors.text }]}>{value}</Text>
        </View>
    );
};