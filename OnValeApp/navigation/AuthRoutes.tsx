//REACT
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//SCREEN
import LoginScreen from '../screens/LoginScreen';

//COMPONENTS
import AppRoutes from './AppRoutes';
import DebtGuard from '../components/DebtGuard';

//HOOK
import { useAuth } from './AuthContext';

//CONSTANT
const Stack = createNativeStackNavigator();

//FUNCTION
export default function AuthRoutes() {
  //STATE
  const { isLoggedIn } = useAuth();

  //WRAPPER FUNCTION
  function AppWithGuards() {
    return (
      <DebtGuard>
        <AppRoutes />
      </DebtGuard>
    );
  }
  
  //JSX
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



