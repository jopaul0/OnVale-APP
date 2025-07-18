import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './navigation/AuthContext';
import AuthRoutes from './navigation/AuthRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AuthRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
