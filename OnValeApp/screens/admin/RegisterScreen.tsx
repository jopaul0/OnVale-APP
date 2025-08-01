//REACT
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

//COMPONENTS
import SimpleButton from '../../components/SimpleButton';
import SimpleTextInput from '../../components/SimpleTextInput';
import KeyboardScroll from '../../components/KeyboardScroll';
import AdminTabs from '../../components/AdminTabs';
import useTheme from '../../components/Themes';
import Loading from '../../components/Loading';
import { SuccessModal, ErrorModal } from '../../components/Modals';
import BaseCard from '../../components/Card'

//API
import { registerUser } from '../../api/auth';

//FUNCTION
export default function RegisterScreen() {
  //STATES
  const [activeTab, setActiveTab] = useState<'companies' | 'admins'>('companies');
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  //STYLES
  const { colors } = useTheme();
  const { height } = Dimensions.get('window');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      minHeight: height - 60
    },
    form: {
      padding: 32,
      margin: 32,
      borderRadius: 16,
      backgroundColor: colors.background,
      gap: 32
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center'
    }
  });

  //CADASTRAR
  async function handleRegister() {
    if (senha !== confirmarSenha) {
      setErrorMessage('As senhas não coincidem!');
      setErrorModalVisible(true);
      return;
    }

    if (!nome || !email || !senha || (activeTab === 'companies' && !cnpj)) {
      setErrorMessage('Preencha todos os campos obrigatórios!');
      setErrorModalVisible(true);
      return;
    }

    setLoading(true);

    try {
      const data = await registerUser({
        type: activeTab === 'companies' ? 'companies' : 'admins',
        name: nome,
        email,
        password: senha,
        cnpj: activeTab === 'companies' ? cnpj : undefined,
      });

      setSuccessModalVisible(true);

      // Limpar campos após sucesso
      setNome('');
      setCnpj('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err?.response?.data?.message || 'Erro ao cadastrar usuário');
      setErrorModalVisible(true);
    } finally {
      setLoading(false);
    }
  }

  //JSX
  return (
    <KeyboardScroll style={styles.container}>
      <BaseCard style={styles.form}>
        <AdminTabs activeTab={activeTab} onChangeTab={setActiveTab} />

        <View>
          <SimpleTextInput placeholder="Nome" value={nome} onChange={setNome} />

          {activeTab === 'companies' && (
            <SimpleTextInput placeholder="CNPJ" value={cnpj} onChange={setCnpj} />
          )}

          <SimpleTextInput placeholder="Email" value={email} onChange={setEmail} />
          <SimpleTextInput placeholder="Senha" value={senha} onChange={setSenha} isPassword />
          <SimpleTextInput
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={setConfirmarSenha}
            isPassword
          />

          <View style={styles.button}>
            <SimpleButton
              backgroundColor={colors.text}
              textColor={colors.background}
              title="Cadastrar"
              onPress={handleRegister}
            />
          </View>
        </View>
      </BaseCard>
      <Loading visible={loading} />
      <SuccessModal
        visible={successModalVisible}
        onClose={() => setSuccessModalVisible(false)}
        message="Cadastro realizado com sucesso!"
      />
      <ErrorModal
        visible={errorModalVisible}
        onClose={() => setErrorModalVisible(false)}
        message={errorMessage}
      />
    </KeyboardScroll>
  );
}
