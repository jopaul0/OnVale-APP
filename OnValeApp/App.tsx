
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AuthProvider } from './navigation/AuthContext';
import AuthRoutes from './navigation/AuthRoutes';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor:'#f6f6f6' }} edges={['top', 'bottom']}>
        <NavigationContainer>
          <AuthProvider>
            <AuthRoutes />
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
