//REACT
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//NAVIGATION
import { AuthProvider } from './navigation/AuthContext';
import AuthRoutes from './navigation/AuthRoutes';
import { DebtProvider } from './navigation/DebtContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }} edges={['top', 'bottom']}>
        <NavigationContainer>
          <AuthProvider>
            <DebtProvider>
              <AuthRoutes />
            </DebtProvider>
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
