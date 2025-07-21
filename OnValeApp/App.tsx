// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './navigation/AuthContext';
import AuthRoutes from './navigation/AuthRoutes';
import SafeArea from './components/SafeArea';

export default function App() {
  return (
      <SafeArea>
        <NavigationContainer>
          <AuthProvider>
            <AuthRoutes />
          </AuthProvider>
        </NavigationContainer>
      </SafeArea>
  );
}
