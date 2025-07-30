//REACT
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';

//COMPONENTS
import KeyboardScroll from '../components/KeyboardScroll';
import SimpleButton from '../components/SimpleButton';
import SimpleTextInput from '../components/SimpleTextInput';
import { ErrorModal } from '../components/Modals';

//CONTEXT
import { useAuth } from '../navigation/AuthContext';

//THEME
import useTheme from '../components/Themes';
import { useDebt, DebtLevel } from '../navigation/DebtContext';

//FUNCTION
export default function LoginScreen() {
  //STATES
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const { setDebtLevel } = useDebt();

  //HOOK
  const { login } = useAuth();

  //STYLE
  const { isDark, colors } = useTheme();
  const styles = StyleSheet.create({
    LogoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 50,
    },
    container: {
      flex: 1,
      paddingHorizontal: 50,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderTopLeftRadius: 150,
      paddingVertical: 32,
    },
    logo: {
      width: 500,
      height: 100,
    },
    title: {
      fontSize: 28,
      marginBottom: 24,
    },
    footerText: {
      marginTop: 24,
    },
    link: {
      fontWeight: 'bold',
    },
  });

  //TEST
  const credencials = {
    client: {
      email: "atlas@teste.com",
      CNPJ: "123123123123",
      password: "atlas123",
      debt: 0
    },
    admin: {
      email: "onvale@teste.com",
      CNPJ: "123123123123",
      password: "onvale123",
      debt: 0
    }
  }


  //HANDLES
  function handleLogin() {

    //LOGICA
    if ((email === credencials.client.email || email === credencials.client.CNPJ) && senha === credencials.client.password) {
      login('client');
      setDebtLevel(credencials.client.debt as DebtLevel)
    }

    else if ((email === credencials.admin.email || email === credencials.admin.CNPJ) && senha === credencials.admin.password) {
      login('admin');
      setDebtLevel(credencials.admin.debt as DebtLevel)
    }

    else {
      setErrorModalVisible(true);
      setEmail('');
      setSenha('');
    }
  }

  function handleSaibaMais() {
    Linking.openURL(
      'https://api.whatsapp.com/send/?phone=5512982044681&text=Ol%C3%A1%20OnVale!%20Gostaria%20de%20saber%20como%20fa%C3%A7o%20para%20ter%20um%20cadastro%20no%20OnVale%20APP.&type=phone_number&app_absent=0'
    );
  }

  //JSX
  return (
    <KeyboardScroll>
      <View style={styles.LogoContainer}>
        <Image
          source={isDark ? require('../assets/logo-onvale-white.png') : require('../assets/logo-onvale.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.container, { backgroundColor: colors.text }]}>
        <Text style={[styles.title, { color: colors.background }]}>Login</Text>

        <SimpleTextInput
          placeholder="CNPJ ou email"
          value={email}
          onChange={setEmail}
        />

        <SimpleTextInput
          placeholder="Senha"
          isPassword
          value={senha}
          onChange={setSenha}
        />
        <SimpleButton title="Login" onPress={handleLogin} />

        <Text style={[styles.footerText, { color: colors.background }]}>
          Não possui cadastro?{' '}
          <Text style={[styles.link, { color: colors.background }]} onPress={handleSaibaMais}>
            Saiba mais
          </Text>
        </Text>
      </View>
      <ErrorModal
        visible={errorModalVisible}
        onClose={() => setErrorModalVisible(false)}
        message="Credenciais inválidas. Tente novamente."
      />
    </KeyboardScroll>
  );
}

