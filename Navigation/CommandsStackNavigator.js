
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActualCommandScreen from '../Screen/CommandesScreen/ActualCommandScreen';
import AllComandsScreen from '../Screen/CommandesScreen/AllComandsScreen';


const Stack = createStackNavigator();

export default function CommandsStackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="ActualCommand" component={ActualCommandScreen} />
      <Stack.Screen name="AllCommands" component={AllComandsScreen} />
    </Stack.Navigator>
  );
}




