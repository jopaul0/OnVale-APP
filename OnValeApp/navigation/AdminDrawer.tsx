//REACT
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//SCREENS
import RegisterScreen from '../screens/admin/RegisterScreen';
import UsersListScreen from '../screens/admin/UsersListScreen';

//COMPONENTS
import { OnValeIcon, OnValeIconWhite } from '../components/Icons';
import { CustomDrawer } from '../components/CustomDrawer';
import useTheme from '../components/Themes';

//CONSTANTS
const Drawer = createDrawerNavigator();

//FUNCTIONS
export default function AdminDrawer() {

  //STYLE
  const { colors } = useTheme();

  //JSX
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: '#f6f6f6',
        headerStyle: {
          backgroundColor: '#9B1A1E',
          height: 60,
        },
        headerStatusBarHeight: 0,
        headerLeftContainerStyle: { alignItems: 'center' },
        headerRight: () => <OnValeIconWhite size={40} />,
        headerRightContainerStyle: {
          paddingRight: 16,
          alignItems: 'center',
        },
        headerTitle: '',
        drawerStyle: {
          backgroundColor: colors.background,
          width: 300,
          elevation: 6,
        },
        drawerActiveBackgroundColor: '#9B1A1E',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: colors.text,
        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Registrar' }} />
      <Drawer.Screen name="UsersListScreen" component={UsersListScreen} options={{ title: 'Usuários' }} />
    </Drawer.Navigator>
  );
}
