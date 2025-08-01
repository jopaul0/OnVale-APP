import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  Alert,
} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

// COMPONENTS
import KeyboardScroll from '../components/KeyboardScroll';
import SimpleButton from '../components/SimpleButton';
import SimpleTextInput from '../components/SimpleTextInput';
import { ErrorModal } from '../components/Modals';
import Loading from '../components/Loading';

// CONTEXT
import { useAuth } from '../navigation/AuthContext';
import { loginUser } from '../api/auth';

// THEME
import useTheme from '../components/Themes';

// FUNCTION
export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [hasSavedSession, setHasSavedSession] = useState(false);
  const [biometricAvailable, setBiometricAvailable] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
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
    iconButton: {
      marginTop: 16,
      padding: 12,
      backgroundColor: 'transparent',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  // Verifica sessão salva + biometria disponível
  useEffect(() => {
    const tryBiometricLogin = async () => {
      const token = await AsyncStorage.getItem('token');
      const userType = await AsyncStorage.getItem('user_type');

      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();

      const canUseBiometrics = compatible && enrolled;
      setBiometricAvailable(canUseBiometrics);

      if (token && userType && canUseBiometrics) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: 'Confirme sua identidade',
          fallbackLabel: 'Usar senha',
        });

        if (result.success) {
          await login(userType as any, token);
        } else {
          setHasSavedSession(true); // Mostra botão manual
        }
      } else if (token && userType) {
        setHasSavedSession(true); // Sessão salva, mas sem biometria
      }
    };

    tryBiometricLogin();
  }, []);

  // LOGIN COM EMAIL/SENHA
  async function handleLogin() {
    setLoading(true);
    try {
      const data = await loginUser(email, senha);
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('user_type', data.account_type);
      await login(data.account_type, data.token);
    } catch (err: any) {
      setErrorModalVisible(true);
      setEmail('');
      setSenha('');
    } finally {
      setLoading(false);
    }
  }

  // LOGIN MANUAL COM BIOMETRIA
  async function handleBiometricLogin() {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Confirme sua identidade',
        fallbackLabel: 'Usar senha',
      });

      if (result.success) {
        const token = await AsyncStorage.getItem('token');
        const userType = await AsyncStorage.getItem('user_type');

        if (token && userType) {
          await login(userType as any, token);
        } else {
          Alert.alert('Sessão expirada', 'Faça login com senha ao menos uma vez.');
        }
      } else {
        Alert.alert('Autenticação cancelada', 'Você pode entrar com a senha normalmente.');
      }
    } catch (err) {
      Alert.alert('Erro na biometria', 'Tente novamente ou use sua senha.');
    }
  }

  // ABRIR WHATSAPP
  function handleSaibaMais() {
    Linking.openURL(
      'https://api.whatsapp.com/send/?phone=5512982044681&text=Ol%C3%A1%20OnVale!%20Gostaria%20de%20saber%20como%20fa%C3%A7o%20para%20ter%20um%20cadastro%20no%20OnVale%20APP.&type=phone_number&app_absent=0'
    );
  }

  // JSX
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

        {hasSavedSession && biometricAvailable && (
          <View style={styles.iconButton}>
            <Feather
              name="unlock"
              size={32}
              color={colors.background}
              onPress={handleBiometricLogin}
            />
          </View>
        )}

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
      <Loading visible={loading} />
    </KeyboardScroll>
  );
}
