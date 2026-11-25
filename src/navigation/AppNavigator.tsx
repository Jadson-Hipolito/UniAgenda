
import React from 'react';
import { Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  CalendarScreen,
  TasksScreen,
  SubjectsScreen,
  ProfileScreen,
} from '../screens';

import { colors } from '../styles/theme';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
  Inicio: 'home-outline',
  Calendario: 'calendar-outline',
  Tarefas: 'checkbox-outline',
  Disciplinas: 'book-outline',
  Perfil: 'person-outline',
};

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.text,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={icons[route.name]}
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Calendario"
        component={CalendarScreen}
      />
      <Tab.Screen
        name="Tarefas"
        component={TasksScreen}
      />
      <Tab.Screen
        name="Disciplinas"
        component={SubjectsScreen}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
