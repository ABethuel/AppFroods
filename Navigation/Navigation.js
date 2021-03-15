import { Header } from 'react-native/Libraries/NewAppScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Connexion from '../Components/Connexion'
import Inscription from '../Components/Inscription'



const SearchStackNavigator = createStackNavigator({
    Connexion: { 
        screen: Connexion,
        navigationOptions: {
        header: null

    }
    },
    Inscription: {
        screen: Inscription,
        navigationOptions: {
            header: null
        }
    }  
})



export default createAppContainer(SearchStackNavigator)