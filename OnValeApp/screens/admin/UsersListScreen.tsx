//REACT
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//COMPONENTS
import AdminTabs from '../../components/AdminTabs';
import BaseCard from '../../components/Card';
import Field from '../../components/Field';
import Divider from '../../components/Divider';
import useTheme from '../../components/Themes';
import Loading from '../../components/Loading';

//API
import { getAdmins, getCompanies } from '../../api/users';
import Section from '../../components/Section';

//FUNCTION
export default function UsersListScreen() {
    const [activeTab, setActiveTab] = useState<'companies' | 'admins'>('companies');
    const [companies, setCompanies] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: { flex: 1, padding: 16, backgroundColor: colors.background2 },
        tabsContainer: {
            backgroundColor: colors.background,
            padding: 16,
            borderRadius: 16,
            marginVertical: 16,
            marginHorizontal: 32
        },
    });

    async function loadData() {
        try {
            const [adminList, companyList] = await Promise.all([getAdmins(), getCompanies()]);
            setAdmins(adminList);
            setCompanies(companyList);
        } catch (err) {
            console.error('Erro ao carregar dados:', err);
        }
    }

    useEffect(() => {
        setLoading(true);
        loadData().finally(() => setLoading(false));
    }, []);

    const handleRefresh = async () => {
        setRefreshing(true);
        await loadData();
        setRefreshing(false);
    };

    const data = activeTab === 'companies' ? companies : admins;

    const renderItem = ({ item }: any) => (
        <BaseCard style={{ marginBottom: 16 }}>
            <Field label="Nome" value={item.name} />
            <Divider />
            {activeTab === 'companies' ? (
                <>
                    <Field label="CNPJ" value={item.cnpj} />
                    <Divider />
                    <Field label="Email" value={item.email} />
                </>
            ) : (
                <Field label="Email" value={item.email} />
            )}
        </BaseCard>
    );

    return (
        <View style={styles.container}>
            <BaseCard style={styles.tabsContainer}>
                <AdminTabs activeTab={activeTab} onChangeTab={setActiveTab} />
            </BaseCard>
            <Section title={activeTab === 'companies' ? 'Empresas Cadastradas' : 'Administradores Cadastrados'}>
                <FlatList
                    data={data}
                    keyExtractor={(item: any) => item.id.toString()}
                    renderItem={renderItem}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    contentContainerStyle={{ paddingBottom: 32 }}
                    ListEmptyComponent={() =>
                        loading ? null : (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
                                <Text style={{ color: colors.text, fontSize: 16 }}>
                                    Nenhum {activeTab === 'companies' ? 'empresa' : 'administrador'} cadastrado no momento.
                                </Text>
                            </View>
                        )
                    }
                />
            </Section>
            <Loading visible={loading} />
        </View>
    );
}
