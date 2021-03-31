
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SandwhichScreen from '../Screen/DishesScreen/CategorysScreen/SandwichScreen';
import SaladsScreen from '../Screen/DishesScreen/CategorysScreen/SaladsScreen';
import ItalianScreen from '../Screen/DishesScreen/CategorysScreen/ItalianScreen';
import AsianScreen from '../Screen/DishesScreen/CategorysScreen/AsianScreen';
import VeganScreen from '../Screen/DishesScreen/CategorysScreen/VeganScreen';
import AllScreen from '../Screen/DishesScreen/CategorysScreen/AllScreen';
import ChoiceDishScreen from '../Screen/DishesScreen/ChoiceDishScreen';




const Stack = createStackNavigator();

export default function CategoryStackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
        <Stack.Screen name='Home' component={ChoiceDishScreen}/>
        <Stack.Screen name="Sandwich" component={SandwhichScreen} />
        <Stack.Screen name="Salads" component={SaladsScreen} />
        <Stack.Screen name="Italian" component={ItalianScreen} />
        <Stack.Screen name="Asian" component={AsianScreen} />
        <Stack.Screen name="Vegan" component={VeganScreen} />
        <Stack.Screen name="All" component={AllScreen} />
    </Stack.Navigator>
  );
}




