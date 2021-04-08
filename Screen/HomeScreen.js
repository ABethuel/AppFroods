// Screen/HomeScreen

import React from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import HeaderInscription from '../Components/HeaderInscription'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.getScreen()
    }

    getScreen = () => {
        setTimeout(() => {
           this.setState({ isLoading: false })
        }, 1000);
     }

    _displayScreen() {
        if (this.state.isLoading === true){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color="grey" />
                </View>
            )
        } else {
            return(
                <View style={styles.main_container}>
                    <HeaderInscription/>

                    <TouchableOpacity style={styles.rechercher} onPress={() => this.props.navigation.navigate("Choice")}>
                        <Image style={styles.image} source={require('../images/Home/rechercher.png')}/>
                        <Text style={styles.text}>Rechercher un plat</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.proposer} onPress={() => this.props.navigation.navigate("Propose")}>
                        <Image style={styles.image} source={require('../images/Home/proposer.png')}/>
                        <Text style={styles.text}>Proposer un plat</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }    

    render() {
        return (
            <ScrollView style={styles.main_container}>
                {this._displayScreen()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    loading_container: {
        marginTop:400,
        backgroundColor : '#ECFFFA', 
      },

    main_container: {
        flex: 1,
        backgroundColor : '#ECFFFA', 
    },

    rechercher: {
        backgroundColor:'#57B8FF',
        height : 250,
        marginTop:150,
        margin : 65,
        borderRadius: 8,
        marginBottom:10,
        elevation: 4,
        shadowOffset:{
            width: 0,
            height:2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },

    proposer:{
        height : 250,
        backgroundColor:'#57B8FF',
        marginTop:20,
        margin : 65,
        borderRadius: 8,
        elevation: 4,
        shadowOffset:{
            width: 0,
            height:2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    
    image: {
        flex :3,
        marginTop: 5,
        marginLeft: 20,
        marginRight : 20,
        width: 180, 
        alignSelf : 'center'
    }, 

    text: {
        textAlign:'center', 
        fontSize : 24,
        flexWrap:'wrap',
        flex: 1,
        fontFamily:'Quicksand-Bold',
        marginTop:2,
        marginBottom:2,
        margin:8
    }
})

export default HomeScreen