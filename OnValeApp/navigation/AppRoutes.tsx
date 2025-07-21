//REACT
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//COMPONENTS
import TabRoutes from './TabRoutes';
import { SettingsScreen } from '../screens/SettingsScreen';
import { OnValeIcon } from '../components/Icons';
import { CustomDrawer } from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#f6f6f6',
          height: 60,
        },
        headerLeftContainerStyle: {
          alignItems: 'center',
        },
        headerRight: () => <OnValeIcon size={40} />,
        headerRightContainerStyle: {
          paddingRight: 16,
          alignItems: 'center'
        },
        headerTitle: '',
        drawerStyle: {
          backgroundColor: '#f6f6f6',
          width: 300,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 6,
        },
        drawerActiveBackgroundColor: '#9B1A1E',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#aaa',
        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="HomeDrawer" component={TabRoutes} options={{ title: 'Início' }} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Configurações' }} />
    </Drawer.Navigator>
  );
}

