//REACT
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//SCREENS
import HomeScreen from '../screens/client/HomeScreen';
import ProfileScreen from '../screens/client/ProfileScreen';
import SettingsScreen from '../screens/client/SettingsScreen';
import SupportScreen from '../screens/client/SupportScreen';

//COMPONENTS
import { OnValeIcon } from '../components/Icons';
import { CustomDrawer } from '../components/CustomDrawer';
import useTheme from '../components/Themes';

//CONSTANTS
const Drawer = createDrawerNavigator();

//FUNCTIONS
export default function ClientDrawer() {

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
        headerLeftContainerStyle: { alignItems: 'center' },
        headerTitle: '',
        headerRight: () => <OnValeIcon size={40} />,
        headerRightContainerStyle: {
          paddingRight: 16,
          alignItems: 'center',
        },
        drawerStyle: {
          backgroundColor: colors.background,
          width: 300,
          elevation: 6,
        },
        drawerActiveBackgroundColor: '#9B1A1E',
        drawerActiveTintColor: '#f6f6f6',
        drawerInactiveTintColor: colors.text,
        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Início' }} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Perfil' }} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Configurações' }} />
      <Drawer.Screen name="SupportScreen" component={SupportScreen} options={{ title: 'Suporte' }} />
    </Drawer.Navigator>
  );
}
