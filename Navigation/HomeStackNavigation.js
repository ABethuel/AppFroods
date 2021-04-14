import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import ProposeDishScreen from '../Screen/DishesScreen/ProposeDishScreen';
import ChoiceDishScreen from '../Screen/DishesScreen/ChoiceDishScreen';
import CategoryStackNavigator from './CategoryStackNavigation';
import PropositionStackNavigator from './PropositionStackNavigation';



const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Propose" component={PropositionStackNavigator} />
      <Stack.Screen name="Choice" component={CategoryStackNavigator} />

    </Stack.Navigator>
  );
}