import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import API_URL from './apiURL';

export async function getCompanyProfile() {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.get(`${API_URL}/company/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
