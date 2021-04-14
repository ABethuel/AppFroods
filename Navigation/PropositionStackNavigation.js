import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from '../Screen/CameraScreen';
import ProposeDishScreen from '../Screen/DishesScreen/ProposeDishScreen';


const Stack = createStackNavigator();

export default function PropositionStackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
      <Stack.Screen name="Proposition" component={ProposeDishScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />

    </Stack.Navigator>
  );
}