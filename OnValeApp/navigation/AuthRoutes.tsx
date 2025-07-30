//REACT
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//SCREEN
import LoginScreen from '../screens/LoginScreen';

//COMPONENTS
import ClientDrawer from './ClientDrawer';
import AdminDrawer from './AdminDrawer';
import DebtGuard from '../components/DebtGuard';

//HOOK
import { useAuth } from './AuthContext';

//CONSTANT
const Stack = createNativeStackNavigator();

//FUNCTION
export default function AuthRoutes() {

  //STATE
  const { isLoggedIn, userType } = useAuth();

  //WRAPPER FUNCTION
  function AppWithGuards({ children }: { children: React.ReactNode }) {
    return (
      <DebtGuard>
        {children}
      </DebtGuard>
    );
  }

  //JSX
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : userType === 'admin' ? (
        <Stack.Screen name="AdminDrawer" children={() => <AppWithGuards><AdminDrawer /></AppWithGuards>} />
      ) : (
        <Stack.Screen name="ClientDrawer" children={() => <AppWithGuards><ClientDrawer /></AppWithGuards>} />
      )}
    </Stack.Navigator>
  );
}
