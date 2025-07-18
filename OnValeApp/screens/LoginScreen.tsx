//REACT
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking
} from 'react-native';

//COMPONENTS
import SafeArea from '../components/SafeArea';
import KeyboardScroll from '../components/KeyboardScroll';
import SimpleButton from '../components/SimpleButton';
import SimpleTextInput from '../components/SimpleTextInput';
import { ErrorModal } from '../components/Modals';

//FUNCTIONS
import { useAuth } from '../navigation/AuthContext';

export default function LoginScreen() {
  //STATES
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  //TEST
  const credencials = {
    email: "onvale@teste.com",
    CNPJ: "123123123123",
    password: "onvale123"
  }

  const { login } = useAuth();

  function handleLogin() {
    if ((email === credencials.email || email === credencials.CNPJ) && senha === credencials.password) {
      login();
    }
    else {
      setErrorModalVisible(true);
      setEmail('');
      setSenha('');
    }
  }
  //TEST

  function handleSaibaMais() {
    Linking.openURL(
      'https://api.whatsapp.com/send/?phone=5512982044681&text=Ol%C3%A1%20OnVale!%20Gostaria%20de%20saber%20como%20fa%C3%A7o%20para%20ter%20um%20cadastro%20no%20OnVale%20APP.&type=phone_number&app_absent=0'
    );
  }


  return (
    <SafeArea>
      <KeyboardScroll>
        <View style={styles.LogoContainer}>
          <Image
            source={require('../assets/logo-onvale.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

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

          <Text style={styles.footerText}>
            Não possui cadastro?{' '}
            <Text style={styles.link} onPress={handleSaibaMais}>
              Saiba mais
            </Text>
          </Text>
        </View>
      </KeyboardScroll>
      <ErrorModal
        visible={errorModalVisible}
        onClose={() => setErrorModalVisible(false)}
        message="Credenciais inválidas. Tente novamente."
      />
    </SafeArea>
  );
}

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
    backgroundColor: '#1e1e1e',
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
    color: '#fff',
    marginBottom: 24,
  },
  footerText: {
    color: '#ccc',
    marginTop: 24,
  },
  link: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
