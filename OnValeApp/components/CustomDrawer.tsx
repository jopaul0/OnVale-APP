//REACT
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

//CONTEXT
import { useAuth } from '../navigation/AuthContext';

//COMPONENTS
import { OnValeIcon } from '../components/Icons';

//FUNCTION
export function CustomDrawer(props: any) {
  //HOOK
  const { logout } = useAuth();

  //STYLE
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
      borderBottomColor: '#7c7c7cff',
    },
    footer: {
      marginTop: 'auto',
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: '#7c7c7cff',

    },
    logoutText: {
      color: '#f00',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

  //JSX
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


