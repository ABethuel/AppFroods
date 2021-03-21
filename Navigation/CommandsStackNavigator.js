
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import ActualCommandScreen from '../Screen/CommandesScreen/ActualCommandScreen';
import AllComandsScreen from '../Screen/CommandesScreen/AllComandsScreen';




const ConnexionStackNavigator = createStackNavigator({
    ActualCommand: { 
        screen: ActualCommandScreen,
        navigationOptions: {
        header: null

    }
    },
    AllCommands: {
        screen: AllComandsScreen,
        navigationOptions: {
            header: null
        }
    }  
})



export default createAppContainer(ConnexionStackNavigator)