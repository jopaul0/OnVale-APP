//REACT
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//SCREEN
import LoginScreen from '../screens/LoginScreen';

//COMPONENTS
import ClientDrawer from './ClientDrawer';
import AdminDrawer from './AdminDrawer';

//HOOK
import { useAuth } from './AuthContext';

//CONSTANT
const Stack = createNativeStackNavigator();

//FUNCTION
export default function AuthRoutes() {

  //STATE
  const { isLoggedIn, userType } = useAuth();


  //JSX
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : userType === 'admins' ? (
        <Stack.Screen name="AdminDrawer" children={() => <AdminDrawer />} />
      ) : (
        <Stack.Screen name="ClientDrawer" children={() => <ClientDrawer />} />
      )}
    </Stack.Navigator>
  );
}
