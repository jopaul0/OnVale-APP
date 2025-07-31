import axios from 'axios';

import API_URL from './apiURL';

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
