import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../Screen/HomeScreen';
import ActualCommandScreen from '../Screen/CommandesScreen/ActualCommandScreen';
import ProfilScreen from '../Screen/ProfilScreen';
import CommandsStackNavigator from './CommandsStackNavigator';
import MyDishesNavigator from './MyDishesNavigator';
import HomeStackNavigator from './HomeStackNavigation';



const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName="HomeScreen"
          tabBarOptions={{
              activeTintColor: '#ECFFFA',
              inactiveTintColor: '#5B5B5B',
              style: {backgroundColor: '#57B8FF', height:55},
              labelStyle: {fontSize: 14, fontFamily:'Quicksand-SemiBold'},
              
          }}
      > 
        <Tab.Screen name="HomeScreen" component={HomeStackNavigator} options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
              name="home" color={color} 
              size={size}
              />
            ), }} 
        />

        <Tab.Screen name="Commandes" component={CommandsStackNavigator} options={{
            tabBarLabel: 'Commandes',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
              name="food" color={color} 
              size={size} 
              />
            ), }}
        />

        <Tab.Screen name="MyDishes" component={MyDishesNavigator} options={{
            tabBarLabel: "Mes Plats",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
              name="food-variant" color={color} 
              size={size} />
            ), }}
        /> 

        <Tab.Screen name="ProfilScreen" component={ProfilScreen} options={{
            tabBarLabel: "Profil",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
              name="account" color={color} 
              size={size} />
            ), }}
        /> 

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator