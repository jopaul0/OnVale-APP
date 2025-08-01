import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import API_URL from './apiURL';

type UserType = 'admins' | 'companies';

export async function loginUser(login: string, password: string) {
  try {
    console.log('Conectando');
    const response = await axios.post(`${API_URL}/company/login`, {
      login,
      password,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Credenciais inválidas');
    }
    throw new Error('Erro na conexão com o servidor');
  }
}

export async function registerUser({
  type,
  name,
  email,
  password,
  cnpj,
}: {
  type: UserType;
  name: string;
  email: string;
  password: string;
  cnpj?: string;
}) {
  const token = await AsyncStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };

  const response = await axios.post(
    `${API_URL}/company/register`,
    { type, name, email, password, cnpj },
    { headers }
  );

  return response.data;
}