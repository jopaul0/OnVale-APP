// navigation/TabRoutes.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          ...styles.tabBar
        },

        tabBarItemStyle: {
          paddingVertical: 10,
        },
      }}
    >
      <Tab.Screen
        name="Plus1"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="plus-square"
              size={24}
              color={focused ? '#fff' : '#eee'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plus2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="plus-square"
              size={24}
              color={focused ? '#fff' : '#eee'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? '#fff' : '#eee'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plus3"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="plus-square"
              size={24}
              color={focused ? '#fff' : '#eee'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plus4"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="plus-square"
              size={24}
              color={focused ? '#fff' : '#eee'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#9B1A1E',
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
