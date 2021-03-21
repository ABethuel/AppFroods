import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font'
import HomeScreen from './Screen/HomeScreen'
import BottomTabNavigator from './Navigation/BottomTabNavigation';

export default class App extends React.Component {

  state = {
    fontsLoaded: false,
  }

  UNSAFE_componentWillMount() {
    Font.loadAsync( {
      'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf')
    })
  }
  
  render() {
    return (
      <BottomTabNavigator/>
    )
  }
}
