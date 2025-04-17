import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../components/Settings/screens/SettingsScreen';
import QuizScreen from '../components/Quiz/screens/QuizScreen';
import ResultScreen from '../components/Quiz/screens/ResultScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configurar Quiz' }} />
      <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;