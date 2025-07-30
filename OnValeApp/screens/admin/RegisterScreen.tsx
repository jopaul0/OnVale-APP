//REACT
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

//COMPONENTS
import SimpleButton from '../../components/SimpleButton';
import SimpleTextInput from '../../components/SimpleTextInput';
import KeyboardScroll from '../../components/KeyboardScroll';
import RegisterTabs from '../../components/RegisterTabs';
import useTheme from '../../components/Themes';

//FUNCTION
export default function RegisterScreen() {
  const [activeTab, setActiveTab] = useState<'company' | 'admin'>('company');
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    form: {
      padding: 32,
      margin: 32,
      borderRadius: 16,
      backgroundColor: colors.background2
    },
    button:{
      paddingHorizontal:64,
      alignItems: 'center'
    }
  });

  return (

      <View style={styles.container}>
        <View style={styles.form}>
          <RegisterTabs activeTab={activeTab} onChangeTab={setActiveTab} />
          <SimpleTextInput placeholder="Nome" value={nome} onChange={setNome} backgroundColor={colors.background} />

          {activeTab === 'company' && (
            <SimpleTextInput placeholder="CNPJ" value={cnpj} onChange={setCnpj} backgroundColor={colors.background} />
          )}

          <SimpleTextInput placeholder="Email" value={email} onChange={setEmail} backgroundColor={colors.background} />
          <SimpleTextInput placeholder="Senha" value={senha} onChange={setSenha} backgroundColor={colors.background} isPassword />
          <SimpleTextInput
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={setConfirmarSenha}
            backgroundColor={colors.background}
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
      </View>

  );
}
