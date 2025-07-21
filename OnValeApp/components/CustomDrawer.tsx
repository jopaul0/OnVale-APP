//REACT
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

//COMPONENTS
import { useAuth } from '../navigation/AuthContext';
import { OnValeIcon } from '../components/Icons';

export function CustomDrawer(props: any) {
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
