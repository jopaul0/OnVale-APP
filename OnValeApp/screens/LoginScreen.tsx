//REACT
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

//COMPONENTS
import SafeArea from '../components/SafeArea';
import KeyboardScroll from '../components/KeyboardScroll';
import SimpleButton from '../components/SimpleButton';
import SimpleTextInput from '../components/SimpleTextInput';

export default function LoginScreen() {
  //STATES
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  //HANDLER
  function handleLogin() {
    console.log('Login:', email, senha);
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
            Não possui cadastro? <Text style={styles.link}>Saiba mais</Text>
          </Text>
        </View>
      </KeyboardScroll>
    </SafeArea>
  );
}

//STYLES
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
