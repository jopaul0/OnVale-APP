import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import TabRoutes from './TabRoutes';
import { SettingsScreen } from '../screens/SettingsScreen';
import { OnValeIcon } from '../components/Icons';
import { useAuth } from './AuthContext';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const { logout } = useAuth();
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <OnValeIcon size={100} />
      </View>

      <View style={styles.drawerItemsContainer}>
        <DrawerItemList {...props} />
      </View>


      <View style={styles.footer}>
        <TouchableOpacity onPress={() => logout()}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
}

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#f6f6f6',
          height: 100,       // aumenta a altura do header
        },
        headerRight: () => <OnValeIcon size={40} />,
        headerRightContainerStyle: {
          paddingRight: 16,
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

const styles = StyleSheet.create({
  drawerItemsContainer: {
    marginTop: 50,
    rowGap: 12,
    paddingHorizontal: 8,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#33333346',
  },
  footer: {
    marginTop: 'auto',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#33333346',

  },
  logoutText: {
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
