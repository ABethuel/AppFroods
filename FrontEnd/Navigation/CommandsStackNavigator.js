
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActualCommandScreen from '../Screen/CommandesScreen/ActualCommandScreen';
import AllComandsScreen from '../Screen/CommandesScreen/AllComandsScreen';
import DetailCommandScreen from '../Screen/CommandesScreen/DetailCommandScreen';
import DetailAllScreen from '../Screen/CommandesScreen/DetailAllScreen';
import ProfilCookerScreen from '../Screen/CommandesScreen/ProfilCookerScreen';


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
      <Stack.Screen name="DetailActual" component={DetailCommandScreen} />
      <Stack.Screen name="DetailAll" component={DetailAllScreen} />
      <Stack.Screen name="ProfilCooker" component={ProfilCookerScreen} />

    </Stack.Navigator>
  )
}




