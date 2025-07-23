//REACT
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//NAVIGATION
import { AuthProvider } from './navigation/AuthContext';
import AuthRoutes from './navigation/AuthRoutes';
import { DebtProvider } from './navigation/DebtContext';

//COMPONENTS
import useTheme from './components/Themes';

export default function App() {
  const { colors } = useTheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top', 'bottom']}>
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
