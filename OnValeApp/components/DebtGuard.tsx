//REACT
import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

//CONTEXT
import { useDebt } from '../navigation/DebtContext';

//COMPONENTS
import { BlockingModal } from './Modals';

//THEMES
import useTheme from './Themes';

//TYPE
type Props = { children: React.ReactNode };

//FUNCTION
export default function DebtGuard({ children }: Props) {
    //HOOK
    const { debtLevel } = useDebt();

    //STYLE
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        banner: {
            flexDirection: 'row',
            backgroundColor: '#FFC107',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        bannerText: {
            color: '#333',
            fontWeight: '600',
            textAlign: 'center',
            flexShrink: 1,
        },

        modalContent: {
            paddingTop: 30,
            alignItems: 'center',
        },
        modalIcon: {
            marginBottom: 16,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 12,
            color: colors.text,
            textAlign: 'center',
        },
        text: {
            fontSize: 16,
            color: colors.text,
            textAlign: 'center',
            lineHeight: 22,
        },
        link: {
            fontWeight: 'bold',
        }
    });

    //HANDLE
    const handleSupport = () => {
        Linking.openURL(
            'https://api.whatsapp.com/send?phone=5512982044681&text=Ol%C3%A1%20OnVale!%20Preciso%20de%20suporte%20para%20regularizar%20minhas%20pend%C3%AAncias%20no%20app.%20Podem%20me%20ajudar%3F'
        );
    }

    //JSX
    if (debtLevel === 2) {
        return (
            <BlockingModal visible>
                <View style={styles.modalContent}>
                    <Feather name="alert-triangle" size={56} color="#c62828" style={styles.modalIcon} />
                    <Text style={styles.title}>Pendências no Escritório</Text>
                    <Text style={styles.text}>
                        Seu acesso está bloqueado até regularizar as pendências.
                        Entre em contato com o <Text style={styles.link} onPress={handleSupport}>
                            suporte.
                        </Text>
                    </Text>
                </View>
            </BlockingModal>
        );
    }
    return (
        <>
            {/* nível 1: banner de aviso */}
            {debtLevel === 1 && (
                <View style={styles.banner}>
                    <Feather name="alert-triangle" size={18} color="#333" style={{ marginRight: 6 }} />
                    <Text style={styles.bannerText}>
                        Você possui pendências financeiras. Regularize para evitar bloqueio.
                    </Text>
                </View>
            )}
            {children}
        </>
    );
}

