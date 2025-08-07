// navigation/AppNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TermDetailScreen from '../screens/TermDetailScreen';
import FullDictionaryScreen from '../screens/FullDictionaryScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Jet Propulsion Dictionary' }}
      />
      <Stack.Screen
        name="TermDetailScreen"
        component={TermDetailScreen}
        options={({ route }) => ({ title: route.params?.term?.name || 'Term Details' })}
      />
      <Stack.Screen
        name="FullDictionaryScreen"
        component={FullDictionaryScreen}
        options={{ title: 'Full Dictionary' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
