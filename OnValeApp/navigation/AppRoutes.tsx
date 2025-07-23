//REACT
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//SCREENS
import { SettingsScreen } from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import SupportScreen from '../screens/SupportScreen';

//COMPONENTS
import { OnValeIcon } from '../components/Icons';
import { CustomDrawer } from '../components/CustomDrawer';
import useTheme from '../components/Themes';

//CONSTANTS
const Drawer = createDrawerNavigator();

//FUNCTIONS
export default function AppRoutes() {

  //STYLE
  const { colors } = useTheme();

  //JSX
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
          height: 60,
        },
        headerStatusBarHeight: 0,
        headerLeftContainerStyle: {
          alignItems: 'center'
        },
        headerRight: () => <OnValeIcon size={40} />,
        headerRightContainerStyle: {
          paddingRight: 16,
          alignItems: 'center'
        },
        headerTitle: '',
        drawerStyle: {
          backgroundColor: colors.background,
          width: 300,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 6,
        },
        drawerActiveBackgroundColor: '#9B1A1E',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: colors.text,
        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Início' }} />
      <Drawer.Screen name="SupportScreen" component={SupportScreen} options={{ title: 'Suporte' }} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Configurações' }} />
    </Drawer.Navigator>
  );
}

