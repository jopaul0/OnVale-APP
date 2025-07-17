import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="HomeDrawer" component={TabRoutes} />
    </Drawer.Navigator>
  );
}
