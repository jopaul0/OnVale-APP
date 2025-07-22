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

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen
          name="App"
          component={() => (
            <DebtGuard>
              <AppRoutes />
            </DebtGuard>
          )}
        />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}

