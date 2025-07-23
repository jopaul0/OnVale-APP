//REACT
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//THEME
import useTheme from '../components/Themes';
import SectionTitle from './SectionTitle';

//TYPE
type Props = { title: string; note?: string; children: React.ReactNode };

//FUNCTION
export default function Section({ title, note, children }: Props) {

    //STYLE
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        section: { marginBottom: 28 },
        sectionNote: { color: colors.text, fontSize: 13, marginBottom: 12, paddingHorizontal: 16 }
    });

    //JSX
    return (
        <View style={styles.section}>
            <SectionTitle title={title} />
            {note ? <Text style={styles.sectionNote}>{note}</Text> : null}
            {children}
        </View>
    );
}


