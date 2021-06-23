import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPropositionDishScreen from '../Screen/MyPropositionDishScreen';
import OldPropositionScreen from '../Screen/OldPropositionScreen';
import DetailMyPropositionScreen from '../Screen/DetailMyPropositionScreen';


const Stack = createStackNavigator();

export default function MyDishesNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
      <Stack.Screen name="MyDish" component={MyPropositionDishScreen} />
      <Stack.Screen name="OldPropositions" component={OldPropositionScreen} />
      <Stack.Screen name="DetailProposition" component={DetailMyPropositionScreen} />
    </Stack.Navigator>
  );
}