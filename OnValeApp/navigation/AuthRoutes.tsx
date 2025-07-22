//REACT
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//COMPONENTS
import LoginScreen from '../screens/LoginScreen';
import AppRoutes from './AppRoutes';
import { useAuth } from './AuthContext';
import DebtGuard from '../components/DebtGuard';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  const { isLoggedIn } = useAuth();

  function AppWithGuards() {
    return (
      <DebtGuard>
        <AppRoutes />
      </DebtGuard>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="App" component={AppWithGuards} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}

