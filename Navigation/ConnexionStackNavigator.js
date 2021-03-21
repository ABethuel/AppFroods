
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import ConnexionScreen from '../Screen/ConnexionScreen'
import InscriptionScreen from '../Screen/InscriptionScreen'



const ConnexionStackNavigator = createStackNavigator({
    Connexion: { 
        screen: ConnexionScreen,
        navigationOptions: {
        header: null

    }
    },
    Inscription: {
        screen: InscriptionScreen,
        navigationOptions: {
            header: null
        }
    }  
})



export default createAppContainer(ConnexionStackNavigator)