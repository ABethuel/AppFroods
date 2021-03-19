import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font'
import Navigation from './Navigation/Navigation'

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
      <Navigation/>
    )
  }
}
