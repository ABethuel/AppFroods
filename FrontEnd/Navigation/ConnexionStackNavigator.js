
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import ConnexionScreen from '../Screen/ConnexionScreen'
import InscriptionScreen from '../Screen/InscriptionScreen'
import BottomTabNavigator from './BottomTabNavigation';



const ConnexionStackNavigator = createStackNavigator({
    Connexion: { 
        screen: ConnexionScreen,
        navigationOptions: {
            headerShown: false

    }
    },
    Inscription: {
        screen: InscriptionScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Home : {
        screen: BottomTabNavigator,
        navigationOptions: {
            headerShown: false
        }
    }
})



export default createAppContainer(ConnexionStackNavigator)