import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    console.log('Login:', email, senha);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View style={styles.wrapper}>
              <View style={styles.LogoContainer}>
                <Image
                  source={require('../assets/logo-onvale.png')}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.container}>
                <Text style={styles.title}>Login</Text>

                <TextInput
                  style={styles.input}
                  placeholder="CNPJ ou email"
                  placeholderTextColor="#aaa"
                  value={email}
                  onChangeText={setEmail}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  placeholderTextColor="#aaa"
                  secureTextEntry
                  value={senha}
                  onChangeText={setSenha}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                  Não possui cadastro? <Text style={styles.link}>Saiba mais</Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  wrapper: {
    flex: 1,
  },
  LogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  container: {
    flex: 1, // <-- ESSENCIAL para ocupar o restante da tela
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
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#2e2e2e',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    color: '#fff',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#1e1e1e',
    fontWeight: 'bold',
    fontSize: 16,
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
