import axios from 'axios';
import API_URL from './apiURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getAuthHeaders() {
    const token = await AsyncStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

export async function getCompanies() {
    const response = await axios.get(`${API_URL}/admin/companies`, await getAuthHeaders());
    return response.data;
}

export async function getAdmins() {
    const response = await axios.get(`${API_URL}/admin/admins`, await getAuthHeaders());
    return response.data;
}
