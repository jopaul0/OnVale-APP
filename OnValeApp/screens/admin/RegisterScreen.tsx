//REACT
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

//COMPONENTS
import SimpleButton from '../../components/SimpleButton';
import SimpleTextInput from '../../components/SimpleTextInput';
import KeyboardScroll from '../../components/KeyboardScroll';
import RegisterTabs from '../../components/RegisterTabs';
import useTheme from '../../components/Themes';

//FUNCTION
export default function RegisterScreen() {
  //STATES
  const [activeTab, setActiveTab] = useState<'company' | 'admin'>('company');
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

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
      backgroundColor: colors.background
    },
    button: {
      paddingHorizontal: 64,
      alignItems: 'center'
    }
  });

  //JSX
  return (
    <KeyboardScroll style={styles.container}>
      <View style={styles.form}>
        <RegisterTabs activeTab={activeTab} onChangeTab={setActiveTab} />
        <SimpleTextInput placeholder="Nome" value={nome} onChange={setNome} />

        {activeTab === 'company' && (
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
            onPress={() => {
              if (senha !== confirmarSenha) {
                alert('As senhas não coincidem!');
                return;
              }
              alert(`Cadastro como ${activeTab} realizado!`);
            }}
          />
        </View>
      </View>
    </KeyboardScroll>

  );
}
