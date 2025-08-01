//REACT
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Text } from 'react-native';

//API
import { getCompanyProfile } from '../../api/company';

//THEME
import useTheme from '../../components/Themes';
import Divider from '../../components/Divider';
import BaseCard from '../../components/Card';
import Section from '../../components/Section';
import Field from '../../components/Field';
import Loading from '../../components/Loading';

//FUNCTION
export default function ProfileScreen() {
  const [company, setCompany] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 16 },
    logoBox: { alignItems: 'center', paddingBottom: 6, paddingTop: 12 },
    logo: { width: 200, height: 200, borderRadius: 50 },
    placeholderLogo: {
      width: 200,
      height: 200,
      borderRadius: 50,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    placeholderText: {
      color: colors.text,
      fontSize: 16,
      textAlign: 'center',
      paddingVertical: 32,
    },
  });

  useEffect(() => {
    setLoading(true);
    async function loadData() {
      try {
        const data = await getCompanyProfile();
        setCompany(data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar dados da empresa:', err);
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (!company) return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background2 }}>
      <Loading visible={loading} />
    </ScrollView>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background2 }}>
      {/* LOGO DA EMPRESA */}
      <View style={styles.logoBox}>
        {company.logo_path ? (
          <Image
            source={{ uri: company.logo_path }}
            style={styles.logo}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.placeholderLogo}>
            <Text style={{ color: '#888' }}>Sem logo</Text>
          </View>
        )}
      </View>

      {/* DADOS DA EMPRESA */}
      <Section title="Dados da empresa" note="O CNPJ não pode ser alterado pelo app.">
        <BaseCard>
          <Field label="Nome da empresa" value={company.name} />
          <Divider />
          <Field label="CNPJ" value={company.cnpj} />
          <Divider />
          <Field label="Email" value={company.email} />
        </BaseCard>
      </Section>

      {/* CONTATOS */}
      <Section title="Contatos">
        {company.contacts.length === 0 ? (
          <Text style={styles.placeholderText}>Nenhum contato cadastrado.</Text>
        ) : (
          company.contacts.map((p: any, i: number) => (
            <BaseCard key={i} style={{ marginBottom: 16 }}>
              <Field label="Nome" value={p.name} />
              <Divider />
              <Field label="E-mail" value={p.email} />
              <Divider />
              <Field label="Telefone" value={p.phone} />
            </BaseCard>
          ))
        )}
      </Section>
      <Loading visible={loading} />
    </ScrollView>
  );
}
