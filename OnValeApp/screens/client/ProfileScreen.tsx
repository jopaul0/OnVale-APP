//REACT
import React, { useState } from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';

//THEME
import useTheme from '../../components/Themes';
import Divider from '../../components/Divider';
import BaseCard from '../../components/Card';
import Section from '../../components/Section';
import Field from '../../components/Field';

//FUNCTION
export default function ProfileScreen() {
    //STYLE
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: { flex: 1, paddingHorizontal: 16 },
        logoBox: { alignItems: 'center', paddingBottom: 6, paddingTop:12 },
        logo: { width: 200, height: 200, borderRadius: 50 }
    });

    //TEST
    const company = {
        logo: require('../../assets/company-logo2.png'),
        companyName: 'Atlas Tech Solutions Ltd.',
        cnpj: '45.678.912/0001-34',
        people: [
            { name: 'Lucas Andrade', email: 'lucas@atlastech.com.br', phone: '(11) 98888-1122' },
            { name: 'Fernanda Costa', email: 'fernanda@atlastech.com.br', phone: '(11) 97777-2233' },
            { name: 'Ricardo Oliveira', email: 'ricardo@atlastech.com.br', phone: '(11) 96666-3344' }
        ]
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.background2 }}>
            {/* LOGO */}
            <View style={styles.logoBox}>
                <Image source={company.logo} style={styles.logo} resizeMode="contain" />
            </View>

            {/* DADOS DA EMPRESA */}
            <Section title="Dados da empresa" note="O CNPJ não pode ser alterado pelo app.">
                <BaseCard>
                    <Field label="Nome da empresa" value={company.companyName} />
                    <Divider />
                    <Field label="CNPJ" value={company.cnpj} />
                </BaseCard>
            </Section>

            {/* CONTATOS */}
            <Section title="Contatos">
                {company.people.map((p, i) => (
                    <BaseCard key={i} style={{ marginBottom: 16 }}>
                        <Field label="Nome" value={p.name} />
                        <Divider />
                        <Field label="E-mail" value={p.email} />
                        <Divider />
                        <Field label="Telefone" value={p.phone} />
                    </BaseCard>
                ))}
            </Section>
        </ScrollView>
    );
}