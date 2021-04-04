import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font'
import BottomTabNavigator from './Navigation/BottomTabNavigation';
import AppLoading from 'expo-app-loading';
import FirstNavigation from './Navigation/ConnexionStackNavigator';



export default function App() {
  let [fonts] = useFonts({
    // On mettra ici toutes nos polices d'écriture
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'), 
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf')
  })

  if (fonts === false) {
    return(
      <AppLoading/>
    )
  } else{
      return(
        <FirstNavigation/>
      )
  }
}

/*export default class App extends React.Component {
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
  }*/


  // Dans data mettre les fonction ""serveurs"" qui retournent true
