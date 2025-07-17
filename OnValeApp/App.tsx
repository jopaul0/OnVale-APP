import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './navigation/AuthRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
